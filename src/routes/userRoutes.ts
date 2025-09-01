import { Router, Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const router = Router();

// Registro
router.post("/register", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Verificar si ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "Usuario ya registrado" });

    // Encriptar password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "Usuario registrado exitosamente", user });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Login
router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: "Usuario no encontrado" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).json({ error: "Credenciales incorrectas" });

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });

    res.json({ message: "Login exitoso", token });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});


// Obtener perfil (requiere token)
router.get("/me", async (req: Request, res: Response) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Token requerido" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string };
    const user = await User.findById(decoded.id).select("-password");
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

    res.json(user);
  } catch {
    res.status(401).json({ error: "Token inválido" });
  }
});


/*
// Listar usuarios
router.get("/", async (_req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}); */

// Stats: total de usuarios por email
router.get("/stats", async (_req: Request, res: Response) => {
  try {
    const result = await User.aggregate([
      { $group: { _id: "$email", total: { $sum: 1 } } },
      { $sort: { total: -1 } }
    ]);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

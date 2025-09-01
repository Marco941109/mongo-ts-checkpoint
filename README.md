
1.- El proyecto fue desarrollado en un repositorio nuevo.       
2.- Se conecta con el repositorio local
    el proyecto está en GitHub en la rama main.
    igual tiene una rama TEST-01
3.- El crud tiene una rama diferente por cada dominio
4.- Al  hacer una insersion a la base de datos mongo DB valida si el usario no existe
5.- El proyecto hace que un usuario pueda crear ordenes vinculadas a un truck y origen.
6.- El proyecto usa variables de entorno en un archivo .env
8.- Enlace al repositorio de Git 
(https://github.com/Marco941109/mongo-ts-checkpoint/tree/main).


ESTRUCTURA SE CHECKPOINT

/MONGO-TS-CHECKPOINT
│    ├─ /node_modules                                 # modulos
│    ├─ /src 
│    │    ├─ /controllers                             # Logica del negocio
│    │    │       └─ locationController.ts           
│    │    │       └─loginController.ts                
│    │    │       └─orderController.ts                
│    │    │       └─truckController.ts                
│    │    │       └─userController.ts                 
│    │    ├─ /middlewares                             # middleware de autenticación   
│    │    │       └─ auth.ts                          # encargado de proteger las rutas
│    │    │
│    │    ├─ /models                                  # Lógica de las conexiones a la base de datos                            
│    │    │       └─ Location.ts    
│    │    │       └─ Login.ts    
│    │    │       └─ Order.ts    
│    │    │       └─ Truck.ts    
│    │    │       └─ User.ts    
│    │    │
│    │    └─ /routers                                 # rutas de tu API
│    │            └─ authRoutes.ts              
│    │            └─ index.ts                   
│    │            └─ locationRoutes.ts          
│    │            └─ orderRoutes.ts             
│    │            └─ truckRoutes.ts             
│    │            └─ userRoutes.ts              
│    │    
│    ├─ /app.ts
│    └─ /server.ts
│    
├─ .env                                               # variables de entorno
├─ .gitgnore
├─ mongo-ts-checkpoint.postman_collection.json
├─ package.lock.json
├─ package.json
└─ tsconfing.ts                

intruciones de uso

postman 
enviar el metodo post para agregar un usuario, con el correo y la contraseña
este valida si el usaurio existe, si existe no registra.

al realizar los cambios genera un token jwt que dura una hora.


variables de entorno en un archivo .env
PORT=4000
MONGO_URI=mongodb://localhost:27017/mongo-ts-db
JWT_SECRET=mi_clave_secreta_super_segura


Durante la prueba logré completar la mayoría de los endpoints requeridos,
incluyendo registro, login y rutas protegidas. Sin embargo, me faltó implementar una de las APIs.
Esto se debió a que quise asegurar que todo lo que hice estuviera correctamente funcionando.
Hubo algunos detalles al configurar mi cuenta de Google para obtener la API Key del localizador,
lo que ocasionó que no pudiera completar esa parte de la prueba. Esto se debió a ajustes de
seguridad y restricciones propias de Google para el uso de la API.

Entiendo que no completé una parte de la prueba, pero me gustaría que consideraran todo el trabajo
que sí completé, porque refleja mis habilidades y cómo abordo los desafíos. 
Estoy muy interesado en la oportunidad y en contribuir al equipo.
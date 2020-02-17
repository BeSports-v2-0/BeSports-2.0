# BeSport.

## Introducción:
Nace de la necesidad de las personas que cada vez más, toman hábitos saludables. Aquí, encontraras tu progreso concentrado en una sola página, además podrás ver donde se encuentran los polideportivos más cercanos a tu zona.
## Esquema de distribución:
Cuenta con una pagina principal, donde podrás ver lo que te ofrece esta web; una vez que creas tu cuenta o inicias sesión en ella, podrás ver una selección de deportes a los que consultar.
Por un lado tenemos el “running” el cual podrás acceder y ver su calendario de eventos, pudiendo ver precios, ubicación, distancia, dificultad etc, y si te gusta, puedes añadirlo a favoritos, que posteriormente te saldrá en tu perfil.
O puedes optar por ver la ubicación de polideportivos así como sus horarios.
Una vez entras en tu perfil, puedes ver una foto de ti, así como información tuya, además puedes ver las carreras a las que te has apuntado y comprobar en la gráfica tu progreso anual, además de añadir fotos a tu album de lo que fotografíes en las carreras.

   ROUTE | HTTP VERB |  DESCRIPTION
 --------|-----------|-------------
 /index  |  Get      | Pagina principal
 /signup |  Post     | Crearse una cuenta
 /login  |  Post     | Entrar en tu perfil o iniciar sesión
 /menu   |  Get      |  eleccion de deporte
/profile |  Get      | Ver progreso y deportes
/runs    |  Get      | Catálogo de carreras
/sportcenter| Get    | Ubicación de polideportivos en Madrid


* /index-> pagina principal donde encuentras una Presentación  
* /signup-> formulario de registro 
* /login-> formulario de inicio de sesión que redirige al menu. 
* /menu-> puedes selecionar entre ver carreras o polideportivos 
* /profile-> perfil donde aparece imagen de usuario e información, ademas de las carreras donde se suscrito, y una gráfica de eventos a los que ha asistido a lo largo del año 
* /carreras-> aparece el menu de carreras con una foto y pequeña descripción, junto a dos botones: mas información, y suscribirse(en suscribirse, se te ira a tu perfil y ademas te mandara un correo por google calendar) y un mapa donde aparece el punto de partida.    

## MODELOS:
Usuario: 
````
const userSchema = new Schema({

  username: String,
  email: String,
  password: String,

  profilePicture: {
    name: String,
    path: String
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})
````

Evento carreras:
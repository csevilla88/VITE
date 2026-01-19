import './style.css'
import Swal from 'sweetalert2'
import { Button } from '../Componentes/Button/Button.js';


/*Para nuestro primer uso de esta librería vamos a importar el objeto Swal, 
que es el que nos permitirá utilizar todos los métodos que tenga la librería 
y acto seguido ejecutaremos nuestra primera alerta. */
Swal.fire({
  title: "Mi primera alerta",
  text: "Esta es la descripción de la alerta",
  icon: "success",
  confirmButtonText: "Aceptar"
})


/*Ahora vamos a crear un botón de manera normal con el uso del DOM y vamos a hacer que la alerta aparezca al pulsar dicho botón, 
cambiando también algunas de las propiedades de la alerta, 
para que veamos el uso de las mismas que habéis podido ver en la documentación*/

const button = document.createElement("button");
button.textContent = "Hazme click!";
button.addEventListener("click", () => {
    Swal.fire({
        title: "Mi primera alerta",
        text: "Esta es la descripción de mi primera alerta",
        icon: "success",
        confirmButtonText: "Aceptar",
        background: "orange",
        color: "black",
        imageUrl: "https://www.shutterstock.com/image-illustration/david-street-style-graphic-designtextile-600nw-2265632523.jpg",
        iconColor: "black",
        imageWidth: 50,
        imageHeight: 50
    });
})

document.body.append(button);

document.body.append(Button("Este es un botón pequeño", "s"))
document.body.append(Button("Este es un botón normal"))
document.body.append(Button("Este es un botón grande", "l"))

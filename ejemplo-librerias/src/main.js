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


const Card = (text, src) => {
  const card = document.createElement("div");
  const p = document.createElement("p");
  const img = document.createElement("img");

  card.classList.add("card");
  img.src = src;
  p.textContent = text;

  card.append(img, p, Button("Comprar"));
  return card;
};

document.body.append(
  Card(
    "Texto de ejemplo",
    "https://img.freepik.com/foto-gratis/retrato-abstracto-ojo-elegancia-mujeres-jovenes-generado-ai_188544-9712.jpg"
  )
);


document.body.append(
    Card(
      "Otro texto!",
      "https://www.aulacreactiva.com/wp-content/uploads/2021/06/tipos-de-formatos-para-diseno-grafico.jpg"
    )
  );
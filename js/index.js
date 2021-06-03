import { arrayPersonajes } from "./personajes.js";
import { Rey } from "./Rey.js";
import { Luchador } from "./Luchador.js";
import { Asesor } from "./Asesor.js";
import { Escudero } from "./Escudero.js";

const pintaPersonajes = () => {
    let delay = 1;
    const personajes = document.querySelector(".personajes");
    for (const personaje of arrayPersonajes) {
        const { nombre, familia, edad, vivo } = personaje;
        const elementoPersonaje = document
            .querySelector(".personaje-dummy")
            .cloneNode(true);
        elementoPersonaje.classList.remove("personaje-dummy");
        const imgPersonaje = elementoPersonaje.querySelector(".img-personaje");
        imgPersonaje.src = `img/${nombre}.jpg`;
        imgPersonaje.alt = `${nombre} ${familia}`;
        const nombrePersonaje = elementoPersonaje.querySelector(".nombre");
        nombrePersonaje.textContent = `${nombre} ${familia}`;
        const edadPersonaje = elementoPersonaje.querySelector(".metadata .edad");
        edadPersonaje.textContent = edad;
        if (vivo) {
            elementoPersonaje
                .querySelector(".estado .vivo")
                .classList.remove("d-none");
        } else {
            elementoPersonaje
                .querySelector(".estado .muerto")
                .classList.remove("d-none");
            imgPersonaje.classList.add("muerto");
        }
        const emoji = elementoPersonaje.querySelector(".emoji");
        if (personaje instanceof Rey) {
            const elementAnyosReinado = elementoPersonaje.querySelector(
                ".personaje-overlay .metadata .anyos-reinado"
            );
            elementAnyosReinado.classList.remove("d-none");
            elementAnyosReinado.textContent = `Años de reinado: ${personaje.anyosReinado}`;
            emoji.textContent = "👑";
        } else if (personaje instanceof Luchador) {
            const elementArma = elementoPersonaje.querySelector(
                ".personaje-overlay .metadata .arma"
            );
            elementArma.classList.remove("d-none");
            elementArma.textContent = `Arma: ${personaje.arma}`;
            const elementDestreza = elementoPersonaje.querySelector(
                ".personaje-overlay .metadata .destreza"
            );
            elementDestreza.classList.remove("d-none");
            elementDestreza.textContent = `Destreza: ${personaje.destreza}`;
            emoji.textContent = "🗡";
        } else if (personaje instanceof Escudero) {
            const elementPeloteo = elementoPersonaje.querySelector(
                ".personaje-overlay .metadata .peloteo"
            );
            elementPeloteo.classList.remove("d-none");
            elementPeloteo.textContent = `Peloteo: ${personaje.pelotismo}`;
            const elementSirve = elementoPersonaje.querySelector(
                ".personaje-overlay .metadata .sirve"
            );
            elementSirve.classList.remove("d-none");
            elementSirve.textContent = `Sirve a: ${personaje.sirveA.nombre} ${personaje.sirveA.familia}`;
            emoji.textContent = "🛡";
        } else if (personaje instanceof Asesor) {
            const elementAsesora = elementoPersonaje.querySelector(
                ".personaje-overlay .metadata .asesora"
            );
            elementAsesora.classList.remove("d-none");
            elementAsesora.textContent = `Asesora a: ${personaje.asesorado.nombre} ${personaje.asesorado.familia}`;
            emoji.textContent = "🎓";
        }
        setTimeout(() => {
            personajes.append(elementoPersonaje);
        }, 1000 * delay);
        delay++;
    }
};
pintaPersonajes();

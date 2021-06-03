import { arrayPersonajes } from "./Personaje.js";

const pintaPersonajes = () => {
    const personajes = document.querySelector(".personajes");
    for (const personaje of arrayPersonajes) {
        const { nombre, familia, edad, vivo } = personaje;
        const elementoPersonaje = document
            .querySelector(".personaje-dummy")
            .cloneNode(true);
        elementoPersonaje.classList.remove(".personaje-dummy");
        const imgPersonaje = elementoPersonaje.querySelector(".img-personaje");
        imgPersonaje.src = `img/${nombre}.jpg`;
        imgPersonaje.alt = `${nombre} ${familia}`;
        const nombrePersonaje = elementoPersonaje.querySelector(".nombres");
        nombrePersonaje.textContent = nombre;
        const edadPersonaje = elementoPersonaje.querySelector(".metadata .edad");
        edadPersonaje.textContent = edad;
        const estadoPersonaje =
            elementoPersonaje.querySelector(".metadata .estado");
        if (vivo) {
            elementoPersonaje
                .querySelector(".estado .vivo")
                .classList.remove("d-none");
            imgPersonaje.classList.add(".muerto");
        } else {
            elementoPersonaje
                .querySelector(".estado .muerto")
                .classList.remove("d-none");
        }
        switch (personaje) {
            case personaje instanceof Rey:
                const elementAnyosReinado = elementoPersonaje.querySelector(
                    ".personaje-overlay .metadata .anyos-reinado"
                );
                elementAnyosReinado.classList.remove("d-none");
                elementAnyosReinado.textContent = `Años de reinado: ${personaje.anyosReinado}`;
                break;
            case personaje instanceof Luchador:
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
                break;
            case personaje instanceof Escudero:
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
                break;
            case personaje instanceof Asesor:
                const elementAsesora = elementoPersonaje.querySelector(
                    ".personaje-overlay .metadata .asesora"
                );
                elementAsesora.classList.remove("d-none");
                elementAsesora.textContent = `Asesora a: ${personaje.asesorado.nombre} ${personaje.asesorado.familia}`;
                break;
            default:
                throw "El elemento iterado no se sabe de que clase está instanciado.";
                break;
        }
        personajes.append(elementoPersonaje).delay(1000);
    }
};
pintaPersonajes();

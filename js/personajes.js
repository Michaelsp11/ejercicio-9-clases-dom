import { Rey } from "./js/Rey.js";
import { Luchador } from "./js/Luchador.js";
import { Asesor } from "./js/Asesor.js";
import { Escudero } from "./js/Escudero.js";

const joffrey = new Rey("Joffrey", "Baratheon", 16, 2);
const jaime = new Luchador("Jaime", "Lannister", 45, "Espada", 7);
const daenerys = new Luchador("Daenerys", "Targaryen", 30, "Dragones", 10);
const tyrion = new Asesor("Tyrion", "Lannister", 40, daenerys);
const bronn = new Escudero("Bronn", "AguasNegras", 54, 0, jaime);

export const arrayPersonajes = [joffrey, jaime, tyrion, daenerys, bronn];

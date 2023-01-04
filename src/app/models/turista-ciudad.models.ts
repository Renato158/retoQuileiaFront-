import { Ciudad } from "./ciudad.models";
import { Turista } from "./turista.models";

export class TuristaCiudad{

    id!: number;
    fecha!: string;
    ciudad!: Ciudad;
    turista!: Turista;

}
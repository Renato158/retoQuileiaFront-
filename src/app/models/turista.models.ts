import { Ciudad } from "./ciudad.models";

export class Turista{

    id!: number;
    nombre!: string;
    fecha!: string;
    identificacion!: string;
    tipo_identificacion!: string;
    frec_viajes!: number;
    presupuesto!: number;
    ciudad!: Ciudad;
    tarjeta!: boolean;
}
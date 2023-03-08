export interface IProduct {
    _id: { $oid: string };
    nombre: string;
    descripcion: string;
    precio: number;
}
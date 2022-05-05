export class Products {
    id:number;
    nombre:string;
    descripcion:string;
    fecha:string;
    image:string;
    url:string;
    constructor( id:number, nombre:string, descripcion:string,fecha:string,image:string,url:string){
        this.id =id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.image = image;
        this.url = url;
        }
}

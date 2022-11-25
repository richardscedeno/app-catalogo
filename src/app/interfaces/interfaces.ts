export interface IMenu {
  icono: string,
  descripcion: string,
  urlpagina: string
}

interface IFotos{
  id:number,
  imagen:string,
}

interface IColorres{
  color:string,
  nombre:string
}

interface ITallas{
  talla:string
}

export interface ICatalogo{
  nombre:string,
  modelo:string,
  fotos:IFotos[],
  colores:IColorres[],
  precio:number,
  tallas:ITallas[]
}

export interface Iproject {
  name:string,
  title:string,
  src:string,
  statue:string,
  area:string,
  type:string

}

export interface IprojectDetails {
  name:string,
  title:string,
  src:string,
  overview:overview,
  iconssection:icons,
  gallery:string[],
  adress:string,
  transport:string,
  map?:map
}
export interface overview {
  src:string,
  p1?:string,
  p2?:string,
  statue:string,
  area:string,
  location:string,
  type:string,
  beach?:string,
  Delivery?:string,
}
export interface icons {
  header:string,
  span:string,
  icon:icon[]
}
export interface icon {
  svg:string,
  text:string
}
export interface map{
  lat:number,
  lng:number
}

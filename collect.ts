export const collection=[
    
    {codes:[0],label:'Sunny' ,img:require("./assets/sun.png")},
    {codes:[1,2,3,45,48],label:'Cloudy' ,img:require("./assets/cloudy.png")},
    {codes:[51,53,55,56,57,61,63,65,67,80,81,82],label:'Rainy' ,img:require("./assets/rain.png")},
    {codes:[71,73,75,77],label:'Snow' ,img:require("./assets/snow.png")},
    {codes:[96,99],label: 'Storm',img:require("./assets/storm.png")},
];
export const CollectData=(codes:number)=>{
    return collection.find(
        (data)=>data.codes?.includes(codes)
    
    )
};
export const dateCute= (date?:string)=>{
    
  return date? date.split("T")[1]:"N/A";
 
};
export const days=['Sun','Mon','Tue','Wed','Thu','Fri ','Sat' ];
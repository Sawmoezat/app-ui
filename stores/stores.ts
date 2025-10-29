import {create} from 'zustand';
import { WeatherShowType } from '../App';
type temCodeType={
    weathercode:number;temperature:number;
    
};
 type sunType={sunrise:string[],
  sunset:string[],
  temperature_2m_max:number[];
  time:string[];
  weathercode:number[];};

type dataStoreType={
current_weather:{weathercode:number;temperature:number;},
daily:{
  sunrise:string[];
  sunset:string[];
  temperature_2m_max:number[];
  time:string[];
  weathercode:number[];
}
latitude:number;
longitude:number;
sendStore:(int:temCodeType)=>void;
sunStore:(inp:sunType)=>void;
};
type codeimgstoretype={
  codes:number[];label:string;img:string|any;
  

};

export const useDataStore=create<dataStoreType>((set)=>({

current_weather:{weathercode:0,temperature:0},
daily:{
  sunrise:[],
  sunset:[],
  temperature_2m_max:[],
  time:[],
  weathercode:[],
},
latitude:0,
longitude:0,
sendStore:(int)=>set(
    ()=>({
        current_weather:{
            weathercode:int.weathercode,
            temperature:int.temperature,
        }

    })
),
sunStore:(inp)=>set(()=>({daily:{sunrise:inp.sunrise,
  sunset:inp.sunset,
  temperature_2m_max:inp.temperature_2m_max,
time:inp.time,
weathercode:inp.weathercode
}})),
}

))

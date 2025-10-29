import React, { useState } from 'react'
import { FlatList, View, } from 'react-native';
import WeatherItem from './weatherItem';
import { useDataStore } from '../../stores/stores';
import { CollectData, days } from '../../collect';
import Index from '../../App';

export type typeInfo={day:string;
  weather:string ;temp:string;
};
type typeMap={daily:string;weatherall:string;}

  const weatherInfo:typeInfo[]=[
    
    {day:"sun",weather:"sunny",temp:"25f",
},
{day:"mon",weather:"cloudy",temp:"20f",
},
{day:"tue",weather:"rainny",temp:"15f",
},
{day:"wed",weather:"rainny",temp:"14f",
},
{day:"thu",weather:"sunny",temp:"23f",
},
{day:"fri",weather:"sunny",temp:"25f",
},
{day:"sat",weather:"sunny",temp:"25f",
},

];

const WeatherList = () => {
   const dailyset=useDataStore((state)=>state.daily);
   
   
  return (

    <View className='flex-1'>
      {
        dailyset.weathercode.map(
    (code,index)=>{
     
  const date= new Date(dailyset.time[index]);

const dailyDate= days[date.getDay()];
      
      
      const temp= dailyset.temperature_2m_max[index]

      ;
      const img=CollectData(code)?.img;
      const label= CollectData(code)?.label;
console.log(label)
      return(<WeatherItem key={index} daily={dailyDate } weather={temp} label= {label} img={img}/>

      )


    }

    )
      }
    </View>
  )
    
}

export default WeatherList

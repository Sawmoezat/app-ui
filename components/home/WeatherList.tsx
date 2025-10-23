import React, { useState } from 'react'
import { FlatList, } from 'react-native';
import WeatherItem from './weatherItem';

export type typeInfo={day:string;
  weather:string ;temp:string;
};

  const weatherInfo:typeInfo[]=[
    
    {day:"mon",weather:"sunny",temp:"25f",
},
{day:"tue",weather:"cloudy",temp:"20f",
},
{day:"wed",weather:"rainny",temp:"15f",
},
{day:"thu",weather:"rainny",temp:"14f",
},
{day:"fri",weather:"sunny",temp:"23f",
},
{day:"sat",weather:"sunny",temp:"25f",
},
];
const [weatherData,setWeatherData]=useState(weatherInfo);
const WeatherList = () => {
  return (
    
    <FlatList data={weatherData} renderItem={({item})=> <WeatherItem wdata={item} /> } keyExtractor={(item)=>item.day}/>
  )
}

export default WeatherList

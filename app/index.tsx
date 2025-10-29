import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Platform, ImageBackground ,Pressable, TextInput, Image} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";


import Router from '../components/home/Router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import * as Location from "expo-location"
import {Link} from "expo-router";
import { Theme } from '../theme';
import { useEffect, useState } from 'react';
import { CollectData, dateCute } from '../collect';
import { useDataStore } from '../stores/stores';
type Location={
  latitude:number;
  longitude:number;
};
export type WeatherShowType={
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
};
export type codeimglocaltype={
  codes:number[];label:string;img:string|any;
  
}






export default function Index() {

  //----------------------------useState Group--------------------//
  const [localti,setLocalti]=useState<Location>({latitude:16.8409,longitude:96.1735});
  const [weatherShow,setWeatherShow]=useState<WeatherShowType>();
  const [city,setCity]=useState<string | null>();
  const [codeImgLabel,setCodeImgLabel]=useState<codeimglocaltype>();
const sendStore=useDataStore((state)=>state.sendStore);
const sunStore=useDataStore((state)=>state.sunStore)
;

  useEffect(()=>{
   const permit= async ()=>{
     const {status}=await Location.requestForegroundPermissionsAsync()//---------for permission--------------//
   if(status!== "granted"){
    
    
    return;
   };
   const currentLocal= await Location.getCurrentPositionAsync({})
setLocalti({latitude:currentLocal.coords.latitude,longitude:currentLocal.coords.longitude})
                            //-------get current local------//

};
    



    
    permit();
    
    
   
  },[]);
 
//----------------CIty. &. Temperature. Api --------//
useEffect(()=>{
  const getWdata= async ()=>{

      const weatherApi= `https://api.open-meteo.com/v1/forecast?latitude=${localti.latitude}&longitude=${localti.longitude}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
const fetchApi= await fetch( weatherApi);
const getData:WeatherShowType= await fetchApi.json();
setWeatherShow(getData);//--------------Tem-----------//
sendStore({weathercode:getData.current_weather.weathercode,
  temperature:getData.current_weather.temperature
  
});

sunStore({sunrise:getData.daily.sunrise,
  sunset:getData.daily.sunset,
  temperature_2m_max:getData.daily.temperature_2m_max,
  time:getData.daily.time,
  weathercode:getData.daily.weathercode,
});


};  
 const getCity= async ()=>{
  const geoReverse=  await Location.reverseGeocodeAsync({latitude:localti.latitude,longitude:localti.longitude});

  setCity(`${geoReverse[0].country},${geoReverse[0].region}`);//----------------city-------------//

    
 }


 getCity();
if(localti.latitude) getWdata();
},[localti]);//----------------- refresh for current local---------//
//-------------code img Label for weather------------------//
useEffect(
()=>{
  setCodeImgLabel(CollectData(weatherShow?.current_weather.weathercode ?? 0));
  
},[weatherShow]
);


 
  return (
    <SafeAreaView className='bg-white-100 min-h-screen 'style={{paddingTop:Platform.OS==="android"? 20:0}}>
      
      
      <ImageBackground source={require("../assets/bg.jpg")} className='w-full h-full' blurRadius={5}>
        <View className='flex-row justify-between items-center m-4 bg-blue-200 rounded-md px-4'>
       <Pressable hitSlop={30} >
       <Link href="/Qrcode" asChild>
        <MaterialIcons name="qr-code-2" size={34} color="black" />

        
       </Link>
    </Pressable>
    <View className='items-center py-2 '> 
          
            <FontAwesome5 name="map-marker-alt" size={24} color={Theme.orange} />
          <Text className=' font-bold text-xl'>{city || 'loading'}</Text>
        </View>
        <Pressable hitSlop={30}>
       <Link href="/forecast" asChild>
        <FontAwesome5 name="ellipsis-v" size={24} color="black" className="bg-white p-4 rounded-2xl "/>
       </Link>
    </Pressable>


      </View>


      <View className='relative mx-4 '> 
        <TextInput placeholder='search bar' className='w-80% h-20 rounded-md ps-14 bg-blue-200 flex justify-center placeholder:text-xl'></TextInput>
        <MaterialCommunityIcons name="cloud-search-outline" size={34} color={Theme.secondaryDark} className='absolute top-5 mx-3 size:font-xl' />
      </View>

<View className='mx-auto   '>
  <Image source={codeImgLabel?.img!} className='h-60 w-60'/>
</View>
<View className='relative'>
  {
    weatherShow&&<Text className="text-[8rem] font-bold mx-auto">
    {weatherShow.current_weather.temperature.toFixed()}
  </Text>
  }
  <Text className='text-7xl absolute right-36 top-4'>°</Text>
  <Text className='text-blue-200 text-2xl mx-auto'> {codeImgLabel?.label}</Text>
  
</View>
{/* --------------------Footer----------------------*/}

<View className='flex-row justify-around mt-6'>
  
  
  <View className='bg-white shadow items-center bg-blue-200 rounded-xl  p-6'>
    <Feather name="sunrise" size={24} color="black" />
    
    <Text className='font-bold mt-2'>{dateCute(weatherShow?.daily.sunrise[0])}</Text>
    
  </View>

  <View className='bg-white shadow items-center bg-blue-200 rounded-xl  p-6'>
    <Entypo name="drop" size={24} color={Theme.skyBlue} />
    <Text className='font-bold mt-2'>rain</Text>
  </View>

  <View className='bg-white shadow items-center bg-blue-200 rounded-xl  p-6'>
    <Feather name="sunset" size={24} color="black" />
    <Text className='font-bold mt-2 '>{dateCute(weatherShow?.daily.sunset[0])}</Text>
  </View>


</View>


      </ImageBackground>

    </SafeAreaView>

    
  );
}



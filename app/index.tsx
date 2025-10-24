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
type Location={
  latitude:number;
  longitude:number;
};
type WeatherShowType={
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
}



export default function Index() {
  const [localti,setLocalti]=useState<Location>({latitude:16.8409,longitude:96.1735});
  const [weatherShow,setWeatherShow]=useState<WeatherShowType>();
  const [city,setCity]=useState<string | null>("ygn");
  useEffect(()=>{
   const permit= async ()=>{
     const {status}=await Location.requestForegroundPermissionsAsync()
   if(status!== "granted"){
    console.log("hi not allow");
    return;
   };
   const currentLocal= await Location.getCurrentPositionAsync({})
setLocalti({latitude:currentLocal.coords.latitude,longitude:currentLocal.coords.longitude})};
    
const getWdata= async ()=>{

      const weatherApi= `https://api.open-meteo.com/v1/forecast?latitude=${localti.latitude}&longitude=${localti.longitude}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
const fetchApi= await fetch( weatherApi);
const getData= await fetchApi.json();
setWeatherShow(getData)};
 const getCity= async ()=>{
  const geoReverse=  await Location.reverseGeocodeAsync({latitude:localti.latitude,longitude:localti.longitude});
setCity(geoReverse[0].country);
console.log(geoReverse);
    
 }
    
    permit();
    getWdata();
    getCity();
    console.log("showLog:", weatherShow )
  },[]);
 



 
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
          <Text className=' font-bold text-xl'>{city}:Yangon city</Text>
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
  <Image source={require("../assets/storm.png")} className='h-60 w-60'/>
</View>
<View className='relative'>
  {
    weatherShow&&<Text className="text-[8rem] font-bold mx-auto">
    {weatherShow.current_weather.temperature}
  </Text>
  }
  <Text className='text-7xl absolute right-36 top-4'>°</Text>
  <Text className='text-blue-200 text-2xl mx-auto'> {localti.longitude}THUNDERCLOUD</Text>
  
</View>
<View className='flex-row justify-around mt-6'>
  
  
  <View className='bg-white shadow items-center bg-blue-200 rounded-xl  p-6'>
    <Feather name="sunrise" size={24} color="black" />
    
    <Text className='font-bold mt-2'>sunrise</Text>
    
  </View>

  <View className='bg-white shadow items-center bg-blue-200 rounded-xl  p-6'>
    <Entypo name="drop" size={24} color={Theme.skyBlue} />
    <Text className='font-bold mt-2'>rain</Text>
  </View>

  <View className='bg-white shadow items-center bg-blue-200 rounded-xl  p-6'>
    <Feather name="sunset" size={24} color="black" />
    <Text className='font-bold mt-2 '>sunset</Text>
  </View>


</View>


      </ImageBackground>

    </SafeAreaView>
  );
}



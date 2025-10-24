import React from 'react'
import { ImageBackground, Platform, Text,View ,Pressable,Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Link} from "expo-router";


import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import { Theme } from '../theme';
import WeatherList from '../components/home/WeatherList';

const forecast = () => {
  return (
    <SafeAreaView className="bg-white min-h-screen" edges={['top']} style={{paddingTop:Platform.OS==="android"? 24:0}}>
        <ImageBackground source={require("../assets/bg.jpg")} className='h-full w-full ' blurRadius={5}>
 <View className='flex-row justify-between items-center m-4 bg-blue-200 rounded-md px-4'>
       <Pressable hitSlop={20} >
       <Link href="/" asChild>
        
<MaterialIcons name="keyboard-backspace" size={24} color="black"  className='font-bold py-2 rounded-xl shadow bg-white'/>
        
       </Link>
    </Pressable>
    <View className='items-center py-2 '>
          
            <Fontisto name="day-cloudy" size={34} color={Theme.secondaryDark} />
          <Text className=' font-bold text-xl'>7 Day</Text>
        </View>
        <Pressable hitSlop={30}>
       <Link href="/Qrcode" asChild>
        <MaterialIcons name="qr-code-2" size={34} color="black" />
       </Link>
    </Pressable>
      </View>

<View className='flex-row justify-evenly '>
    <Image source={require('../assets/storm.png')} className='h-40 w-40 mt-4 '/>
    <View className='relative'>
  <Text className="text-[6rem]  text-blue-300 ">
    25
  </Text>
  <Text className='text-7xl absolute -right-1 text-blue-300 '>°</Text>
  
  
</View>
</View>

<View className='flex-row justify-around mt-4 mb-2'>
  
  
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
<View className='bg-white shawdow rounded-2xl flex-1'>
    <WeatherList/>
    </View>
     
        </ImageBackground>
    </SafeAreaView>
  )
}

export default forecast

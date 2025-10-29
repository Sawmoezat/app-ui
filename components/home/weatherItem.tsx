import React from 'react'
import { Text, View,Image } from 'react-native'
import { typeInfo } from './WeatherList'
 import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Theme } from '../../theme';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';


type itemData={
    wdata:typeInfo;
 }
 type mapType={daily:string;weather:number;img:string|any;label:string|undefined;};
const WeatherItem = ({daily,weather,label,img}:mapType) => {
 
 
    return (
    <View className='flex-row justify-between border-b border-b-blue-100/90 my-4 mx-6 items-center '>
        <Text className='text-xl text-blue-400 font-bold'>
{daily}
        </Text>
        <View className='items-center flex-row '>
<Image source={img} className='h-8 w-8'/>
        <Text className='text-xl text-black'>{label} </Text>
        </View>
        <Text className='text-xl text-blue-400 font-bold'>{weather}</Text>
    </View>
  )
}

export default WeatherItem

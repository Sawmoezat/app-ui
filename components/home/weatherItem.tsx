import React from 'react'
import { Text, View } from 'react-native'
import { typeInfo } from './WeatherList'
 import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Theme } from '../../theme';

type itemData={
    wdata:typeInfo;
 }
const WeatherItem = ({wdata}:itemData) => {
 
 const {day,weather,temp}=wdata;
    return (
    <View className='flex-row justify-between border-b border-b-blue-100/90 my-4 mx-6 items-center '>
        <Text className='text-xl text-blue-400 font-bold'>
{day}
        </Text>
        <View className='items-center flex-row '>
<MaterialCommunityIcons name="cloud-question-outline" size={34} color="black" className=''/>
        <Text className='text-xl text-blue-400'>{weather}</Text>
        </View>
        <Text className='text-xl text-blue-400 font-bold'>{temp}</Text>
    </View>
  )
}

export default WeatherItem

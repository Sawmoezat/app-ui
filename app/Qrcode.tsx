import React from 'react'
import { View,Image, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Qrcode = () => {
  return (
    
    <SafeAreaView className='min-h-screen bg-white '>
<View className='justify-center items-center w-full h-full'>
    <Text className='font-bold  text-2xl bg-white shadow p-6 rounded-2xl'>Hi I am Qr</Text>
   <Image source={require('../assets/storm.png')} className='h-60 w-60 m-auto '/>
</View>
    </SafeAreaView>
      
  )
}

export default Qrcode

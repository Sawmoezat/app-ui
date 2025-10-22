import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Platform, ImageBackground ,Pressable, TextInput, Image} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import "../global.css"
import Router from '../component/home/Router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';

import {Link} from "expo-router";
import { Theme } from '../theme';
export default function Index() {
  return (
    <SafeAreaView className='bg-white-100 min-h-screen 'style={{paddingTop:Platform.OS==="android"? 24:0}}>
      
      
      <ImageBackground source={require("../assets/bg.jpg")} className='w-full h-full' blurRadius={5}>
        <View className='flex-row justify-between items-center m-4 bg-blue-200 rounded-md px-4'>
       <Pressable hitSlop={20} >
       <Link href="/" asChild>
        <MaterialIcons name="qr-code-2" size={34} color="black" />

        
       </Link>
    </Pressable>
    <View className='items-center py-2 '>
          
            <FontAwesome5 name="map-marker-alt" size={24} color={Theme.orange} />
          <Text className=' font-bold text-xl'>Yangon city</Text>
        </View>
        <Pressable hitSlop={20}>
       <Link href="/" asChild>
        <FontAwesome5 name="ellipsis-v" size={24} color="black" />
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
  <Text className="text-[8rem] font-bold mx-auto">
    25
  </Text>
  <Text className='text-7xl absolute right-36 top-4'>°</Text>
  <Text className='text-blue-200 text-2xl mx-auto'> THUNDERCLOUD</Text>
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



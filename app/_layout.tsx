import { Stack } from "expo-router";
import "../global.css";
import React from 'react'

const Layout = () => {
  return (
    <Stack>
        <Stack.Screen name="index" options={{headerShown:false} }/>
        <Stack.Screen name="forecast" options={{headerShown:false} }/>
        <Stack.Screen name="Qrcode" options={{title:"Back to Home Page"} }/>
        
    </Stack>
  )
}

export default Layout



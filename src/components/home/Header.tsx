import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants';
const Header = () => {
  return (
    <View style={{width:"100%", backgroundColor:Colors.LightBg, paddingHorizontal:20, paddingVertical:10, flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
        <View style={{flexDirection:"row", backgroundColor:Colors.Bg, paddingHorizontal:8, paddingVertical:4, borderRadius:8, alignItems:"center", gap:4, width:Dimensions.get("screen").width*0.5}}>
            <Image style={{width:35, height:35}} source={require("../../../assets/icons/icon.png")}/>
            <Text style={{fontSize:16, fontWeight:"600", color:Colors.Primary}}>SMART SHOP</Text>
        </View>
      <Ionicons  name='cart-outline' color={Colors.Bg} size={32}/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})
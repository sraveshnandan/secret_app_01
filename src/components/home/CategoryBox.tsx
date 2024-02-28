import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Category } from "@/constants/Data";

const CategoryBox = () => {
  return (
    <View
      style={{
        width: "100%",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 10,
      
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "600", marginBottom:10 }}>Categories</Text>

      <ScrollView horizontal  showsVerticalScrollIndicator={false}>
        {Category.map((item, index) => (
          <View key={item.id} style={{borderWidth:1,  borderRadius:8, marginHorizontal:12, marginVertical:10, padding:5 , alignItems:"center", justifyContent:"center"}}>
            <Image source={{ uri: item.image }} width={60} height={60} />
            <Text>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
      
    </View>
  );
};

export default CategoryBox;

const styles = StyleSheet.create({});

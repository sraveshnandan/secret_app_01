import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@/components";
import Slider from "@/components/home/Slider";
import CategoryBox from "@/components/home/CategoryBox";
import ProductList from "@/components/home/ProductList";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header  */}
      <Header />
      {/* Slider  */}
      <ScrollView>
        <Slider />
        {/* Category box  */}
        <CategoryBox />

        {/* Product Details card Box  */}
        <ProductList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});

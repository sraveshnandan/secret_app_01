import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { Colors } from "@/constants";
const Images: string[] = [
  "https://img.freepik.com/free-photo/online-fashion-shopping-with-computer_23-2150400628.jpg",
  "https://img.freepik.com/free-photo/cropped-image-woman-inputting-card-information-key-phone-laptop-while-shopping-online_1423-68.jpg",
  "https://img.freepik.com/free-photo/online-fashion-shopping-with-computer_23-2150400628.jpg",
  "https://img.freepik.com/free-photo/cropped-image-woman-inputting-card-information-key-phone-laptop-while-shopping-online_1423-68.jpg",
];

const Slider = () => {
  return (
    <View style={{  width:Dimensions.get("screen").width*0.6 }}>
      <SliderBox
        images={Images}
        sliderBoxHeight={200}
        onCurrentImagePressed={(index:any) =>
          console.warn(`image ${index} pressed`)
        }
        dotColor={Colors.Bg}
        inactiveDotColor="#90A4AE"
       
        autoplay
        resizeMethod={"resize"}
        resizeMode={"cover"}
       
        
        ImageComponentStyle={{ borderRadius: 15, width: "94%", marginTop: 5 }}
        imageLoadingColor="#2196F3"
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({});

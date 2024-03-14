import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Shop } from "@/constants/Data";
import { Colors } from "@/constants";
import { SliderBox } from "react-native-image-slider-box";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const ProductList = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {Shop.map((item, index) => (
        <View
          style={{
            width: Dimensions.get("screen").width,
            padding: 10,
            backgroundColor: Colors.LightBg,
          }}
          key={index}
        >
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#fff",
              borderRadius: 8,
              justifyContent: "space-between",
              padding: 5,
              alignItems: "center",
              borderBottomWidth:2,
              borderBottomColor:Colors.LightBg
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Image
                width={40}
                style={{ borderRadius: 55, resizeMode: "cover" }}
                height={40}
                source={{ uri: item.ownerImage }}
              />
              <Text style={{ fontSize: 16, fontWeight: "600" }}>
                {item.shopName}
              </Text>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: Colors.Primary,
                borderRadius: 10,
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}
            >
              <Text style={{ color: "#fff" }}>Follow</Text>
            </TouchableOpacity>
          </View>
          {/* Product Image slider  */}
          <View style={{ backgroundColor: "#fff", paddingVertical: 10 }}>
            <SliderBox
              images={item.product.images}
              sliderBoxHeight={250}
              onCurrentImagePressed={(index: any) =>
                console.warn(`image ${index} pressed`)
              }
              dotColor={Colors.Bg}
              inactiveDotColor="#90A4AE"
              resizeMethod={"resize"}
              resizeMode={"contain"}
              ImageComponentStyle={{}}
              imageLoadingColor="#2196F3"
            />
          </View>

          {/* Product details box  */}

          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              ₹{item.product.discount_price}
            </Text>
            <View style={{flexDirection:"row", alignItems:"center", gap:15}}>
                <AntDesign name="heart" size={22}/>
                <FontAwesome name="comments-o" size={24} color="black" />
                <FontAwesome name="send" size={24} color="black" />
                <FontAwesome name="shopping-cart" size={24} color="black" />
            </View>
          </View>

          {/* Title & description  */}
          <View style={{paddingHorizontal:10}}>
            <Text style={{fontWeight:"600", fontSize:16}}>
                {item.product.title}
            </Text>
            <Text style={{color:"#666", marginTop:10}}>{item.product.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default ProductList;

const styles = StyleSheet.create({});

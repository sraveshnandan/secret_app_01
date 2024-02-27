import { Colors } from "@/constants"; // isko thik kar lena ye sab typescript ka import hai.
import { Link, useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* upper section  */}

      <View style={styles.section}>
        <Text style={styles.heading}>Sign In </Text>
        <View style={{ alignItems: "center", paddingVertical: 10 }}>
          <Image
            style={styles.icon}
            source={require("../../../assets/icons/login.png")} // aur is image path ko bhi 
          />
        </View>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Welcome</Text>
        <KeyboardAvoidingView style={{ marginVertical: 20 }}>
          {/* Email Input  */}
          <TextInput style={styles.input} placeholder="Email address" />
          {/* Password Input  */}
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Password"
          />
          {/* Forgot password Field  */}
          <TouchableOpacity
            onPress={() => navigation.navigate("main" as never)} // ye as never mat linkhna tum ye sirf typescript ke liye hai.
          >
            <Text style={styles.link}>Forgot Password</Text>
          </TouchableOpacity>
          {/* Sign In button  */}

          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>Sign In</Text>
          </TouchableOpacity>
          {/* seperator  */}
          <View style={styles.seperator}>
            <View style={styles.hr}></View>
            <View>
              <Text style={{ fontSize: 16 }}>OR</Text>
            </View>
            <View style={styles.hr}></View>
          </View>

          <View style={styles.linkbtnBox}>
            <Text style={styles.text}>Don't have an account? </Text>
            <TouchableOpacity>
              <Text style={{...styles.text ,color:Colors.Link}}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 34,
    fontWeight: "600",
    marginTop: 10,
    color: Colors.Primary,
  },
  icon: {
    width: 150,
    height: 150,
    borderRadius: 99,
    shadowColor:Colors.Primary,
    resizeMode: "contain",
    backgroundColor: "#fff",
    marginHorizontal: "auto",
  },
  section: {
    padding: 20,
    backgroundColor: Colors.LightBg,
  },
  formContainer: {
    backgroundColor: Colors.White,
    marginTop: -12,
    paddingHorizontal: 15,

    borderRadius: 12,
    flex: 1,
  },
  input: {
    width: "100%",
    padding: 18,
    fontSize: 18,
    fontWeight: "700",
    color: Colors.DarkBg,
    backgroundColor: Colors.LightBg,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: "center",
    backgroundColor: Colors.Primary,
    borderRadius: 8,
  },
  btnText: {
    fontSize: 24,
    fontWeight: "800",
    color: Colors.White,
  },
  link: {
    color: Colors.Link,
    fontSize: 18,
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  seperator: {
    alignItems: "center",
    marginVertical: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  hr: {
    width: "40%",
    alignItems: "center",
    backgroundColor: Colors.LightBg,
    height: 2,
  },
  text:{
    fontSize:20
  },
  linkbtnBox: {
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center"
  },
});

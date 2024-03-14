import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  HomeScreen,
  LoginScreen,
  ProfileScreen,
  RegisterScreen,
  SearchScreen,
} from "@/screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from "@/constants";

export default function () {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const BottomTab = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors.Primary,
          headerShown: false,

        }}
      >
        <Tab.Screen
          name="home"
          component={HomeScreen}
          options={{
            tabBarLabelStyle: {
              display: "none",
            },
            tabBarIcon: ({ focused, color }) => (
              <Ionicons
                name={focused ? "home-sharp" : "home-outline"}
                color={color}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarLabelStyle: {
              display: "none",
            },
            tabBarIcon: ({ focused, color }) => (
              <Ionicons
                name={focused ? "search" : "search-outline"}
                color={color}
                size={25}
              />
            ),
          }}
        />

<Tab.Screen
          name="Notification"
          component={ProfileScreen}
          options={{
            tabBarLabelStyle: {
              display: "none",
            },
            tabBarIcon: ({ focused, color }) => (
              <MaterialCommunityIcons
                name={focused ? "bell-badge" : "bell-badge-outline"}
                color={color}
                size={25}
              />
            ),
          }}
        />


        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabelStyle: {
              display: "none",
            },
            tabBarIcon: ({ focused, color }) => (
              <Ionicons
                name={focused ? "person-sharp" : "person-outline"}
                color={color}
                size={25}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="register" component={RegisterScreen}/>
        <Stack.Screen name="main" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export type HomeStackParamList = {
  HomeMain: undefined;
  Newtrip: undefined;
  PlanTrip: undefined;
  AIChat: undefined;
  MapScreen: undefined;
};

export type TabNavigatorParamList = {
  Home: undefined;
  Guides: undefined;
  Profile: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList & TabNavigatorParamList
>;
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <View className="flex-row justify-between items-center px-4  pb-2 pt-2 ">
          <Image
            source={require("../../assets/Images/image.png")}
            className="w-36 h-10"
            resizeMode="contain"
          />
          <View className="flex-row items-center space-x-3">
            <TouchableOpacity className="p-2 bg-gray-100 rounded-full ">
              <Text className="text-lg ">🔎</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-yellow-400 px-3 py-1 rounded-full ">
              <Text className="text-sm font-semibold text-white">Pro</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="border-b border-gray-200 mx-4" />

        <View className="relative" >
          
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            }}
            className="w-full h-80"
            resizeMode="cover"
          />
          <View className="absolute inset-0 items-center justify-center">
            <Text className="text-white text-4xl font-bold text-center px-6">Plan Your Next Adventure</Text>
            <TouchableOpacity className='bg-orange-500 px-6 py-2 rounded-full'>
              <Text className="text-white font-semibold text-base">Create new plan </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

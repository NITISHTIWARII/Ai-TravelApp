import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { GuideStackParamList } from "../navigation/GuideStack";
import { SafeAreaView } from "react-native-safe-area-context";
type GuideDetailScreenRouteProp = RouteProp<
  GuideStackParamList,
  "GuideDetails"
>;

type Props = {
  route: GuideDetailScreenRouteProp;
  navigation: any;
};
const itineraries: { [key: string]: string[] } = {
  "Mysore Palace": [
    "Day 1: Explore Durbar Hall and Royal Artifacts.",
    "Day 2: Attend the Dussehra Festival (October) or evening light show.",
    "Day 3: Visit nearby Chamundi Hills and Jaganmohan Palace.",
  ],
  "Coorg (Kodagu)": [
    "Day 1: Visit Abbey Falls and hike through coffee plantations.",
    "Day 2: Relax at Raja’s Seat and explore Talacauvery.",
    "Day 3: Trek to Tadiandamol Peak or go river rafting.",
  ],
  Hampi: [
    "Day 1: Tour Virupaksha Temple and Hampi Bazaar.",
    "Day 2: Explore Vijaya Vittala Temple and boulder landscapes.",
    "Day 3: Try rock climbing or visit nearby Anjaneya Hill.",
  ],
  Gokarna: [
    "Day 1: Visit Mahabaleshwar Temple and Om Beach.",
    "Day 2: Relax at Kudle Beach or try surfing.",
    "Day 3: Explore Half Moon Beach and Paradise Beach.",
  ],
};

// Sample additional attributes (hardcoded, can be fetched from backend)
const additionalAttributes: {
  [key: string]: { entryFee: string; travelTips: string[] };
} = {
  "Mysore Palace": {
    entryFee: "₹70 for adults, ₹30 for children",
    travelTips: [
      "Book tickets online to avoid queues.",
      "Visit during Dussehra for the grand festival.",
      "Photography inside requires a separate fee.",
    ],
  },
  "Coorg (Kodagu)": {
    entryFee: "Free for most attractions, some estates may charge ₹100-₹200",
    travelTips: [
      "Carry rain gear during monsoon (June-September).",
      "Book homestays in advance for peak season.",
      "Try local Kodava cuisine like Pandi Curry.",
    ],
  },
  Hampi: {
    entryFee: "₹40 for main monuments, free for open ruins",
    travelTips: [
      "Hire a local guide for historical insights.",
      "Wear comfortable shoes for exploring ruins.",
      "Visit in winter for cooler weather.",
    ],
  },
  Gokarna: {
    entryFee: "Free for beaches, temple entry free",
    travelTips: [
      "Respect temple dress codes (cover shoulders and knees).",
      "Book beach shacks early during peak season.",
      "Carry sunscreen for beach activities.",
    ],
  },
};

const GuideDetail = ({ route, navigation }: Props) => {
  const navigations = useNavigation();
  const { place } = route?.params;
  const itinerary = itineraries[place.name] || [];
  const extraAttributes = additionalAttributes[place.name] || {
    entry: "N/A",
    travelTips: [],
  };
  return (
    <SafeAreaView className=" bg-white flex-1">
      <ScrollView>
        <ImageBackground className="w-full h-80" source={{ uri: place.image }}>
          <View className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <TouchableOpacity
            className="absolute top-4 left-4 bg-white p-2 rounded-full"
            onPress={() => navigations.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="#FF5722" />
          </TouchableOpacity>
          <View className="p-4 flex-1 justify-end">
            <Text className="text-white text-2xl font-bold">{place.name}</Text>
          </View>
        </ImageBackground>

        <View className="p-4">
          <View className="mb-6">
            <Text className="text-lg font-semibold text-gray-800 mb-2">
              About
            </Text>
            <Text className="text-base font-medium text-gray-600">
              {" "}
              {place.description}
            </Text>
          </View>

          <View className="border-t border-gray-200 pt-4 mb-6 ">
            <Text className="text-lg font-semibold text-gray-80 mb-3">
              Details
            </Text>
            <View className="flex-row items-center mb-3 ">
              <Ionicons name="location-outline" size={24} color={"#FF5722"} />
              <Text className="text-gray-800 text-base font-medium ml-3">
                Location : {place.attributes.location}
              </Text>
            </View>

            <View className="flex-row items-center mb-3">
              <Ionicons name="map-outline" size={24} color="#FF5722" />
              <Text className="text-gray-800 text-base font-medium ml-3">
                Type : {place.attributes.type}
              </Text>
            </View>

            <View className="flex-row items-center mb-3">
              <Ionicons name="star-outline" size={24} color="#FF5722" />
              <Text className="text-gray-800 text-base font-medium ml-3">
                Attractions : {place.attributes.attractions.join(",")}
              </Text>
            </View>

            <View className="flex-row items-center mb-3">
              <Ionicons name="cash-outline" size={24} color="#FF5722" />
              <Text className="text-gray-800 text-base font-medium ml-3">
                Entry fee : {extraAttributes.entryFee}
              </Text>
            </View>
          </View>

          {itinerary.length > 0 && (
            <View className="border-t border-gray-200 pt-4 mb-6 ">
              <Text className="'text-lg font-semibold text-gra-800 mb-2">
                Sugggested Itinearary
              </Text>
              {itinerary.map((item, index) => (
                <View key={index} className="flex-row items-start mb-2">
                  <Text className="text-800 items-start mb-2">•</Text>
                  <Text className="text-800 items-start mb-2">{item}</Text>
                </View>
              ))}
            </View>
          )}

          {extraAttributes.travelTips.map((index, item) => (
            <View key={index} className="flex-row items-start mb-2">
              <Text className="text-gray-800 text-base font-medium flex-1">
                •
              </Text>
              <Text className="text-gray-800 text-base font-medium flex-1">
                {item}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GuideDetail;

const styles = StyleSheet.create({});

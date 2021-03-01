import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import DefaultText from "./DefaultText";

const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <Text style={styles.title} numberOfLines={1}>
                {props.title}
              </Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <DefaultText>{props.duration}m</DefaultText>
            <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: "row",
  },
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  mealHeader: {
    height: "85%",
  },
  mealRow: { flexDirection: "row" },
  mealDetail: {
    paddingHorizontal: 10,
    height: "15%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bgImage: { width: "100%", height: "100%", justifyContent: "flex-end" },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: "center",
  },
});

export default MealItem;

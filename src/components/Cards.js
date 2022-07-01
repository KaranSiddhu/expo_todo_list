import React, { useState } from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";
import Checkbox from "expo-checkbox";
import {SIZES, FONTS, COLORS, SHADOW} from "../constants";

const Cards = ({data, index,setIsSelected, deleteItem}) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <Pressable style={styles.view} onLongPress={() => deleteItem(index)}>
      <Checkbox
        style={styles.checkbox}
        value={data.isSelected}
        onValueChange={(value) => setIsSelected(index, value)}
        color={isChecked ? "#4630EB" : undefined}
      />
      <Text style={{...styles.text, textDecorationLine: data.isSelected ? "line-through" : "none"}}>{data.text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  view: {
    ...SHADOW,
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: SIZES.padding,
    borderRadius: SIZES.borderRadius,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.secondary
  },
  text: {
    ...FONTS.h2_semiBold,
    color: COLORS.primary
  },
  checkbox: {
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    marginRight: 15
  }
});

export default Cards;

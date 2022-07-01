import React, {useState} from "react";
import {
  Alert,
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import {Cards} from "../components";
import {SIZES, FONTS, COLORS, SHADOW} from "../constants";

const HomePage = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const addText = text => {
    if (value !== "") {
      // setList(...list, text);
      setList(prev => {
        return [
          ...prev,
          {
            text: text,
            isSelected: false
          }
        ];
      });
      setValue("");
    } else {
      alert("something went wrong");
    }
  };
  console.log("Arr -> ", list);

  const setIsSelected = (index, value) => {
    let data = [];
    for (let i = 0; i < list.length; i++) {
      if (index === i) {
        data.push({...list[i], isSelected: value});
      } else {
        data.push(list[i]);
      }
    }

    setList(data);
  };

  const deleteItem = index => {
    Alert.alert("Delete Item", "Are you sure you want to delete this item?", [
      {
        text: "Cancle",
        style: "cancle"
      },
      {
        text: "Yes",
        onPress: () => {
          const data = list.filter((item, idx) => idx !== index);
          setList(data);
        }
      }
    ]);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          ...FONTS.h1_semiBold,
          color: COLORS.secondary,
          marginBottom: 15
        }}>
        What needs to be done!
      </Text>

      <FlatList
        style={{flex: 1}}
        data={list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <Cards
              data={item}
              index={index}
              setIsSelected={setIsSelected}
              deleteItem={deleteItem}
            />
          );
        }}
      />

      <View style={styles.textBoxWrapper}>
        <TextInput
          style={styles.textInut}
          placeholder="New Task"
          placeholderTextColor={COLORS.primary}
          onChangeText={text => setValue(text)}
          value={value}
        />
        <TouchableOpacity style={styles.btn} onPress={() => addText(value)}>
          <Text style={{fontSize: 30, color: COLORS.secondary}}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: SIZES.padding,
    paddingTop: Platform.OS === "ios" ? 40 : StatusBar.currentHeight + 10
  },
  textBoxWrapper: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: SIZES.padding
  },
  textInut: {
    ...SHADOW,
    ...FONTS.h2_semiBold,
    borderRadius: SIZES.textBoxRadius,
    backgroundColor: COLORS.secondary,
    height: 54,
    width: "85%",
    color: COLORS.primary,
    marginRight: 15,
    padding: 10
  },
  btn: {
    backgroundColor: COLORS.accent,
    height: 54,
    width: 54,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default HomePage;

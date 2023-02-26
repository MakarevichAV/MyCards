import axios from "axios";
import { TouchableOpacity } from "react-native";
import {
  Animated,
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
} from "react-native";
import { EditElement } from "../../../comon/EditElement/EditElement";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SaveElement } from "../../../comon/SaveElement/SaveElement";
import { DeleteElement } from "../../../comon/DeleteElement/DeleteElement";
import React, { useState, useRef } from "react";
import { Formik } from "formik";
import styled from "styled-components";
import { TurnElement } from "../../../comon/TurnElement/TurnElement";
import { CardCreater } from "./CardCreater";
// import {  } from "./CardStyles.jsx";
// import { urlSet } from "../../../../api/src";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 400,
    backgroundColor: "red",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

const CardBox = styled.View`
  width: 100%;
  height: 400px;
  margin-bottom: 20px;
  padding: 25px 15px 10px 15px;
  border-radius: 8px;
  border: 1px;
  border-color: #e8e8e8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Picture = styled.View`
  width: 100%;
  max-height: 40%;
  flex-grow: 1;
  margin-bottom: 25px;
`;
const Termin = styled.Text`
  text-align: center;
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 10px;
  color: "rgb(58, 79, 88)";
`;
const Transcription = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: rgb(88, 98, 103);
`;
const Exemple = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: 900;
  margin-bottom: 10px;
  color: "rgb(58, 79, 88)";
`;
const ControlBox = styled.View`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const Card = (state) => {
  const [rotation] = useState(new Animated.Value(0));
  const [isFlipped, setIsFlipped] = useState(false);
  const flipCard = () => {
    Animated.timing(rotation, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setIsFlipped(!isFlipped);
      Animated.timing(rotation, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });
  };

  const num = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"],
  });

  const [editingState, setEditingState] = React.useState(false);
  const saveCard = (newValues) => {
    axios
      .put(urlCard, { _id: state.cardId, ...newValues })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        alert("Error of card updating");
      })
      .finally(() => {
        setEditingState(false);
      });
  };

  const cardCollor = !isFlipped ? "#ffffff" : "#c18a8a";
  return (
    <Animated.View
      style={{
        transform: [{ rotateY: num }],
      }}
    >
      <CardBox style={{ backgroundColor: !isFlipped ? "#ffffff" : "#f3f4dd" }}>
        <Picture>
          <ImageBackground
            source={
              state.imgUri
                ? { uri: state.imgUri }
                : require("../../../../assets/images/empty.png")
            }
            resizeMode="contain"
            style={styles.image}
          />
        </Picture>
        {!isFlipped && (
          <>
            <Termin>{state.name}</Termin>
            {state.transcription && (
              <Transcription>&#91;{state.transcription}&#93; </Transcription>
            )}
            <Exemple>{state.example}</Exemple>
          </>
        )}
        {isFlipped && (
          <>
            <Termin>{state.translate}</Termin>
            {state.string1 && (<Termin>{state.string1}</Termin>)}
            <Exemple>{state.string2}</Exemple>
          </>
        )}
        <ControlBox>
          <TouchableOpacity onPress={() => state.editCard(state)}>
            <EditElement size={35} />
          </TouchableOpacity>
          <TouchableOpacity onPress={flipCard}>
            <TurnElement size={48} />
          </TouchableOpacity>
          <TouchableOpacity>
            <DeleteElement size={35} />
          </TouchableOpacity>
        </ControlBox>
      </CardBox>
    </Animated.View>
  );
};

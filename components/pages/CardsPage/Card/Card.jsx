import axios from "axios";
import { TouchableOpacity } from "react-native";
import { Text, StyleSheet, View, Image, ImageBackground } from "react-native";
import { EditElement } from "../../../comon/EditElement/EditElement";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SaveElement } from "../../../comon/SaveElement/SaveElement";
import { DeleteElement } from "../../../comon/DeleteElement/DeleteElement";
import React, { useState } from "react";
import { Formik } from "formik";
import styled from "styled-components";
import { TurnElement } from "../../../comon/TurnElement/TurnElement";
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
  background-color: #ffffff;
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
  /* border: 1px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const Card = ({ cardId, imgUri, name, transcription, example }) => {
  const [editingState, setEditingState] = React.useState(false);
  const editCard = () => {
    setEditingState(true);
  }
  const saveCard = (newValues) => {
    axios
      .put(
        urlCard,
        {_id: cardId, ...newValues}
      )
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
  return (
    <CardBox>
      <Picture>
        <ImageBackground
          source={
            imgUri
              ? { uri: imgUri }
              : require("../../../../assets/images/empty.png")
          }
          resizeMode="contain"
          style={styles.image}
        />
      </Picture>
      <>
        <Termin>{name} max 40 simb</Termin> 
        <Transcription>&#91;{transcription} max 40 simb&#93; </Transcription>
        <Exemple>{example} max 50 simb</Exemple>
      </>
      <ControlBox>
        <TouchableOpacity>
          <EditElement size={35}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <TurnElement size={48}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <DeleteElement size={35}/>
        </TouchableOpacity>
      </ControlBox>
    </CardBox>
  );
};



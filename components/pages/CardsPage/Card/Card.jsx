import axios from "axios";
import { TouchableOpacity } from "react-native";
import { Text, StyleSheet, View } from "react-native";
import { EditElement } from "../../../comon/EditElement/EditElement";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SaveElement } from "../../../comon/SaveElement/SaveElement";
import { DeleteElement } from "../../../comon/DeleteElement/DeleteElement";
import React, { useState } from "react";
import { Formik } from "formik";
import styled from "styled-components";
// import {  } from "./CardStyles.jsx";
// import { urlSet } from "../../../../api/src";

const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: 400,
      backgroundColor: "red"
    }
  });

const CardBox = styled.View`
    width: 100%;
    height: 400px;
    background-color: green;
    margin-bottom: 20px;
`;  
  

export const Card = ({name}) => {
  return (
    <CardBox>
        <Text>{name}</Text>
    </CardBox>
  )
};

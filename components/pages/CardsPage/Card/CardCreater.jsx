import axios from "axios";
import React from "react";

import { TouchableOpacity } from "react-native";
import { Formik } from "formik";
import { Text, StyleSheet, View, Image, ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components";
import { SaveElement } from "../../../comon/SaveElement/SaveElement";
import { DeleteElement } from "../../../comon/DeleteElement/DeleteElement";
import { urlCard } from "../../../../api/src";

const Wrapper = styled.View`
  width: 100%;
  padding-top: 15px;
  padding-bottom: 200px;
  display: flex;
  align-items: center;
`;
const CardBox = styled.View`
  width: 280px;
  /* height: 400px; */
  background-color: #ffffff;
  margin-bottom: 20px;
  padding: 25px 15px;
  border-radius: 8px;
  border: 1px;
  border-color: #e8e8e8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Picture = styled.View`
  width: 100%;
  height: 100px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Termin = styled.TextInput`
  /* text-align: center; */
  padding: 8px 15px;
  border: 1px solid rgb(194, 194, 194);
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 10px;
  color: "rgb(58, 79, 88)";
`;
const Title = styled.Text`
  /* text-align: center; */
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 10px;
  color: rgb(88, 98, 103);
`;

const Buttons = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;
const Block = styled.View`
  height: 100%;
  width: 250px;
`;

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    justifyContent: "center",
  },
});

export const CardCreater = ({
  escFromAdding,
  addNewCard,
  showSearchWindow,
  urlPhoto,
  setId,
  updateSet,
  collectionData,
}) => {
//   const [data, setData] = React.useState(collectionData);

  const saveCard = (values) => {
    axios
      .post(urlCard, {
        // cards: [
        //   ...data.cards.reverse(),
        //   {
            imgUri: urlPhoto,
            name: values.txt1,
            transcription: values.txt2,
            example: values.txt3,
            translate: values.txt4,
            string1: values.txt5,
            string2: values.txt6,
            set_id: setId
        //   },
        // ],
      })
      .then(({ data }) => {
        // addNewCard(data);
        // updateSet();
        console.log(data);
      })
      .catch((err) => {
        alert("Error of saving " + err);
      })
      .finally(() => {
        escFromAdding();
      });
  };
  return (
    <Wrapper>
      <CardBox>
        <Formik
          initialValues={{
            txt1: "",
            txt2: "",
            txt3: "",
            txt4: "",
            txt5: "",
            txt6: "",
          }}
          onSubmit={(values) => saveCard(values)}
        >
          {({ handleChange, handleSubmit, values }) => (
            <>
              <TouchableOpacity onPress={() => showSearchWindow()}>
                {/* <ImageBackground
                  source={{ uri: "https://reactjs.org/logo-og.png" }}
                  resizeMode="contain"
                  style={styles.picture}
                > */}
                <Picture>
                  {!urlPhoto ? (
                    <AntDesign name="clouddownload" size={60} color="black" />
                  ) : (
                    <ImageBackground
                      source={{ uri: urlPhoto }}
                      resizeMode="contain"
                      style={styles.picture}
                    >
                      <Block></Block>
                    </ImageBackground>
                  )}
                </Picture>
                {/* </ImageBackground> */}
              </TouchableOpacity>
              <Title>Front side</Title>
              <Termin
                placeholder={"Word / Phrase"}
                value={values.txt1}
                onChangeText={handleChange("txt1")}
              />
              <Termin
                placeholder={"Transcription / Explanation / Description"}
                value={values.txt2}
                onChangeText={handleChange("txt2")}
              />
              <Termin
                placeholder={"Exemple / Sentence"}
                value={values.txt3}
                onChangeText={handleChange("txt3")}
              />
              <Title>Back side</Title>
              <Termin
                placeholder={"Word / Phrase"}
                value={values.txt4}
                onChangeText={handleChange("txt4")}
              />
              <Termin
                placeholder={"Transcription / Explanation / Description"}
                value={values.txt5}
                onChangeText={handleChange("txt5")}
              />
              <Termin
                placeholder={"Exemple / Sentence"}
                value={values.txt6}
                onChangeText={handleChange("txt6")}
              />
              <Buttons>
                <TouchableOpacity onPress={handleSubmit}>
                  <SaveElement />
                </TouchableOpacity>
                <TouchableOpacity onPress={escFromAdding}>
                  <DeleteElement />
                </TouchableOpacity>
              </Buttons>
            </>
          )}
        </Formik>
      </CardBox>
    </Wrapper>
  );
};

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
import { EscElement } from "../../../comon/EscElement/EscElement";

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
  cardValues,
  updateReq,
  cardId
}) => {
  const [data, setData] = React.useState({
    urlPhoto: urlPhoto, 
    txt1: cardValues.txt1,
    txt2: cardValues.txt2,
    txt3: cardValues.txt3,
    txt4: cardValues.txt4,
    txt5: cardValues.txt5,
    txt6: cardValues.txt6,
    setId: setId,
    cardId: cardValues.cardId
  });

  const saveCard = (values) => {
    if (values.txt1) {
      if (updateReq) {
        axios
        .put(
          urlCard,
          {
            _id: cardId,
            imgUri: urlPhoto,
            name: values.txt1,
            transcription: values.txt2,
            example: values.txt3,
            translate: values.txt4,
            string1: values.txt5,
            string2: values.txt6,
            set_id: setId,
          },
          { headers: { "Content-Type": "application/json" } }
        )
        .then(({ data }) => {
          addNewCard();
        })
        .catch((err) => {
          // console.log(err.response);
          alert("Error of saving " + err);
        })
        .finally(() => {
          escFromAdding();
        });
      } else {
        axios
        .post(
          urlCard,
          {
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
            set_id: setId,
            //   },
            // ],
          },
          { headers: { "Content-Type": "application/json" } }
        )
        .then(({ data }) => {
          addNewCard();
        })
        .catch((err) => {
          // console.log(err.response);
          alert("Error of saving " + err);
        })
        .finally(() => {
          escFromAdding();
        });
      }
      
    } else {
      alert("Fill in required fields");
    }
  };
  return (
    <Wrapper>
      <CardBox>
        <Formik
          initialValues={{
            txt1: data.txt1,
            txt2: data.txt2,
            txt3: data.txt3,
            txt4: data.txt4,
            txt5: data.txt5,
            txt6: data.txt6,
            cardId: data.cardId
          }}
          onSubmit={(values) => saveCard(values)}
        >
          {({ handleChange, handleSubmit, values }) => (
            <>
              <TouchableOpacity onPress={() => showSearchWindow(values)}>
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
                style={{ borderColor: "#c23232" }}
                maxLength={40}
              />
              <Termin
                placeholder={"Transcription / Explanation / Description"}
                value={values.txt2}
                onChangeText={handleChange("txt2")}
                maxLength={40}
              />
              <Termin
                placeholder={"Exemple / Sentence"}
                value={values.txt3}
                onChangeText={handleChange("txt3")}
                maxLength={50}
              />
              <Title>Back side</Title>
              <Termin
                placeholder={"Word / Phrase / Translate"}
                value={values.txt4}
                onChangeText={handleChange("txt4")}
                maxLength={40}
              />
              <Termin
                placeholder={"Transcription / Explanation / Description"}
                value={values.txt5}
                onChangeText={handleChange("txt5")}
                maxLength={40}
              />
              <Termin
                placeholder={"Exemple / Sentence"}
                value={values.txt6}
                onChangeText={handleChange("txt6")}
                maxLength={50}
              />
              <Buttons>
                <TouchableOpacity onPress={handleSubmit}>
                  <SaveElement />
                </TouchableOpacity>
                <TouchableOpacity onPress={escFromAdding}>
                  <EscElement size={32}/>
                </TouchableOpacity>
              </Buttons>
            </>
          )}
        </Formik>
      </CardBox>
    </Wrapper>
  );
};

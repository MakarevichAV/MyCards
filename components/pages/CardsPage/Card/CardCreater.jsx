import axios from "axios";
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
  /* width: 100%; */
  height: 100px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px; */
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

export const CardCreater = ({
  escFromAdding,
  addNewCard,
  showSearchWindow,
  urlPhoto,
}) => {
  const saveCard = (values) => {
    axios
      .post(urlCard + id, {
        imgUri: urlPhoto,
        name: values.txt1,
        transcription: values.txt2,
        example: values.txt3,
        translate: values.txt4,
        string1: values.str1,
        string2: values.str2,
      })
      .then(({ data }) => {
        addNewCard(data);
      })
      .catch((err) => {
        alert("Error of saving");
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
            name: "",
            transcription: "",
            example: "",
            translate: "",
            string1: "",
            string2: "",
          }}
          onSubmit={(values) => saveCard(values)}
        >
          {({ handleChange, handleSubmit, values }) => (
            <>
              <TouchableOpacity onPress={() => showSearchWindow()}>
                <Picture>
                  <AntDesign name="clouddownload" size={60} color="black" />
                  <ImageBackground resizeMode="contain" source={urlPhoto} />
                </Picture>
              </TouchableOpacity>
              <Title>Front side</Title>
              <Termin
                placeholder={"Word / Phrase"}
                value={values.name}
                onChangeText={handleChange("name")}
              />
              <Termin
                placeholder={"Transcription / Explanation / Description"}
                value={values.transcription}
                onChangeText={handleChange("transcription")}
              />
              <Termin
                placeholder={"Exemple / Sentence"}
                value={values.example}
                onChangeText={handleChange("example")}
              />
              <Title>Back side</Title>
              <Termin
                placeholder={"Word / Phrase"}
                value={values.translate}
                onChangeText={handleChange("translate")}
              />
              <Termin
                placeholder={"Transcription / Explanation / Description"}
                value={values.string1}
                onChangeText={handleChange("string1")}
              />
              <Termin
                placeholder={"Exemple / Sentence"}
                value={values.string2}
                onChangeText={handleChange("string2")}
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

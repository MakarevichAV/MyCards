import axios from "axios";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Formik } from "formik";
import { SetBlock, Info, TitleInput, Buttons } from "./SetStyles";
import { SaveElement } from "../../../comon/SaveElement/SaveElement";
import { DeleteElement } from "../../../comon/DeleteElement/DeleteElement";

export const SetCreater = ({
  escFromAdding,
  addNewSet,
  catId,
  updateCat
}) => {
  const saveSet = (values) => {
    axios
      .post(`https://63a0b184e3113e5a5c44cd5c.mockapi.io/sets`, {
        title: values.title,
        num: 0,
        cat_id: catId
      })
      .then(({ data }) => {
        addNewSet(data);
        updateCat();
      })
      .catch((err) => {
        alert("Error of saving");
      })
      .finally(() => {
        escFromAdding();
      });
  };

  return (
    <SetBlock>
      <Formik
        initialValues={{ title: "Name of set" }}
        onSubmit={(values) => saveSet(values)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <>
            <Info>
              <TitleInput
                value={values.title}
                onChangeText={handleChange("title")}
              />
              <Buttons>
                <TouchableOpacity onPress={handleSubmit}>
                  <SaveElement />
                </TouchableOpacity>
                <TouchableOpacity onPress={escFromAdding}>
                  <DeleteElement />
                </TouchableOpacity>
              </Buttons>
            </Info>
          </>
        )}
      </Formik>
    </SetBlock>
  );
};
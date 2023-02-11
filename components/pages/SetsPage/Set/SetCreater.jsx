import axios from "axios";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Formik } from "formik";
import { SetBlock, Info, TitleInput, Buttons } from "./SetStyles";
import { SaveElement } from "../../../comon/SaveElement/SaveElement";
import { DeleteElement } from "../../../comon/DeleteElement/DeleteElement";
import { urlSet } from "../../../../api/src";

export const SetCreater = ({
  escFromAdding,
  addNewSet,
  catId,
  updateCat
}) => {
  const saveSet = (values) => {
    axios
      .post(urlSet, {
        title: values.title,
        cat_id: catId,
        num: 0,
        passed: 0
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
                  <DeleteElement size={32}/>
                </TouchableOpacity>
              </Buttons>
            </Info>
          </>
        )}
      </Formik>
    </SetBlock>
  );
};
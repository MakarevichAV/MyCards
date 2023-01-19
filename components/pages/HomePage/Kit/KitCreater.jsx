import axios from "axios";
import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { Formik } from "formik";
import { KitBlock, KitImage, KitInfo, TitleInput, Buttons } from "./KitStyles";
import { SaveElement } from "../../../comon/SaveElement/SaveElement";
import { DeleteElement } from "../../../comon/DeleteElement/DeleteElement";

export const KitCreater = ({escFromAdding}) => {
  return (
    <KitBlock>
      <Formik initialValues={{ title: "Name of category" }}>
        {({ handleChange, handleSubmit, values }) => (
          <>
            <KitImage
              source={require("../../../../assets/images/folder.png")}
            />

            <KitInfo>
              <TitleInput
                value={values.title}
                onChangeText={handleChange("title")}
              />
              <Buttons>
                <TouchableOpacity  >
                  <SaveElement />
                </TouchableOpacity>
                <TouchableOpacity onPress={escFromAdding} >
                  <DeleteElement />
                </TouchableOpacity>
              </Buttons>
            </KitInfo>
          </>
        )}
      </Formik>
    </KitBlock>
  );
};
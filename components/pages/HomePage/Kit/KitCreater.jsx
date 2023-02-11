import axios from "axios";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Formik } from "formik";
import { KitBlock, KitImage, KitInfo, TitleInput, Buttons } from "./KitStyles";
import { SaveElement } from "../../../comon/SaveElement/SaveElement";
import { DeleteElement } from "../../../comon/DeleteElement/DeleteElement";
import { urlCat } from "../../../../api/src";
import { AntDesign } from "@expo/vector-icons";

export const KitCreater = ({
  escFromAdding,
  addNewCat,
  showSearchWindow,
  urlPhoto,
}) => {
  const saveCategorie = (values) => {
    axios
      .post(urlCat, {
        title: values.title,
        imageUri: urlPhoto,
      })
      .then(({ data }) => {
        addNewCat(data);
      })
      .catch((err) => {
        alert("Error of saving");
      })
      .finally(() => {
        escFromAdding();
      });
  };

  return (
    <KitBlock>
      <Formik
        initialValues={{ title: "Name of category" }}
        onSubmit={(values) => saveCategorie(values)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <>
            <TouchableOpacity onPress={() => showSearchWindow()}>
              {!urlPhoto ? (
                <AntDesign style={{paddingRight: 10}} name="clouddownload" size={55} color="black" />
              ) : (
                <KitImage source={{ uri: urlPhoto }} />
              )}
            </TouchableOpacity>

            <KitInfo>
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
            </KitInfo>
          </>
        )}
      </Formik>
    </KitBlock>
  );
};

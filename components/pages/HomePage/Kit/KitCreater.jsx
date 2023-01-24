import axios from "axios";
import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { Formik } from "formik";
import { KitBlock, KitImage, KitInfo, TitleInput, Buttons } from "./KitStyles";
import { SaveElement } from "../../../comon/SaveElement/SaveElement";
import { DeleteElement } from "../../../comon/DeleteElement/DeleteElement";
import { createClient } from "pexels";

// const client = createClient('TgiSsgKySa76KTi62EQlte8JPSPTDOQ3zw2xskbdK9wpLwUteHHMiZEF');
// const query = 'Nature';

export const KitCreater = ({
  escFromAdding,
  addNewCat,
  showSearchWindow,
  urlPhoto,
}) => {
  const [searchWindowState, setSearchWindowState] = React.useState(false);
  // client.photos.search({ query, per_page: 1 }).then(photos => {...});
  const defUrl = urlPhoto;
  const saveCategorie = (values) => {
    axios
      .post(`https://63a0b184e3113e5a5c44cd5c.mockapi.io/CardTitles`, {
        title: values.title,
        imageUri: urlPhoto,
      })
      .then(({ data }) => {
        addNewCat(data);
      })
      .catch((err) => {
        alert("Error of cards getting");
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
              <KitImage source={{ uri: urlPhoto }} />
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

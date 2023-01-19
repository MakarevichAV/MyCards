import axios from "axios";
import React from "react";
import { TouchableOpacity } from "react-native";
import { EditElement } from "../../../comon/EditElement/EditElement";
import { StyleSheet } from "react-native";
import { SaveElement } from "../../../comon/SaveElement/SaveElement";
import { Formik } from "formik";
import {
  KitBlock,
  KitInfo,
  KitImage,
  KitTitle,
  KitNum,
  TitleInput,
  Buttons,
} from "./KitStyles";
import { DeleteElement } from "../../../comon/DeleteElement/DeleteElement";

export const Kit = ({ catId, title, imageUrl }) => {
  const [editingState, setEditingState] = React.useState(false);
  const [titleState, setTitleState] = React.useState(title);
  const editCategorie = () => {
    setEditingState(true);
  };
  const saveCategorie = (newValues) => {
    axios
      .put(
        `https://63a0b184e3113e5a5c44cd5c.mockapi.io/CardTitles/${catId}`,
        newValues
      )
      .then(({ data }) => {
        setTitleState(data.title);
      })
      .catch((err) => {
        alert("Error of cards getting");
      })
      .finally(() => {
        setEditingState(false);
      });
  };

  return (
    <KitBlock>
      <KitImage
        source={
          imageUrl == ""
            ? require("../../../../assets/images/folder.png")
            : { uri: imageUrl }
        }
      />
      {editingState && (
        <Formik
          initialValues={{ title: title }}
          onSubmit={(values) => saveCategorie(values)}
        >
          {({ handleChange, handleSubmit, values }) => (
            <>
              <KitInfo>
                <TitleInput
                  value={values.title}
                  onChangeText={handleChange("title")}
                />
                <Buttons>
                  <TouchableOpacity onPress={handleSubmit}>
                    <SaveElement />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleSubmit}>
                    <DeleteElement />
                  </TouchableOpacity>
                </Buttons>
              </KitInfo>
            </>
          )}
        </Formik>
      )}
      {!editingState && (
        <>
          <KitInfo>
            <KitNum>6 cards</KitNum>
            <KitTitle>{titleState}</KitTitle>
          </KitInfo>
          <TouchableOpacity onPress={editCategorie} style={styles.button}>
            <EditElement />
          </TouchableOpacity>
        </>
      )}
    </KitBlock>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 10,
    flexGrow: 1,
    maxWidth: 50,
  },
});

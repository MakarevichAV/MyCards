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
import { urlCat, urlSet } from "../../../../api/src";

export const Kit = ({ catId, title, imageUrl, setsNumber, deleteCategory, showSearchWindow }) => {
  const [editingState, setEditingState] = React.useState(false);
  const [titleState, setTitleState] = React.useState(title);
  const editCategorie = () => {
    setEditingState(true);
  };
  const saveCategorie = (newValues) => {
    axios
      .put(urlCat, { _id: catId, ...newValues })
      .then(({ data }) => {
        setTitleState(data.title);
      })
      .catch((err) => {
        alert("Error of card updating");
      })
      .finally(() => {
        setEditingState(false);
      });
  };
  const [num, setNum] = React.useState(setsNumber);
  const getNumSets = () => {
    axios.get(urlSet, { params: { cat_id: catId } }).then(({ data }) => {
      setNum(data.length);
    });
  };
  React.useEffect(getNumSets, []);

  return (
    <KitBlock>
      {/* <TouchableOpacity onPress={() => console.log('редактировать картинку')}>
        <KitImage
          source={
            imageUrl == ""
              ? require("../../../../assets/images/folder.png")
              : { uri: imageUrl }
          }
        />
      </TouchableOpacity> */}
      {editingState && (
        <Formik
          initialValues={{ title: titleState }}
          onSubmit={(values) => saveCategorie(values)}
        >
          {({ handleChange, handleSubmit, values }) => (
            <>
              {/* <TouchableOpacity onPress={() => showSearchWindow()}> */}
                <KitImage
                  source={
                    imageUrl == ""
                      ? require("../../../../assets/images/folder.png")
                      : { uri: imageUrl }
                  }
                />
              {/* </TouchableOpacity> */}
              <KitInfo>
                <TitleInput
                  value={values.title}
                  onChangeText={handleChange("title")}
                  maxLength={35}
                />
                <Buttons>
                  <TouchableOpacity onPress={handleSubmit}>
                    <SaveElement />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => deleteCategory(catId)}>
                    <DeleteElement size={32} />
                  </TouchableOpacity>
                </Buttons>
              </KitInfo>
            </>
          )}
        </Formik>
      )}
      {!editingState && (
        <>
          <KitImage
            source={
              imageUrl == ""
                ? require("../../../../assets/images/folder.png")
                : { uri: imageUrl }
            }
          />

          <KitInfo>
            <KitNum>{num} sets</KitNum>
            <KitTitle>{titleState}</KitTitle>
          </KitInfo>
          <TouchableOpacity onPress={editCategorie} style={styles.button}>
            <EditElement size={22} />
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

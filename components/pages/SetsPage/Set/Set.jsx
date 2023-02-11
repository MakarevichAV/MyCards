import axios from "axios";
import { TouchableOpacity } from "react-native";
import { Text, StyleSheet } from "react-native";
import { EditElement } from "../../../comon/EditElement/EditElement";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SaveElement } from "../../../comon/SaveElement/SaveElement";
import { DeleteElement } from "../../../comon/DeleteElement/DeleteElement";
import React, { useState } from "react";
import { Formik } from "formik";
import {
  SetBlock,
  Info,
  Menu,
  Num,
  Title,
  BtnBlock,
  BtnView,
  BtnTest,
  BtnTxt,
  UnvisibleBlock,
  VisibleBlock,
  Knob,
  TitleInput,
  Buttons,
} from "./SetStyles.jsx";
import { urlSet } from "../../../../api/src";

export const Set = ({ setId, title, num, passed, deleteSet }) => {
  const [toggle, setToggle] = useState(false);
  const [titleState, setTitleState] = React.useState(title);
  const [editingState, setEditingState] = React.useState(false);
  const editSet = () => {
    setEditingState(true);
  };
  const saveSet = (newValues) => {
    axios
      .put(
        `${urlSet}/${setId}`,
        newValues
      )
      .then(({ data }) => {
        setTitleState(data.title);
      })
      .catch((err) => {
        alert("Error of set updating");
      })
      .finally(() => {
        setEditingState(false);
      });
  };
  return (
    <SetBlock>
      {editingState && (
        <Formik
          initialValues={{ title: titleState }}
          onSubmit={(values) => saveSet(values)}
        >
          {({ handleChange, handleSubmit, values }) => (
            <Info>
              <TitleInput
                value={values.title}
                onChangeText={handleChange("title")}
                maxLength={35}
              />
              <Buttons>
                <TouchableOpacity onPress={handleSubmit}>
                  <SaveElement />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteSet(setId)}>
                  <DeleteElement size={32}/>
                </TouchableOpacity>
              </Buttons>
            </Info>
          )}
        </Formik>
      )}
      {!editingState && (
        <>
          <Info>
            <Num>{num} cards</Num>
            <Title>{titleState}</Title>
            <BtnBlock>
              <BtnView
                // onPress={() =>
                //   navigation.navigate("Cards", {
                //     id: setId,
                //     title: title
                //   })
                // }
              >
                <BtnTxt>VIEW</BtnTxt>
              </BtnView>
              <BtnTest>
                <BtnTxt>TEST</BtnTxt>
              </BtnTest>
            </BtnBlock>
            <TouchableOpacity onPress={editSet} style={styles.button}>
              <EditElement size={22}/>
            </TouchableOpacity>
          </Info>
          <Menu>
            <Knob />
            {toggle && (
              <UnvisibleBlock>
                <FontAwesome name="send" size={24} color="#3A4F58" />
                <TouchableOpacity onPress={() => deleteSet(setId)}>
                  <MaterialIcons name="delete" size={24} color="#8C9497" />
                </TouchableOpacity>
              </UnvisibleBlock>
            )}
            <VisibleBlock>
              <MaterialCommunityIcons
                onPress={() => setToggle(!toggle)}
                name="dots-horizontal"
                size={32}
                color="#3A4F58"
              />
              <Text
                style={{
                  textAlign: "center",
                  color: "#c2c2c2",
                  fontSize: "10",
                  fontWeight: "bold",
                }}
              >
                Passed {"\n"}
                <Text style={{ color: "#B75F2D" }}>{passed}</Text> /
                <Text style={{ color: "#3A4F58" }}>{num}</Text>
              </Text>
            </VisibleBlock>
          </Menu>
        </>
      )}
    </SetBlock>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 10,
    flexGrow: 1,
    maxWidth: 50,
    position: "absolute",
    right: 10,
    top: 5,
  },
});

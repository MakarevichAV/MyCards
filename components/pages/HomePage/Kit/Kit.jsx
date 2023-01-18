import axios from "axios";
import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { EditElement } from "../../../comon/EditElement/EditElement";
import { StyleSheet } from "react-native";
import { SaveElement } from "../../../comon/SaveElement/SaveElement";
import { Formik } from "formik";

const KitBlock = styled.View`
  padding: 15px;
  margin-bottom: 15px;
  flex-direction: row;
  background: #ffffff;
  border: 1px solid #f8f8f8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  display: flex;
  align-items: stretch;
`;

const KitInfo = styled.View`
  /* padding-right: 50px; */
  flex-grow: 1;
`;

const KitImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 12px;
`;

const KitTitle = styled.Text`
  font-size: 16px;
  color: rgb(58, 79, 88);
`;

const KitNum = styled.Text`
  font-size: 10px;
  color: rgb(194, 194, 194);
`;

const TitleInput = styled.TextInput`
  padding: 8px 15px;
  width: 100%;
  border: 1px;
  border-color: rgb(194, 194, 194);
  font-size: 16px;
  color: rgb(88, 98, 103);
`;

// const editCategorie = (id) => {
// const [catData, setCatData] = React.useState([]);
// const fetchCatData = () => {
//   axios
//     .get(`https://63a0b184e3113e5a5c44cd5c.mockapi.io/CardTitles/:${id}`)
//     .then(({data}) => {
//       setCatData(data);
//       setEditingState(true);
//     })
//     .catch((err) => {
//       alert("Error of data getting");
//     })
// };
// React.useEffect(fetchCatData, []);
// setEditingState(true);
// }

export const Kit = ({ catId, title, imageUrl }) => {
  const [editingState, setEditingState] = React.useState(false);
  const [titleState, setTitleState] = React.useState(title);
  // React.useEffect(() => {
  //   const fetchData = () => {
  //     axios
  //       .get(`https://63a0b184e3113e5a5c44cd5c.mockapi.io/CardTitles/${catId}`)
  //       .then(({ data }) => {
  //         console.log(data);
  //         setTitleState(data.title);
  //       })
  //       .catch((err) => {
  //         alert("Error of cards getting");
  //       })
  //   }
  //   fetchData();
  // }, [titleState]);
  const editCategorie = () => {
    setEditingState(true);
  };
  const saveCategorie = (newValues) => {
    // const [category, setCategory] = React.useState([]);
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
          onSubmit={
            (values) => saveCategorie(values)

            // (values) => console.log(catId)
          }
        >
          {({ handleChange, handleSubmit, values }) => (
            <>
              <KitInfo>
                <TitleInput
                  value={values.title}
                  onChangeText={handleChange("title")}
                />
              </KitInfo>
              <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <SaveElement />
              </TouchableOpacity>
            </>
          )}
        </Formik>
      )}
      {!editingState && (
        <>
          <KitInfo>
            {/* <KitNum>{txt}</KitNum>
                    <KitTitle>{title}</KitTitle> */}
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

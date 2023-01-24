import axios from "axios";
import React from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  FlatList,
} from "react-native";
import { Formik } from "formik";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { createClient } from "pexels";

const client = createClient(
  "TgiSsgKySa76KTi62EQlte8JPSPTDOQ3zw2xskbdK9wpLwUteHHMiZEF"
);
const query = "spain flag";

const SearchWindowView = styled.View`
  padding: 15px;
  background-color: #f8f5e9;
  width: 100%;
`;

const RequestString = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
`;
const RequestInput = styled.TextInput`
  padding: 8px 15px;
  /* width: 100%; */
  flex-grow: 1;
  border: 1px;
  border-color: rgb(194, 194, 194);
  font-size: 16px;
  color: rgb(88, 98, 103);
  margin-bottom: 15px;
  height: 40px;
`;
const RequestButton = styled.View`
  width: 50px;
  height: 50px;
`;
const PicturesBlock = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const PictureWrapper = styled.View`
  margin: 15px;
`;
const Picture = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#1C1B15",
  },
  scrollView: {
    backgroundColor: "#1C1B15",
    marginHorizontal: 0,
  },
});

export const SearchWindow = ({getPicture}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [pictures, setPictures] = React.useState([]);
  const [img, setImg] = React.useState("");
  const fetchPictures = () => {
    setIsLoading(true);
    client.photos
      .search({ query, per_page: 40 })
      .then((photos) => {
        setPictures(photos.photos);
      })
      // .show({ id: 2014422 })
      // .then((photo) => {
      //   setImg(photo.url);
      // })
      .catch((err) => {
        alert("Error of photos getting");
      })
      .finally(() => {
        setIsLoading(false);
      });
    // axios
    //   .get("https://63a0b184e3113e5a5c44cd5c.mockapi.io/CardTitles")
    //   .then(({ data }) => {
    //     setItems(data);
    //   })
    //   .catch((err) => {
    //     alert("Error of cards getting");
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  };

  React.useEffect(fetchPictures, []);
  
  return (
    <SearchWindowView>
      <Formik
        initialValues={{ requestText: "Flags" }}
        onSubmit={(values) => searchPicture(values.requestText)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <>
            <RequestString>
              <RequestInput
                value={values.requestText}
                onChangeText={handleChange("requestText")}
              />
              <TouchableOpacity onPress={handleSubmit}>
                <RequestButton>
                  <Ionicons name="search" size={37} color="rgb(88, 98, 103)" />
                </RequestButton>
              </TouchableOpacity>
            </RequestString>
            <PicturesBlock>
              {/* <FlatList
                data={pictures}
                renderItem={({ item }) => <Item uri={item.src.small} />}
                keyExtractor={(item) => item.id}
              /> */}
              {
                pictures.map((obj) => (
                  // <TouchableOpacity
                  //   key={obj.id}
                  //   onPress={() => navigation.navigate("Sets")}
                  // >
                  // <Picture
                  //   catId={obj.id}
                  //   title={obj.title}
                  //   imageUrl={obj.imageUri}
                  //   deleteCategory={deleteCategory}
                  // />
                  <PictureWrapper key={obj.id}>
                    <TouchableOpacity onPress={() => getPicture(obj.id)}>
                      <Picture source={{ uri: obj.src.small }} />
                    </TouchableOpacity>
                  </PictureWrapper>
                  // </TouchableOpacity>
                ))
                // .reverse()
              }
              {/* <PictureWrapper>
                <TouchableOpacity>
                  <Picture source={{ uri: img }}/>
                </TouchableOpacity>
              </PictureWrapper> */}
            </PicturesBlock>
          </>
        )}
      </Formik>
    </SearchWindowView>
  );
};

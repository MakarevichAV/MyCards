import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from "react-native";
import { Formik } from "formik";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { createClient } from "pexels";
import { LoadingElement } from "../../../comon/LoadingElement/LoadingElement";

const client = createClient(
  "TgiSsgKySa76KTi62EQlte8JPSPTDOQ3zw2xskbdK9wpLwUteHHMiZEF"
);

const SearchWindowView = styled.View`
  padding: 15px;
  background-color: #f8f5e9;
  width: 100%;
`;

const RequestString = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const RequestInput = styled.TextInput`
  padding: 8px 15px;
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
const Wrapper = styled.View`
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
  const [query, setQuery] = React.useState("english flag");
  const fetchPictures = () => {
    setIsLoading(true);
    client.photos
      .search({ query, per_page: 40 })
      .then((photos) => {
        setPictures(photos.photos);
      })
      .catch((err) => {
        alert("Error of photos getting");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  
  const searchPictures = (query) => {
    setIsLoading(true);
    client.photos
      .search({ query, per_page: 40 })
      .then((photos) => {
        setPictures(photos.photos);
      })
      .catch((err) => {
        alert("Error of photos getting 2");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }


  React.useEffect(fetchPictures, []);

  return (
    <SearchWindowView>
      <Formik
        initialValues={{ requestText: query }}
        onSubmit={(values) => searchPictures(values.requestText)}
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
              {isLoading && <LoadingElement />}
              {!isLoading &&
                pictures.map((obj) => (
                  <Wrapper key={obj.id}>
                    <TouchableOpacity onPress={() => getPicture(obj.id)}>
                      <Picture source={{ uri: obj.src.small }} />
                    </TouchableOpacity>
                  </Wrapper>
                ))
              }
            </PicturesBlock>
          </>
        )}
      </Formik>
    </SearchWindowView>
  );
};

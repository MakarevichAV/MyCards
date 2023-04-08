import axios from "axios";
import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import { Kit } from "./Kit/Kit";
import { BottomBar } from "../../comon/BottomBar/BottomBar";
import { PlusButton } from "../../comon/PlusButton/PlusButton";
import { KitCreater } from "./Kit/KitCreater";
import { SearchWindow } from "../HomePage/SearchWindow/SearchWindow";
import { createClient } from "pexels";
import { LoadingElement } from "../../comon/LoadingElement/LoadingElement";
import { urlCat, urlSet } from "../../../api/src";
import { urlPictureApi } from "../../../api/src";

// const client = createClient(
//   "TgiSsgKySa76KTi62EQlte8JPSPTDOQ3zw2xskbdK9wpLwUteHHMiZEF"
// );

const Wrapper = styled.View`
  padding: 15px;
  padding-bottom: 80px;
  background-color: #f8f5e9;
  min-height: 100%;
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
  text: {
    fontSize: 42,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    flexGrow: 1,
    width: 80,
    height: 80,
    position: "absolute",
    bottom: 100,
    right: 30,
  },
});

export const HomePage = ({ navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isSearching, setIsSearching] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const requestOnKits = () => {
    axios
      .get(urlCat)
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        // console.log(err)
        alert("Error of categories getting");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const fetchKits = () => {
    setIsLoading(true);
    requestOnKits();
  };
  const updateCat = () => {
    fetchKits();
  };

  React.useEffect(fetchKits, []);

  const [addingCategory, setEddingCategory] = React.useState(false);
  const [urlPhoto, setUrlPhoto] = React.useState("");
  // let pictureUrl;

  // client.photos.show({ id: 1194775 }).then((photo) => {
  //   pictureUrl = photo.src.small;
  // });

  const addCategory = () => {
    setEddingCategory(true);
    // setUrlPhoto(pictureUrl);
  };
  const escFromAdding = () => {
    setEddingCategory(false);
    setUrlPhoto("");
  };
  const addNewCat = (data) => {
    setItems([...items, data]);
  };

  const [titleState, setTitleState] = React.useState("Name of catgory");
  const showSearchWindow = (newVal) => {
    setIsSearching(true);
    setTitleState(newVal);
  };
  
  const getPicture = (id) => {
    axios
      .get(urlPictureApi + `&id=${id}`)
      .then((data) => {
        setUrlPhoto(data.data.hits[0].previewURL);
      })
      .catch((err) => {
        alert("Error of getting photo");
      })
      .finally(() => {
        setIsSearching(false);
      });
  };

  const deleteCategory = (id) => {
    const deleteRequest = () => {
      axios
        .delete(`${urlCat}/${id}`)
        .then(({ data }) => {
          alert(`Category ${data.title} has been successfully deleted`);
          deleteAllInsideSets(data.id);
          console.log(data.id);
        })
        .catch((err) => {
          alert("Error of deleting");
        })
        .finally(() => {
          let newItems = items.forEach(function (el, i) {
            if (el.id == id) items.splice(i, 1);
          });
          fetchKits();
        });
    };
    Alert.alert(
      "You are trying to delete a category. All sets of this catagory will be deleted too",
      "Are you sure?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "OK", onPress: () => deleteRequest() },
      ]
    );
    const deleteAllInsideSets = (catId) => {
      axios.get(`${urlSet}?cat_id=${catId}`).then(({ data }) => {
        data.forEach((set) => {
          axios.delete(`${urlSet}/${set.id}`);
        });
      });
    };
  };

  if (isLoading) {
    return <LoadingElement />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Wrapper>
          {isSearching && (
            <SearchWindow
              getPicture={getPicture}
              borderRadius={100}
              resizeMode="cover"
            />
          )}
          {!isSearching && (
            <>
              {addingCategory && (
                <KitCreater
                  escFromAdding={escFromAdding}
                  addNewCat={addNewCat}
                  showSearchWindow={showSearchWindow}
                  getPicture={getPicture}
                  urlPhoto={urlPhoto}
                  titleState={titleState}
                />
              )}
              {items
                .map((obj) => (
                  <TouchableOpacity
                    key={obj._id}
                    onPress={() =>
                      navigation.navigate("Sets", {
                        id: obj._id,
                        title: obj.title,
                        updateCat: updateCat,
                      })
                    }
                  >
                    <Kit
                      catId={obj._id}
                      title={obj.title}
                      imageUrl={obj.imageUri}
                      deleteCategory={deleteCategory}
                      showSearchWindow={showSearchWindow}
                      getPicture={getPicture}
                    />
                  </TouchableOpacity>
                ))
                .reverse()}
            </>
          )}
        </Wrapper>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={addCategory}>
        <PlusButton />
      </TouchableOpacity>
      <BottomBar />
      <StatusBar barStyle="light-content" theme="auto" />
    </SafeAreaView>
  );
};

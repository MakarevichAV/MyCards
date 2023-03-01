import axios from "axios";
import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Alert,
  Dimensions,
} from "react-native";
import { PlusButton } from "../../comon/PlusButton/PlusButton";
import { LoadingElement } from "../../comon/LoadingElement/LoadingElement";
import { BottomBar } from "../../comon/BottomBar/BottomBar";
import { urlCard, urlPictureApi } from "../../../api/src";
import { Card } from "./Card/Card";
import Carousel from "react-native-reanimated-carousel";
import "react-native-reanimated";
import { FadeInRight } from "react-native-reanimated";
import { SBItem } from "./Card/SBItem";
import { createClient } from "pexels";
import { CardCreater } from "./Card/CardCreater";
import { SearchWindow } from "../HomePage/SearchWindow/SearchWindow";

const client = createClient(
  "TgiSsgKySa76KTi62EQlte8JPSPTDOQ3zw2xskbdK9wpLwUteHHMiZEF"
);

const Wrapper = styled.View`
  padding-top: 15px;
  padding-bottom: 80px;
  background-color: #f8f5e9;
  min-height: 100%;
`;

// const MyCarousel = styled.Carousel`
//     width: 100%;
// `;

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
  //   carousel: {
  //     width: "100%"
  //   }
});

export const CardsPage = ({ navigation, route }) => {
  const width = Dimensions.get("window").width;
  const { id, title } = route.params;
  const [isSearching, setIsSearching] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const [addingCard, setAddingCard] = React.useState(false);
  const [urlPhoto, setUrlPhoto] = React.useState("");
  const [addingCategory, setAddingCategory] = React.useState(false);
  const [collectionData, setCollectionData] = React.useState([]);
  // let pictureUrl;
  // client.photos.show({ id: 1194775 }).then((photo) => {
  //   pictureUrl = photo.src.small;
  // });

  const updateSet = () => {
    fetchCards();
  };

  const addCard = () => {
    setUrlPhoto("");
    setUpdateReq(false);
    setAddingCard(true);
    setCardValues({
      txt1: "",
      txt2: "",
      txt3: "",
      txt4: "",
      txt5: "",
      txt6: "",
    });
  };
  const escFromAdding = () => {
    setAddingCard(false);
    setUrlPhoto("");
  };

  const fetchCards = () => {
    setIsLoading(true);
    axios
      .get(urlCard + "?set_id=" + id)
      .then(({ data }) => {
        setItems(data.reverse());
        setCollectionData(data);
      })
      .catch((err) => {
        alert("Error of sets getting");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  React.useEffect(fetchCards, []);

  const addNewCard = () => {
    fetchCards();
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

  const [mode, setMode] = React.useState("horizontal-stack");
  const [snapDirection, setSnapDirection] = React.useState("left");
  const [pagingEnabled, setPagingEnabled] = React.useState(true);
  const [snapEnabled, setSnapEnabled] = React.useState(true);
  const [loop, setLoop] = React.useState(true);
  const [autoPlay, setAutoPlay] = React.useState(false);
  const [autoPlayReverse, setAutoPlayReverse] = React.useState(false);
  const [updateReq, setUpdateReq] = React.useState(false);
  const [cardId, setCardId] = React.useState("");
  const [cardValues, setCardValues] = React.useState({
    txt1: "",
    txt2: "",
    txt3: "",
    txt4: "",
    txt5: "",
    txt6: "",
  });

  const editCard = (state) => {
    setUpdateReq(true);
    setCardId(state.cardId);
    setCardValues({
      txt1: state.name,
      txt2: state.transcription,
      txt3: state.example,
      txt4: state.translate,
      txt5: state.string1,
      txt6: state.string2,
      updateReq: updateReq,
      cardId: cardId,
    });
    setUrlPhoto(state.imgUri);
    setAddingCard(true);
  };

  const data = React.useRef([...items.keys()]).current;

  // const [formData, setFormData] = React.useState({

  // });
  const showSearchWindow = (state) => {
    setCardValues({
      txt1: state.txt1,
      txt2: state.txt2,
      txt3: state.txt3,
      txt4: state.txt4,
      txt5: state.txt5,
      txt6: state.txt6,
      // updateReq: false,
      // cardId: '',
    });
    setIsSearching(true);
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
              borderRadius={6}
              resizeMode="contain"
            />
          )}
          {!isSearching && (
            <View style={{ flex: 1 }}>
              {addingCard && (
                <CardCreater
                  escFromAdding={escFromAdding}
                  addNewCard={addNewCard}
                  getPicture={getPicture}
                  showSearchWindow={showSearchWindow}
                  urlPhoto={urlPhoto}
                  setId={id}
                  updateSet={updateSet}
                  cardValues={cardValues}
                  updateReq={updateReq}
                  cardId={cardId}
                />
              )}
              {!addingCard && (
                <Carousel
                  style={{
                    width: "100%",
                    height: 440,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  width={280}
                  height={410}
                  pagingEnabled={pagingEnabled}
                  snapEnabled={snapEnabled}
                  mode={mode}
                  loop={loop}
                  autoPlay={autoPlay}
                  autoPlayReverse={autoPlayReverse}
                  data={items}
                  modeConfig={{
                    snapDirection,
                    stackInterval: mode === "vertical-stack" ? 8 : 18,
                  }}
                  renderItem={({ index }) => (
                    <TouchableOpacity
                      activeOpacity={1}
                      key={index}
                      onPress={() => console.log(items[index].imgUri)}
                    >
                      <Card
                        imgUri={items[index].imgUri}
                        name={items[index].name}
                        transcription={items[index].transcription}
                        example={items[index].example}
                        translate={items[index].translate}
                        string1={items[index].string1}
                        string2={items[index].string2}
                        editCard={editCard}
                        cardId={items[index]._id}
                      />
                    </TouchableOpacity>
                  )}
                />
              )}
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-evenly",
                }}
              ></View>
            </View>
          )}
        </Wrapper>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={addCard}>
        <PlusButton />
      </TouchableOpacity>
      <BottomBar />
      <StatusBar barStyle="light-content" theme="auto" />
    </SafeAreaView>
  );
};

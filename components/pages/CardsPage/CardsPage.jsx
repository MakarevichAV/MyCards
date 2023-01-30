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
import { urlCard } from "../../../api/src";
import { Card } from "./Card/Card";
import Carousel from "react-native-reanimated-carousel";
import "react-native-reanimated";
import { FadeInRight } from "react-native-reanimated";
import { SBItem } from "./Card/SBItem";

const Wrapper = styled.View`
  /* padding: 15px; */
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

  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const [addingCard, setAddingCard] = React.useState(false);

  const addCard = () => {
    setAddingCard(true);
  };

  const fetchCards = () => {
    setIsLoading(true);
    axios
      .get(urlCard + id)
      .then(({ data }) => {
        setItems(data.cards);
      })
      .catch((err) => {
        alert("Error of sets getting");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  React.useEffect(fetchCards, []);

  const [mode, setMode] = React.useState("horizontal-stack");
  const [snapDirection, setSnapDirection] = React.useState("left");
  const [pagingEnabled, setPagingEnabled] = React.useState(true);
  const [snapEnabled, setSnapEnabled] = React.useState(true);
  const [loop, setLoop] = React.useState(true);
  const [autoPlay, setAutoPlay] = React.useState(false);
  const [autoPlayReverse, setAutoPlayReverse] = React.useState(false);

  //   const data = React.useRef([...new Array().keys()]).current;
  const data = React.useRef([...items.keys()]).current;
  //   const viewCount = 5;

  if (isLoading) {
    return <LoadingElement />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Wrapper>
          {/* <View style={{ flex: 1 }}>
            <Carousel
              style={styles.carousel}
              //   loop
              stack-vertical-left
              width={300}
              height={400}
              autoPlay={false}
              data={
                [...new Array(6).keys()]
                // [...new Array(6).keys()]
              }
              //   scrollAnimationDuration={1000}
              //   onSnapToItem={(index) => console.log("current index:", index)}
              renderItem={({ index }) => (
                <View
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ textAlign: "center", fontSize: 30 }}>
                    {index}
                  </Text>
                </View>
              )}
            />
          </View> */}

          <View style={{ flex: 1 }}>
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
              //   data={data}
              data={items}
              modeConfig={{
                snapDirection,
                stackInterval: mode === "vertical-stack" ? 8 : 18,
              }}
              //   customConfig={() => ({ type: "positive", viewCount })}
              renderItem={({ index }) => (
                // items
                //   .map((obj) => (
                //     <TouchableOpacity
                //       key={obj.id}
                //       onPress={() => console.log(obj.name)}
                //     >
                //       <Card name={obj.name}/>
                //       {/* <Text>{obj.name}</Text> */}
                //       {/* <Set
                //   title={obj.title}
                //   num={obj.num}
                //   passed={obj.passed}
                //   setId={obj.id}
                //   deleteSet={deleteSet}
                // /> */}
                //     </TouchableOpacity>
                //   ))
                //   .reverse()

                <TouchableOpacity
                  key={index}
                  onPress={() => console.log(items[index].imgUri)}
                >
                  <Card
                    imgUri={items[index].imgUri}
                    name={items[index].name}
                    transcription={items[index].transcription}
                    example={items[index].example}
                    translate={items[index].translate}
                  />
                  {/* <Text>{obj.name}</Text> */}
                  {/* <Set
                  title={obj.title}
                  num={obj.num}
                  passed={obj.passed}
                  setId={obj.id}
                  deleteSet={deleteSet}
                /> */}
                </TouchableOpacity>

                // <SBItem
                //   index={index}
                //   key={index}
                // //   entering={FadeInRight.delay(
                // //     (viewCount - index) * 100
                // //   ).duration(200)}
                // />
              )}
            />
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
              }}
            >
              {/* <SButton
                onPress={() => {
                  setMode("horizontal-stack");
                }}
              >
                {"horizontal-stack"}
              </SButton>
              <SButton
                onPress={() => {
                  setMode("vertical-stack");
                }}
              >
                {"vertical-stack"}
              </SButton>
              <SButton
                onPress={() => {
                  setAutoPlay(!autoPlay);
                }}
              >
                {`${ElementsText.AUTOPLAY}:${autoPlay}`}
              </SButton>
              <SButton
                onPress={() => {
                  setAutoPlayReverse(!autoPlayReverse);
                }}
              >
                {`autoPlayReverse:${autoPlayReverse}`}
              </SButton>
              <SButton
                onPress={() => {
                  setLoop(!loop);
                }}
              >
                {`loop:${loop}`}
              </SButton>
              <SButton
                onPress={() => {
                  setSnapDirection(snapDirection === "left" ? "right" : "left");
                }}
              >
                {snapDirection}
              </SButton>
              <SButton
                onPress={() => {
                  setPagingEnabled(!pagingEnabled);
                }}
              >
                {`pagingEnabled:${pagingEnabled}`}
              </SButton>
              <SButton
                onPress={() => {
                  setSnapEnabled(!snapEnabled);
                }}
              >
                {`snapEnabled:${snapEnabled}`}
              </SButton> */}
            </View>
          </View>

          {
            //   items
            //     .map((obj) => (
            //       <TouchableOpacity
            //         key={obj.id}
            //         onPress={() => console.log(obj.name)}
            //       >
            //         {/* <Card name={obj.name}/> */}
            //         {/* <Text>{obj.name}</Text> */}
            //         {/* <Set
            //           title={obj.title}
            //           num={obj.num}
            //           passed={obj.passed}
            //           setId={obj.id}
            //           deleteSet={deleteSet}
            //         /> */}
            //       </TouchableOpacity>
            //     ))
            //     .reverse()
          }
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

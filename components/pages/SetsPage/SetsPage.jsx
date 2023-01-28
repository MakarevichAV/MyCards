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
import { Set } from "./Set/Set";
import { BottomBar } from "../../comon/BottomBar/BottomBar";
import { PlusButton } from "../../comon/PlusButton/PlusButton";
import { LoadingElement } from "../../comon/LoadingElement/LoadingElement";
import { SetCreater } from "./Set/SetCreater";
import { urlSet } from "../../../api/src";

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

export const SetsPage = ({ navigation, route }) => {
  const updateCat = () => {
    route.params.updateCat();
  };
  const { id, title } = route.params;
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const fetchSets = () => {
    setIsLoading(true);
    axios
      .get(urlSet + "?cat_id=" + id)
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        alert("Error of sets getting");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  React.useEffect(fetchSets, []);

  const [addingSet, setEddingSet] = React.useState(false);
  const addSet = () => {
    setEddingSet(true);
  };
  const escFromAdding = () => {
    setEddingSet(false);
  };
  const addNewSet = (data) => {
    setItems([...items, data]);
  };
  const deleteSet = (id) => {
    const deleteRequest = () => {
      axios
        .delete(`${urlSet}/${id}`)
        .then(({ data }) => {
          alert(`Set ${data.title} has been successfully deleted`);
          route.params.updateCat();
        })
        .catch((err) => {
          alert("Error of deleting");
        })
        .finally(() => {
          let newItems = items.forEach(function (el, i) {
            if (el.id == id) items.splice(i, 1);
          });
          fetchSets();
        });
    };
    Alert.alert("You are trying to delete a set", "Are you sure", [
      {
        text: "Cancel",
        style: "cancel",
      },
      { text: "OK", onPress: () => deleteRequest() },
    ]);
  };

  if (isLoading) {
    return <LoadingElement />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Wrapper>
          {addingSet && (
            <SetCreater
              escFromAdding={escFromAdding}
              addNewSet={addNewSet}
              catId={id}
              updateCat={updateCat}
            />
          )}
          {items
            .map((obj) => (
              <TouchableOpacity
                key={obj.id}
                onPress={() =>
                  navigation.navigate("Cards", {
                    id: obj.id,
                    title: obj.title,
                  })
                }
              >
                <Set
                  title={obj.title}
                  num={obj.num}
                  passed={obj.passed}
                  setId={obj.id}
                  deleteSet={deleteSet}
                />
              </TouchableOpacity>
            ))
            .reverse()}
        </Wrapper>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={addSet}>
        <PlusButton />
      </TouchableOpacity>
      <BottomBar />
      <StatusBar barStyle="light-content" theme="auto" />
    </SafeAreaView>
  );
};

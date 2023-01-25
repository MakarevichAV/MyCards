import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Text, StyleSheet } from "react-native";
import { EditElement } from "../../../comon/EditElement/EditElement";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";

const SetBlock = styled.View`
  margin-bottom: 15px;
  flex-direction: row;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  display: flex;
`;

const Info = styled.View`
  padding: 15px;
  margin-right: 65px;
  flex-grow: 1;
`;

const Menu = styled.View`
  background-color: rgb(238, 238, 238);
  border-radius: 6px;
  border: 1px;
  border-color: rgb(221, 221, 221);
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
`;

const Num = styled.Text`
  color: "rgb(194, 194, 194)";
  font-size: 10px;
  margin-bottom: 10px;
`;

const Title = styled.Text`
  font-size: 18px;
  color: "rgb(58, 79, 88)";
  font-weight: bold;
  margin-bottom: 10px;
`;

const BtnBlock = styled.View`
  display: flex;
  flex-direction: row;
`;

const BtnView = styled.View`
  background-color: "rgb(64, 183, 45)";
  width: 90px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-right: 10px;
`;

const BtnTest = styled.View`
  background-color: "rgb(183, 95, 45)";
  width: 90px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

const BtnTxt = styled.Text`
  color: "rgb(237, 237, 237)";
  font-weight: bold;
`;

const UnvisibleBlock = styled.View`
  width: 60px;
  padding: 15px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const VisibleBlock = styled.View`
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 5px;
`;

const Counter = styled.View``;

const Knob = styled.View`
  width: 3px;
  height: 40px;
  background-color: "rgb(141, 141, 141)";
  position: absolute;
  top: 30%;
  left: -4px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
`;

export const Set = ({ title, num, passed }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <SetBlock>
      <Info>
        <Num>{num} cards</Num>
        <Title>{title}</Title>
        <BtnBlock>
          <BtnView>
            <BtnTxt>VIEW</BtnTxt>
          </BtnView>
          <BtnTest>
            <BtnTxt>TEST</BtnTxt>
          </BtnTest>
        </BtnBlock>
        <TouchableOpacity style={styles.button}>
          <EditElement />
        </TouchableOpacity>
      </Info>
      <Menu>
        <Knob />
        {toggle && (
          <UnvisibleBlock>
            <FontAwesome name="send" size={24} color="#3A4F58" />
            <MaterialIcons name="delete" size={24} color="#8C9497" />
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
    </SetBlock>
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
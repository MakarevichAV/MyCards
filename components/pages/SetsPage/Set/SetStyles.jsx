import styled from "styled-components/native";


export const SetBlock = styled.View`
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
`;

export const Info = styled.View`
  padding: 15px;
  margin-right: 65px;
  flex-grow: 1;
`;

export const Menu = styled.View`
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

export const Num = styled.Text`
  color: "rgb(194, 194, 194)";
  font-size: 10px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: "rgb(58, 79, 88)";
  font-weight: bold;
  margin-bottom: 10px;
  margin-right: 50px;
`;

export const BtnBlock = styled.View`
  display: flex;
  flex-direction: row;
`;

export const BtnView = styled.View`
  background-color: "rgb(64, 183, 45)";
  width: 90px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-right: 10px;
`;

export const BtnTest = styled.View`
  background-color: "rgb(183, 95, 45)";
  width: 90px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const BtnTxt = styled.Text`
  color: "rgb(237, 237, 237)";
  font-weight: bold;
`;

export const UnvisibleBlock = styled.View`
  width: 60px;
  padding: 15px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const VisibleBlock = styled.View`
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 5px;
`;

export const Counter = styled.View``;

export const Knob = styled.View`
  width: 3px;
  height: 40px;
  background-color: "rgb(141, 141, 141)";
  position: absolute;
  top: 30%;
  left: -4px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
`;

export const Buttons = styled.View`
  display: flex;
  flex-direction: row;
`;

export const TitleInput = styled.TextInput`
  padding: 8px 15px;
  width: 100%;
  border: 1px;
  border-color: rgb(194, 194, 194);
  font-size: 16px;
  color: rgb(88, 98, 103);
  margin-bottom: 15px;
`;
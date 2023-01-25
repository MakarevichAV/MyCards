import styled from "styled-components/native";
export const KitBlock = styled.View`
  padding: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #ffffff;
  border: 1px solid #f8f8f8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
`;

export const KitInfo = styled.View`
  flex-grow: 1;
  flex-shrink: 1;
`;

export const KitImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const KitTitle = styled.Text`
  font-size: 16px;
  color: rgb(58, 79, 88);
  
`;

export const KitNum = styled.Text`
  font-size: 10px;
  color: rgb(194, 194, 194);
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
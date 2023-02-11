import styled from "styled-components/native";
import { Entypo } from "@expo/vector-icons";

const EditBox = styled.View`
  min-height: 32px;
  min-width: 32px;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px;
  border-color: #c2c2c2;
`;

export const EditElement = ({ size }) => {
  return (
    <EditBox>
      <Entypo name="edit" size={size} color="#787878" />
    </EditBox>
  );
};

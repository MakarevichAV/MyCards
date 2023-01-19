import styled from "styled-components/native";
import { FontAwesome } from '@expo/vector-icons';

const Btn = styled.View`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  border: 2px;
  border-color: rgb(37, 151, 20);
  border-radius: 50%;
  z-index: 50;
  background-color: rgb(63, 183, 45);
  opacity: 0.8;
`;

export const PlusButton = () => {
  return (
    <Btn>
      <FontAwesome name="plus" size={36} color="rgb(255, 255, 255)" />
    </Btn>
  );
};

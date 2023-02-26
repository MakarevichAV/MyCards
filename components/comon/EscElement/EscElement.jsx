import { EscBox } from "./EscElementStyles";
import { Entypo } from "@expo/vector-icons";

export const EscElement = ({ size }) => {
  return (
    <EscBox>
      <Entypo name="circle-with-cross" size={size} color="#8C9497" />
    </EscBox>
  );
};

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

const Input = styled.TextInput`
  padding: 8px 15px;
  flex-grow: 1;
  border: 1px;
  border-color: rgb(194, 194, 194);
  font-size: 16px;
  color: rgb(88, 98, 103);
  margin-bottom: 15px;
  height: 40px;
`;

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Email"
        placeholderTextColor="rgb(194, 194, 194)"
      />
    </>
  );
};

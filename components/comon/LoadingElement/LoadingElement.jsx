import { ActivityIndicator, Text } from "react-native";
import styled from "styled-components";
const Wrapper = styled.View`
  padding: 15px;
  padding-bottom: 80px;
  background-color: #f8f5e9;
  min-height: 100%;
`;
export const LoadingElement = () => {
  return (
    <Wrapper
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <ActivityIndicator size="large" color="#3fb72d" />
      <Text style={{ marginTop: 15, textAlign: "center" }}>Loading...</Text>
    </Wrapper>
  );
};

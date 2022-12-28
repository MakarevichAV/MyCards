import styled from "styled-components/native";
import { Text } from "react-native";

const SetBlock = styled.View`
  /* padding: 15px; */
  margin-bottom: 15px;
  flex-direction: row;
  justify-content: space-between;
  background: #ffffff;
  border: 1px solid #f8f8f8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  display: flex;
`;

const Info = styled.View`
  padding: 15px;
`;

const Menu = styled.View`
  width: 50px;
  background-color: #bdbcbc;
  border-radius: 6px;
`;

const Num = styled.Text`
    color: '#C2C2C2';
    font-size: 10px;
    margin-bottom: 10px;
`;

const Title = styled.Text`
    font-size: 16px;
    color: "#3A4F58";
    margin-bottom: 10px;
`;

const BtnBlock = styled.View`
    display: flex;
    flex-direction: row;
    
`;

const BtnView = styled.View`
    background-color: "#40B72D";
    width: 90px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BtnTest = styled.View`
    background-color: "#B75F2D";
    width: 90px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Set = ({ title, num, passed }) => {
  return (
    <SetBlock>
      <Info>
        <Num>{num} cards</Num>
        <Title>{title}</Title>
        <BtnBlock>
            <BtnView>
                <Text>View</Text>
            </BtnView>
            <BtnTest>
                <Text>Test</Text>
            </BtnTest>
        </BtnBlock>
      </Info>
      <Menu></Menu>
    </SetBlock>
  );
};

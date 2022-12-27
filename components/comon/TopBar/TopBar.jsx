import styled from 'styled-components/native';
import {Text} from 'react-native';
import { AddButton } from '../AddButton/AddButton.jsx';
import { BackButton } from '../BackButton/BackButton.jsx';

const TopStatusBar = styled.View`
    height: 100px;
    width: 100%;
    background-color: #3A4F58;
    position: fixed;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
`;

const TitleText = styled.Text`
    margin-bottom: 15px;
    font-family: Arial;
    font-weight: bold;
    font-size: 18px;
    color: white;
`;

export const TopBar = ({title}) => {
    return (
        <TopStatusBar>
            <BackButton/>
            <TitleText>Category</TitleText>
            <AddButton/>
        </TopStatusBar>
    );
}
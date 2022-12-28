import styled from 'styled-components/native';
import { AddButton } from './AddButton/AddButton.jsx';
import { BackButton } from './BackButton/BackButton.jsx';

const TopStatusBar = styled.View`
    height: 50px;
    width: 100%;
    background-color: #1C1B15;
    /* position: fixed; */
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
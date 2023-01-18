import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons'; 

const SaveBox = styled.View`
    height: 32px;
    width: 32px;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px;
    border-color: #c2c2c2;
`;

export const SaveElement = () => {
    return (
        <SaveBox>
            <Entypo name="save" size={24} color="#787878" />
        </SaveBox>
    );
}
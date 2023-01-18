import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';

const EditBox = styled.View`
    height: 32px;
    width: 32px;
    /* position: absolute; */
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px;
    border-color: #c2c2c2;
`;

export const EditElement = () => {
    return (
        <EditBox>
            <Entypo name="edit" size={17} color="#787878" />
        </EditBox>
    );
}
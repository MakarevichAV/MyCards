import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

const TurnBox = styled.View`
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TurnElement = ({size}) => {
    return (
        <TurnBox>
            <AntDesign name="reload1" size={size} color="rgb(40, 84, 103)" />
        </TurnBox>
    );
}
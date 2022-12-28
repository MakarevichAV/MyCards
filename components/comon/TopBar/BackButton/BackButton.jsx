import styled from "styled-components";
import { Ionicons } from '@expo/vector-icons';

const Button = styled.View`
    width: 40px;
    height: 50px;
    margin-left: 15px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BackButton = () => {
    return (
        <Button>
            <Ionicons name="ios-arrow-back" size={24} color="white" />
        </Button>
    );
}
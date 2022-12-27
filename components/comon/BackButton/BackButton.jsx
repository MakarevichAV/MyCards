import styled from "styled-components";
import { Ionicons } from '@expo/vector-icons';

const Button = styled.View`
    width: 36px;
    height: 36px;
    background-color: white;
`;

export const BackButton = () => {
    return (
        <Button>
            <Ionicons name="add-circle" size={36} color="green" />
        </Button>
    );
}
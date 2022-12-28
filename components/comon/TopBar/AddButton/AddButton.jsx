import styled from "styled-components";
import { MaterialIcons } from '@expo/vector-icons';

const Button = styled.View`
    width: 40px;
    height: 40px;
    margin-right: 15px;
    margin-bottom: 5px;
    background-color: #3fb72d;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AddButton = () => {
    return (
        <Button>
            <MaterialIcons name="add" size={32} color="white" />
        </Button>
    );
}
import styled from 'styled-components';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Btn = styled.View`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AccountButton = () => {
    return (
        <Btn>
            <MaterialCommunityIcons name="account" size={36} color="#f8f5e9" />
        </Btn>
    );
}
import styled from 'styled-components';
import { AccountButton } from './AccountButton/AccountButton';
import { HomeButton } from './HomeButton/HomeButton';

const BottomBlock = styled.View`
    height: 60px;
    width: 100%;
    background-color: #1C1B15;
    position: fixed;
    z-index: 7;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 15px;
`;

export const BottomBar = () => {
    return (
        <BottomBlock>
            <HomeButton/>
            <AccountButton/>
        </BottomBlock>
    );
}
import styled from 'styled-components/native';

const TopStatusBar = styled.View`
    height: 100px;
    width: 100%;
    background-color: #3A4F58;
    position: fixed;
    
`;

export const TopBar = ({title}) => {
    return (
        <TopStatusBar />
    );
}
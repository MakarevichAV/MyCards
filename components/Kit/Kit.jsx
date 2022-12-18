import { Text, View, Image } from 'react-native';
import styled from 'styled-components/native';

const KitView = styled.View`
    padding: 15px;
    margin-bottom: 30px;
    background: #f8f8f8;
`;

const KitImage = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 12px;
    margin-right: 12px;
`;

const KitTitle = styled.Text`
    font-size: 16px;
`;

export const Kit = ({title, imageUrl}) => {
    return (
        <KitView>
            <KitImage source={{ uri: imageUrl }} />
            <KitTitle>{title}</KitTitle>
        </KitView>
    );
}
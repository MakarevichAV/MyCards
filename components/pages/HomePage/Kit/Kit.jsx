import { Text, View, Image } from 'react-native';
import styled from 'styled-components/native';
import { EditElement } from '../../../comon/EditElement/EditElement';

const KitView = styled.View`
    padding: 15px;
    margin-bottom: 30px;
    flex-direction: row;

    background: #FFFFFF;
    border: 1px solid #F8F8F8;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;

    display: flex;

`;

const KitInfo = styled.View`
    /* border: 1px; */
    padding-right: 50px;
`;

const KitImage = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 12px;
    
`;

const KitTitle = styled.Text`
    font-size: 16px;
    color: #3A4F58;
`;

const KitNum = styled.Text`
    font-size: 10px;
    color: #c2c2c2;
`;

export const Kit = ({title, txt, imageUrl}) => {
    return (
        <KitView>
            <KitImage source={imageUrl=='' ? 
                                require('../../../../assets/images/folder.png') : 
                                { uri: imageUrl }} />
            <KitInfo>
                {/* <KitNum>{txt}</KitNum>
                <KitTitle>{title}</KitTitle> */}
                <KitNum>6 cards</KitNum>
                <KitTitle>{title}</KitTitle>
            </KitInfo>
            <EditElement />
        </KitView>
    );
}
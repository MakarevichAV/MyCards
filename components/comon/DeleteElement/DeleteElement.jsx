import { Entypo } from '@expo/vector-icons'; 
import { DeleteBox } from './DeleteElementStyles';
import { MaterialIcons } from "@expo/vector-icons";

export const DeleteElement = ({size}) => {
    return (
        <DeleteBox>
            <MaterialIcons name="delete" size={size} color="#8C9497" />
        </DeleteBox>
    );
}
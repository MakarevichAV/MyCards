import { Entypo } from '@expo/vector-icons'; 
import { DeleteBox } from './DeleteElementStyles';
import { MaterialIcons } from "@expo/vector-icons";

export const DeleteElement = () => {
    return (
        <DeleteBox>
            {/* <Entypo name="save" size={24} color="#787878" /> */}
            <MaterialIcons name="delete" size={24} color="#8C9497" />
        </DeleteBox>
    );
}
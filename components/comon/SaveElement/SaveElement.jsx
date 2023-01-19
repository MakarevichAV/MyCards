import { Entypo } from '@expo/vector-icons'; 
import { SaveBox } from './SaveElementStyles';

export const SaveElement = () => {
    return (
        <SaveBox>
            <Entypo name="save" size={24} color="#787878" />
        </SaveBox>
    );
}
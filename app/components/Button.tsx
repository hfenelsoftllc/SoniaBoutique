import {StyleSheet, View, Pressable, Text} from 'react-native';
import  FontAwesome from '@expo/vector-icons/FontAwesome';

type Props ={
    label: string;
    theme?: 'primary'
};


export default function Button({label, theme}: Props){
    if (theme ==='primary'){
        return(
            <View 
                style={[
                    styles.buttonContainer,
                    {borderWidth: 4, borderColor: '@ffd33d'}
                    ]}>
                <Pressable 
                    style={[styles.button, {backgroundColor: '#fff'}]}
                         onPress={()=> alert('You press a button.')}
                         >
                    <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
                    <Text style={[styles.buttonLabel, {color: '#25292e'}]}>{label}</Text>
                    
                </Pressable>
            </View>
        );
    }
   
}




const styles = StyleSheet.create({
    buttonContainer:{
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button:{
        width: '100%',
        height: '100%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon:{
        paddingRight: 8,
    },
    buttonLabel:{
        color: '#fff',
        fontSize: 16,
    },
});
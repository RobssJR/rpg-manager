import { StyleSheet } from 'react-native';
import  dracula  from '../../constants/Colors';

export const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        marginLeft: 10,
    },
    username: {
        fontSize: 20,
        color: dracula.green,
    },
    character: {
        fontSize: 20,
        color: dracula.foreground,
    },
    perfil: { 
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: dracula.background,
        marginRight: 10,
        resizeMode: 'stretch',
        overflow: "hidden",
        borderWidth: 3,
    }
});
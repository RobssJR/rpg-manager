import { StyleSheet } from 'react-native';

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
        color: 'green',
    },
    character: {
        fontSize: 20,
        color: '#fff',
    },
    perfil: { 
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: 'red',
        marginRight: 10,
        resizeMode: 'stretch',
        overflow: "hidden",
        borderWidth: 3,
    }
});
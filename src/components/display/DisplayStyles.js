import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    contenedorExterior:{
        height: 400,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contenedorCiudad:{
        alignItems: 'flex-start'
    },
    contenedorHoraFecha:{
        alignItems:'center'
    },
    ciudadTexto:{
        fontSize: 15
    },
    horaTexto:{
        fontSize: 50,
        color: 'black'
    },
    fechaTexto:{
        fontSize: 30
    }
})

export default styles;
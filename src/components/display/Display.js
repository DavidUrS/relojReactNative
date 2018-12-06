import React from 'react';
import { View, Text } from 'react-native';
import styles from './DisplayStyles';

const Display = (props)=>{
    return(
        <View style={styles.contenedorExterior}>
            <View style={styles.contenedorCiudad}>
                <Text style={styles.ciudadTexto}>{props.ciudad}</Text>
            </View>
            <View style={styles.contenedorHoraFecha}>
                <Text style={styles.horaTexto}>{props.hora}</Text>
            </View>
            <View style={styles.contenedorHoraFecha}>
                <Text style={styles.fechaTexto}>{props.fecha}</Text>
            </View>
        </View>
    )
}

export default Display;
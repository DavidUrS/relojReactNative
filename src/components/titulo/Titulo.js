import React from 'react';
import {Text, View} from 'react-native';
import styles from "./TituloStyles";
const Titulo = (props)=>{
    return(
        <View style={styles.viewStyles}>
            <Text style={styles.textStyles}>Menú</Text>
            <Text style={styles.textStyles}>{props.titulo}</Text>
            <Text style={styles.textStyles}>Agregar</Text>
        </View>
    )
}

export default Titulo;
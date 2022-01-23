import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform
} from 'react-native';

interface Props {
    name: string
    score: number
}

const ResultRow = (props: Props) => {

    return (
        <View style={rowStyles.row}>
            <Text style={rowStyles.rowText}>
                {props.name}
            </Text>
            <Text style={rowStyles.rowText}>
                {props.score}
            </Text>
        </View>
    )
}

export const rowStyles = StyleSheet.create({
    row: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.62,
        elevation: 2
    },

    rowText: {
        fontSize: 20,
        color: '#000',
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium'
    }
})

export default ResultRow;
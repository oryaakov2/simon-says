import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import ResultRow from '../components/ResultRow';
import { RootState } from '../store';
import { rowStyles } from '../components/ResultRow';

const ResultsList = () => {

    const results = useSelector((state: RootState) => state.game.results)

    return (
        <View>
            <View style={styles.rowLabel}>
                <Text style={rowStyles.rowText}>
                    Player's Name
                </Text>
                <Text style={rowStyles.rowText}>
                    Score
                </Text>
            </View>
            {results.map((result, index) => {
                return (
                    <ResultRow key={index} {...result} />
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    rowLabel: {
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
    }
})

export default ResultsList
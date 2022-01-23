import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform,
    ScrollView,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';

import ResultsList from '../auxiliary-components/ResultsList';

interface Props {
    navigation: any
}

const ResultsScreen = ({ navigation }: Props) => {

    return (
        <SafeAreaView style={styles.screenContainer}>
            <ScrollView>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        10 Best Results
                    </Text>
                </View>
                <ResultsList />
                <View style={styles.buttonView}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.newGameBtn}
                        onPress={() => navigation.navigate('Game')}>
                        <Text style={styles.newGameBtnText}>
                            New Game
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },

    titleContainer: {
        flex: 0.1,
        borderRadius: 10,
        margin: 10,
        padding: 5,
        backgroundColor: '#9370DB',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    title: {
        fontSize: 32,
        color: '#fff',
        textAlign: 'center',
        letterSpacing: 1,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium'
    },

    buttonView: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    newGameBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#663399',
        width: '50%',
        padding: 15,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4
    },

    newGameBtnText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '600',
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium'
    }
})

export default ResultsScreen;
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Platform,
    SafeAreaView
} from 'react-native';

import GameBoard from '../components/GameBoard';
import CustomModal from '../components/CustomModal';

interface Props {
    navigation: any
}

const GameScreen = ({ navigation }: Props) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomModal navigation={navigation} />
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        Simon Says
                    </Text>
                </View>
                <View style={styles.boardContainer}>
                    <GameBoard />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
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
        alignSelf: 'center',
        fontSize: 32,
        color: '#fff',
        textAlign: 'center',
        letterSpacing: 3,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium'
    },

    boardContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default GameScreen;
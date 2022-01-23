import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Modal,
    Platform,
    TextInput,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../store";
import { gameActions } from '../store/gameSlice';
import { uiActions } from '../store/uiSlice';

interface Props {
    navigation: any
}

const CustomModal = ({ navigation }: Props) => {

    const modalVisible = useSelector((state: RootState) => state.ui.modalVisible)
    const score = useSelector((state: RootState) => state.game.score)

    const [playerName, setPlayerName] = useState<string>('')

    const dispatch = useDispatch()

    return (
        <Modal
            visible={modalVisible}
            animationType='slide'
            transparent={true}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>
                        Player Name
                    </Text>
                    <TextInput
                        style={styles.modalInput}
                        maxLength={15}
                        defaultValue={playerName}
                        onChangeText={(value) => setPlayerName(value)}
                        textContentType='none'
                        autoFocus
                    />
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.modalBtn}
                        onPress={() => {
                            dispatch(gameActions.addNewResult({ name: playerName, score: score }))
                            dispatch(gameActions.resetScore())
                            dispatch(uiActions.setModalVisible(false))
                            navigation.navigate('Results')
                        }}>
                        <Text style={styles.modalBtnText}>
                            Done
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },

    modalView: {
        width: '85%',
        height: windowHeight / 2.5,
        margin: 20,
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    modalText: {
        fontSize: 22,
        color: '#000',
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium'
    },

    modalInput: {
        backgroundColor: '#E6E6FA',
        color: '#000',
        width: '100%',
        fontSize: 23,
        textAlign: 'center',
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 20,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium'
    },

    modalBtn: {
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

    modalBtnText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '600',
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium'
    }
})

export default CustomModal;
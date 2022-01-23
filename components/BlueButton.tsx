import React from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    Text
} from "react-native"

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { gameActions } from '../store/gameSlice';
import Sound from 'react-native-sound';

export const blueSound = new Sound('blue.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
})

const BlueButton = () => {

    const disableButton = useSelector((state: RootState) => state.game.disableButton)
    const flash = useSelector((state: RootState) => state.game.flash)

    const dispatch = useDispatch()

    const onClickHandler = (): void => {
        dispatch(gameActions.setPlayerSelect(1))
        dispatch(gameActions.setToggleGameEffect())
    }

    return (
        <>
            <TouchableHighlight
                activeOpacity={0.8}
                touchSoundDisabled
                underlayColor="#00FDFF"
                disabled={disableButton}
                style={[styles.button, { backgroundColor: flash === 1 ? "#00FDFF" : '#00BFFF' }]}
                onPress={() => {
                    blueSound.stop()
                    onClickHandler()
                    blueSound.play()
                }}>
                <Text />
            </TouchableHighlight>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: '#00BFFF',
        borderTopLeftRadius: 380 / 2,
        marginRight: 2.5,
        marginBottom: 2.5
    }
})

export default BlueButton;
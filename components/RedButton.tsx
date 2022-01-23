import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight
} from "react-native"

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { gameActions } from '../store/gameSlice';
import Sound from 'react-native-sound';

export const redSound = new Sound('red.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
})

const RedButton = () => {

    const disableButton = useSelector((state: RootState) => state.game.disableButton)
    const flash = useSelector((state: RootState) => state.game.flash)

    const dispatch = useDispatch()

    const onClickHandler = (): void => {
        dispatch(gameActions.setPlayerSelect(3))
        dispatch(gameActions.setToggleGameEffect())
    }

    return (
        <TouchableHighlight
            activeOpacity={0.8}
            underlayColor="#FF0000"
            touchSoundDisabled
            disabled={disableButton}
            style={[styles.button, { backgroundColor: flash === 3 ? "#FF0000" : "#DC143C" }]}
            onPress={() => {
                redSound.stop()
                onClickHandler()
                redSound.play()
            }}>
            <Text />
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: '#DC143C',
        borderBottomLeftRadius: 380 / 2,
        marginRight: 2.5,
        marginTop: 2.5
    }
})

export default RedButton;
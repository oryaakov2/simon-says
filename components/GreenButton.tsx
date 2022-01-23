import React from 'react';
import {
    TouchableHighlight,
    Text,
    StyleSheet
} from "react-native"

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { gameActions } from '../store/gameSlice';
import Sound from 'react-native-sound';

export const greenSound = new Sound('green.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
})

const GreenButton = () => {

    const disableButton = useSelector((state: RootState) => state.game.disableButton)
    const flash = useSelector((state: RootState) => state.game.flash)

    const dispatch = useDispatch()

    const onClickHandler = (): void => {
        dispatch(gameActions.setPlayerSelect(2))
        dispatch(gameActions.setToggleGameEffect())
    }

    return (
        <TouchableHighlight
            activeOpacity={0.8}
            underlayColor="#00FF00"
            touchSoundDisabled
            disabled={disableButton}
            style={[styles.button, { backgroundColor: flash === 2 ? "#00FF00" : "#3CB371" }]}
            onPress={() => {
                greenSound.stop()
                onClickHandler()
                greenSound.play()
            }}>
            <Text />
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: '#3CB371',
        borderTopRightRadius: 380 / 2,
        marginLeft: 2.5,
        marginBottom: 2.5
    }
})

export default GreenButton;
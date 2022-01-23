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

export const yellowSound = new Sound('yellow.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
    }
})

const YellowButton = () => {

    const disableButton = useSelector((state: RootState) => state.game.disableButton)
    const flash = useSelector((state: RootState) => state.game.flash)

    const dispatch = useDispatch()

    const onClickHandler = (): void => {
        dispatch(gameActions.setPlayerSelect(4))
        dispatch(gameActions.setToggleGameEffect())
    }

    return (
        <TouchableHighlight
            activeOpacity={0.8}
            underlayColor="#F8FF00"
            touchSoundDisabled
            disabled={disableButton}
            style={[styles.button, { backgroundColor: flash === 4 ? "#F8FF00" : "#F0E68C" }]}
            onPress={() => {
                yellowSound.stop()
                onClickHandler()
                yellowSound.play()
            }}>
            <Text />
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: '#F0E68C',
        borderBottomRightRadius: 380 / 2,
        marginLeft: 2.5,
        marginTop: 2.5
    }
})

export default YellowButton;

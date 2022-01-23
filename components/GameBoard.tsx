import React, { useEffect, useState } from "react";
import {
    Dimensions,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { gameActions } from "../store/gameSlice";
import { uiActions } from "../store/uiSlice";
import BlueButton, { blueSound } from './BlueButton';
import GreenButton, { greenSound } from './GreenButton';
import RedButton, { redSound } from './RedButton';
import YellowButton, { yellowSound } from './YellowButton';

const soundArray: any[] = [blueSound, greenSound, redSound, yellowSound]

let mainSequence: number[] = []
let copySequence: number[] = []

const GameBoard = () => {

    const gameScreenEffect = useSelector((state: RootState) => state.game.gameScreenEffect)
    const playerSelect = useSelector((state: RootState) => state.game.playerSelect)
    const score = useSelector((state: RootState) => state.game.score)

    const dispatch = useDispatch()

    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [simonTurn, setSimonTurn] = useState<boolean>(false)

    useEffect(() => {
        if (isPlaying) {
            if (simonTurn) {
                simonPlay()
            }
        }
    }, [simonTurn])

    useEffect(() => {
        if (isPlaying) {
            playerPlay()
        }
    }, [gameScreenEffect])

    const onPlayHandler = (): void => {
        setIsPlaying(true)
        setSimonTurn(true)
    }

    const generateRandomNum = (max: number): number => {
        return Math.floor(Math.random() * max + 1)
    }

    const simonPlay = async (): Promise<void> => {

        const randomNum = generateRandomNum(4)

        mainSequence.push(randomNum)
        copySequence = [...mainSequence]

        for (let i = 0; i < mainSequence.length; i++) {

            dispatch(gameActions.setFlashButton(mainSequence[i]))

            switch (mainSequence[i]) {
                case 1: {
                    soundArray[0].stop()
                    soundArray[0].play()
                    break;
                }
                case 2: {
                    soundArray[1].stop()
                    soundArray[1].play()
                    break;
                }
                case 3: {
                    soundArray[2].stop()
                    soundArray[2].play()
                    break;
                }
                case 4: {
                    soundArray[3].stop()
                    soundArray[3].play()
                    break;
                }
            }

            await delay(400)

            dispatch(gameActions.setFlashButton(0))

            await delay(400)
        }

        setSimonTurn(false)
        dispatch(gameActions.setDisableButton(false))
    }

    const playerPlay = async (): Promise<void> => {
        if (playerSelect === copySequence.splice(0, 1)[0]) {

            if (copySequence.length === 0) {
                dispatch(gameActions.setDisableButton(true))
                dispatch(gameActions.setScore())

                await delay(400)

                setSimonTurn(true)
            }

        } else {
            dispatch(uiActions.setModalVisible(true))
            resetGame()
        }
    }

    const resetGame = (): void => {
        setIsPlaying(false)
        setSimonTurn(false)
        dispatch(gameActions.setDisableButton(true))
        mainSequence = []
        copySequence = []
    }

    const delay = (ms: number): Promise<void> => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <BlueButton />
                <GreenButton />
            </View>
            <View style={styles.buttons}>
                <RedButton />
                <YellowButton />
            </View>
            <View style={styles.playButton}>
                <TouchableOpacity
                    disabled={isPlaying}
                    activeOpacity={0.6}
                    onPress={onPlayHandler}
                    touchSoundDisabled
                >
                    <Text style={styles.playBtnTitle}>
                        {isPlaying ? score : 'Start'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        width: windowWidth - 20,
        height: windowWidth - 20,
        borderRadius: Math.round(windowWidth + windowHeight) / 2,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },

    buttons: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row'
    },

    playButton: {
        backgroundColor: '#000',
        position: 'absolute',
        width: windowWidth * 0.4,
        height: windowWidth * 0.4,
        borderRadius: Math.round(windowWidth + windowHeight) / 2,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    playBtnTitle: {
        fontSize: 25,
        color: '#fff',
        letterSpacing: 3,
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif-medium'
    }
})

export default GameBoard;

import { Container, View, Text, Content, Button } from 'native-base'
import React, { useState, useEffect } from 'react'
import { Dimensions, StyleSheet, Animated } from 'react-native'
import FastImage from 'react-native-fast-image'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import Tts from 'react-native-tts';

import workouts from '../config/data'




export default function StartExercising({ navigation, route }) {

    const { id } = route.params

    console.log(route.params);
    // urutan exercising
    const [index, setIndex] = useState(route.params.index ? route.params.index : 0);
    useEffect(() => {
        setExercise(workout.data[index])

    }, [index])

    const countdown = 10;

    const getRepetitions = ({ repetitions }) => {
        return repetitions.includes(':') ? parseInt(repetitions.split(':')[0] * 60) + parseInt(repetitions.split(':')[1]) : false
    }
    // find workout choosed
    const workout = workouts.beginer.find(w => w.id === id)
    const [exercise, setExercise] = useState(workout.data[index]);
    useEffect(() => {
        const tempRep = getRepetitions(workout.data[index]);
        setRepetitions(tempRep)
        // Set Voice Google
        !start &&
            Tts.speak(`${workout.data[index].title}  
                        ${(tempRep ? tempRep + ' detik' : workout.data[index].repetitions.replace('x', '') + ' kali')}`, {
                androidParams: {
                    KEY_PARAM_PAN: -1,
                    KEY_PARAM_VOLUME: 1,
                    KEY_PARAM_STREAM: 'STREAM_MUSIC',
                },
            })
    }, [exercise])

    const [repetitions, setRepetitions] = useState(getRepetitions(exercise));
    const [start, setStart] = useState(false);
    // delay for start exercise
    const [wait, setWait] = useState(true);

    // starting exercisee
    const starting = () => {
        setStart(true);
        setWait(true);
        Tts.speak('Mulai', {
            androidParams: {
                KEY_PARAM_PAN: -1,
                KEY_PARAM_VOLUME: 1,
                KEY_PARAM_STREAM: 'STREAM_MUSIC',
            },
        })
        setTimeout(() => setWait(false), 1000);
    }

    // next exercise
    const nextHandler = () => {
        setStart(false);
        setWait(true);
        setIndex(index + 1);
    }


    const CountdownStart = () => {
        return (
            <View style={{ alignSelf: 'center' }}>
                {wait ? (
                    <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#2273f5' }}>Mulai !</Text>
                ) : repetitions ?
                        // Repetitions dengan detik
                        (
                            <React.Fragment>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20, marginTop: 110, textAlign: 'center' }}>{exercise.title}</Text>
                                <View style={{ alignSelf: 'center' }}>
                                    <CountdownCircleTimer
                                        strokeWidth={5}
                                        size={100}
                                        isPlaying
                                        duration={repetitions}
                                        onComplete={() => {
                                            Tts.speak('Selesai', {
                                                androidParams: {
                                                    KEY_PARAM_PAN: -1,
                                                    KEY_PARAM_VOLUME: 1,
                                                    KEY_PARAM_STREAM: 'STREAM_MUSIC',
                                                },
                                            })
                                            nextHandler();
                                        }}
                                        colors='#2273f5'
                                    >
                                        {
                                            ({ remainingTime, animatedColor }) => (
                                                <Animated.Text style={{ color: 'black', fontSize: 60, fontWeight: 'bold' }}>
                                                    {remainingTime}
                                                </Animated.Text>
                                            )
                                        }
                                    </CountdownCircleTimer >
                                </View>

                                <Button style={{ alignSelf: 'center', marginTop: 10 }} transparent onPress={() => nextHandler()}><Text style={{ fontWeight: 'bold', fontSize: 15, color: '#2273f5', }}>Melewati</Text></Button>


                            </React.Fragment>
                        ) :
                        // Repetitions dengan kali
                        (
                            <React.Fragment>
                                <Text style={{ fontSize: 17, textAlign: 'center', fontWeight: 'bold', marginBottom: 20 }}>{exercise.title}</Text>
                                <Text style={{ fontSize: 45, textAlign: 'center', fontWeight: 'bold', marginBottom: 10, color: '#2273f5' }}>{exercise.repetitions}</Text>
                                <Button style={{ alignSelf: 'center' }} transparent onPress={() => nextHandler()}><Text style={{ fontWeight: 'bold', fontSize: 20, color: '#2273f5', }}>Selesai</Text></Button>

                            </React.Fragment>
                        )
                }
            </View >
        )
    }

    const styles = StyleSheet.create({
        container: {
            display: "flex",
        },
        title: {
            alignSelf: "center",
            marginTop: 60,
            fontSize: 18,
            fontWeight: 'bold',
            color: '#6a6a6b',

        },
        gif: {
            alignSelf: 'center',
            marginTop: Dimensions.get('window').height * 13 / 100 + (start ? 0 : -60),
            width: 200,
            height: 200
        }
    })

    return (
        // <ScrollView>
        <Container style={styles.container}>
            {!start && (<Text style={styles.title}>{exercise.title}</Text>)}
            < FastImage source={exercise.gif} style={styles.gif}
                resizeMode={FastImage.resizeMode.contain} />
            <Container style={{ display: 'flex', justifyContent: 'center' }}>
                {!start && (
                    <View style={{ alignSelf: 'center' }}>
                        <CountdownCircleTimer

                            strokeWidth={5}
                            size={100}
                            isPlaying
                            duration={countdown}

                            onComplete={() => {
                                setRepetitions(getRepetitions(exercise))
                                starting();
                            }
                            }
                            colors='#2273f5'
                        >
                            {({ remainingTime, animatedColor }) => (
                                <Animated.Text style={{ color: 'black', fontSize: 60, fontWeight: 'bold' }}>
                                    {remainingTime}
                                </Animated.Text>
                            )}
                        </CountdownCircleTimer>
                        <Button style={{ alignSelf: 'center', marginTop: 20 }} transparent onPress={() => starting()} ><Text style={{ fontWeight: 'bold', color: '#2273f5', }}>Melewati</Text></Button>
                    </View>
                )}
                {(start && exercise) && (
                    <CountdownStart />
                )}
            </Container>
        </Container>
        // </ScrollView>
    )
}


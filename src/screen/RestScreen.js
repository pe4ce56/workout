import React, { useEffect } from 'react';
import { BackHandler } from 'react-native'
import CountDown from 'react-native-countdown-component';
import Tts from 'react-native-tts';
import { Block, Button, TextView } from '../components';
import { Colors } from '../config/colors';

const RestScreen = ({ navigation, route }) => {

    useEffect(() => {
        Tts.speak('Beristirahatlah', {
            androidParams: {
                KEY_PARAM_PAN: -1,
                KEY_PARAM_VOLUME: 1,
                KEY_PARAM_STREAM: 'STREAM_MUSIC',
            }
        })
        BackHandler.addEventListener('hardwareBackPress', () => true)
        return () =>
            BackHandler.removeEventListener('hardwareBackPress', () => true)
    }, [])

    const handleNext = () => {
        navigation.goBack();
        route.params.onGoBack(true);
    }


    return (
        <Block block color={Colors.dark.bg}>
            <TextView color={Colors.secondary} h3 center style={{ marginTop: 90 }}>Beristirahatlah</TextView>
            <CountDown
                until={20}
                onFinish={handleNext}
                size={60}
                digitStyle={{ backgroundColor: Colors.yellow }}
                timeToShow={['M', 'S']}
                timeLabels={{ m: null, s: null }}
                style={{ marginTop: 40 }}
            />
            <Button onPress={handleNext} ><TextView color={Colors.yellow} h3 center style={{ marginTop: 40 }}>Lewati</TextView></Button>
        </Block>
    )
}

export default RestScreen
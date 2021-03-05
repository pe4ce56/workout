import React, {useCallback, useEffect, useState} from 'react';
import {Block, Button, TextView} from '../components';
import Icon from 'react-native-vector-icons/Feather';
import {Alert, Dimensions, Modal, StyleSheet} from 'react-native';
import CountDown from 'react-native-countdown-component';
import Tts from 'react-native-tts';

import workouts from '../config/data';
import {Colors} from '../config/colors';
import FastImage from 'react-native-fast-image';
import {ScrollView} from 'react-native-gesture-handler';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const ExercisingScreen = ({navigation, route}) => {
  const [modal, setModal] = useState(false);

  // start exercise
  const {id} = route.params;
  const nameOfWorkout = workouts.beginer.find((w) => w.id === id).title;
  useEffect(() => {
    speak(`Latihan ${nameOfWorkout}`);
  }, []);

  const [speaker, setSpeaker] = useState(true);
  const speak = (string = '') => {
    // Tts.setDefaultPitch(1.4);
    // Tts.setDefaultRate(1.1, true);
    Tts.speak(string, {
      androidParams: {
        KEY_PARAM_PAN: -1,
        KEY_PARAM_VOLUME: speaker ? 1 : 0,
        KEY_PARAM_STREAM: 'STREAM_MUSIC',
      },
    });
  };

  const getRepetitions = ({repetitions}) => {
    return repetitions.includes(':')
      ? parseInt(repetitions.split(':')[0] * 60) +
          parseInt(repetitions.split(':')[1])
      : 0;
  };

  const [index, setIndex] = useState(0);
  const [workout, setWorkout] = useState(
    workouts.beginer.find((w) => w.id === id).data[index],
  );
  const [repetitions, setRepetitions] = useState(null);
  const [delay, setDelay] = useState(true);
  const [start, setStart] = useState(false);
  
  // set exercise next
  useEffect(() => {
    setWorkout(workouts.beginer.find((w) => w.id === id).data[index]);
  }, [index]);

  // set repetitions next
  useEffect(() => {
    setRepetitions(getRepetitions(workout));
    if (index !== 0) {
      const tempRep = getRepetitions(workout);
      navigation.navigate('Rest', {
        onGoBack: (data) => {
          speak(
            `${workout.title} ${
              tempRep
                ? tempRep + ' detik'
                : workout.repetitions.replace('x', '') + ' kali'
            }`,
          );
          // speak the title and set delay to countdown
          setDelay(true);
          setStart(false);
        },
      });
    }
  }, [workout]);

  const handleDelay = () => {
    speak(
      `${workout.title} ${
        repetitions
          ? repetitions + ' detik'
          : workout.repetitions.replace('x', '') + ' kali'
      }`,
    );
    setDelay(true);
  };

  // start the exercising
  const starting = () => {
    speak('mulai');
    setDelay(false);
    setStart(true);
  };

  const handleNext = () => {
    // latihan habis
    if (index == workouts.beginer.find((w) => w.id === id).data.length - 1) {
      navigation.navigate('End');
      return;
    }
    // set stop
    setStart(false);
    // next index
    setIndex(index + 1);
    speak(`selesai`);
  };

  const WaitingTime = () => {
    return (
      <CountDown
        until={7}
        start={true}
        onFinish={starting}
        size={30}
        digitStyle={{backgroundColor: Colors.yellow}}
        timeToShow={['M', 'S']}
        timeLabels={{m: null, s: null}}
        style={{marginTop: 40}}
        onChange={(val) => val > 1 && val < 6 && speak(`${val - 1}`)}
      />
    );
  };

  const StartView = () => {
    return (
      <React.Fragment>
        {repetitions ? (
          <CountDown
            until={repetitions}
            onFinish={handleNext}
            size={30}
            digitStyle={{backgroundColor: Colors.yellow}}
            timeToShow={['M', 'S']}
            timeLabels={{m: null, s: null}}
            style={{marginTop: 40}}
            running={start}
            onChange={(val) => val > 1 && val < 6 && speak(`${val - 1}`)}
          />
        ) : (
          <TextView
            style={{
              fontSize: 50,
              fontWeight: 'bold',
              fontFamily: 'Roboto',
              marginTop: 40,
            }}
            color={Colors.yellow}
            center>
            {workout.repetitions}
          </TextView>
        )}

        <Button
          onPress={start ? handleNext : handleDelay}
          width="60%"
          height={60}
          padding={0}
          color={Colors.yellow}
          style={{
            marginTop: 30,
            borderRadius: 12,
            display: 'flex',
            alignSelf: 'center',
            justifyContent: 'center',
            shadowColor: Colors.yellow,
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10,
          }}>
          <TextView color={Colors.bg} center h3>
            {start ? 'Selesai' : 'Mulai'}
          </TextView>
        </Button>
      </React.Fragment>
    );
  };

  const ModalView = () => {
    return (
      <Modal animationType="slide" transparent={true} visible={modal}>
        <Block
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -H / 5,
          }}>
          <Block style={styles.modalView}>
            <Icon name="x-circle" color={Colors.danger} size={140} />
            <TextView
              style={{
                marginTop: 20,
                marginBottom: 20,
                fontSize: 30,
                color: '#404040',
                fontWeight: 'bold',
              }}>
              Kamu Yakin?
            </TextView>
            <TextView
              style={{
                textAlign: 'center',
                fontSize: 26,
                color: '#757575',
              }}>
              Apakah kamu yakin untuk keluar dari latihan ini?
            </TextView>
            <Block
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                marginTop: 30,
              }}>
              <Button
                style={styles.modalButton}
                color={Colors.secondary}
                onPress={() => setModal(false)}>
                <TextView color={Colors.white} size={20}>
                  Batal
                </TextView>
              </Button>
              <Button
                style={styles.modalButton}
                color={Colors.danger}
                onPress={() => {
                  setModal(false);
                  navigation.goBack();
                }}>
                <TextView color={Colors.white} size={20}>
                  Keluar
                </TextView>
              </Button>
            </Block>
          </Block>
        </Block>
      </Modal>
    );
  };
  const toggleSpeaker = useCallback(() => {
    setSpeaker(!speaker);
  }, [speaker]);

  return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ModalView />
        <Button
          style={{position: 'absolute', left: 70 - W / 10, top: 20}}
          onPress={() => setModal(true)}>
          <Block>
            <Icon name="arrow-left" size={30} style={{fontWeight: '300'}} />
          </Block>
        </Button>
        {/* <Button
          onPress={toggleSpeaker}
          style={{position: 'absolute', right: 80 - W / 10, top: 40}}>
          {speaker ? (
            <Icon name="volume-2" size={30} style={{fontWeight: '300'}} />
          ) : (
            <Icon name="volume-x" size={30} style={{fontWeight: '300'}} />
          )}
        </Button> */}

        <Block
          padding={10}
          style={{
            position: 'absolute',
            right: 0,
            left: 0,
            top: 120 - H / 10,
            display: 'flex',
          }}>
          <TextView h4 center style={{marginBottom: 10}}>
            Latihan {nameOfWorkout}
          </TextView>
          <FastImage
            source={workout.gif}
            style={{
              width: '70%',
              height: 300,
              resizeMode: 'cover',
              overflow: 'hidden',
              borderRadius: 20,
              alignSelf: 'center',
            }}
          />

          <TextView
            style={{fontSize: 50, fontWeight: 'bold', marginTop: 30}}
            center>
            {workout.title}
          </TextView>
          {delay? <WaitingTime /> : <StartView />}
      
        </Block>

        {/* <TextView style={{ position: 'absolute', top: H / 6, alignSelf: 'center', fontSize: 200, color: '#000' }}>{countdown}</TextView> */}
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 7,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  modalButton: {
    marginHorizontal: 10,
    borderRadius: 3,
    width: 130,
    paddingVertical: 10,
    display: 'flex',
    alignItems: 'center',
  },
});

export default ExercisingScreen;

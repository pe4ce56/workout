import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  View,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {Block, Button, TextView} from '../components';
import FastImage from 'react-native-fast-image';

import workouts from '../config/data';
import {Colors} from '../config/colors';
const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    padding: 10,
  },
});

const WorkoutsScreen = ({navigation, route}) => {
  const {id} = route.params;
  const workout = workouts.beginer.find((w) => w.id === id);

  return (
    <Block block color={Colors.white} style={{position:"relative"}} >
      <ScrollView style={{marginBottom:80}}>
        <Button onPress={() => navigation.goBack()}>
          <Block style={{padding: 10}}>
            <Icon name="arrow-left" size={30} style={{fontWeight: '300'}} />
          </Block>
        </Button>
        <Block padding={30} style={{marginTop: -20}}>
          <TextView h5 style={{marginBottom: 10}}>
            Latihan {workout.title}
          </TextView>
          <Image
            source={workout.img}
            style={{
              width: '100%',
              height: 300,
              resizeMode: 'cover',
              overflow: 'hidden',
              borderRadius: 17,
            }}
          />
        </Block>
        <Block
          color={Colors.white}
          
          padding={30}>
          <TextView h5 style={{marginBottom: 10}}>
            {workout.data.length} Exercise
          </TextView>
          {workout.data.map((exercise, index) => (
            <Block
              key={index}
              style={{
                backgroundColor: Colors.white,
                marginBottom: 15,
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 1.41,

                elevation: 2,
              }}>
              <Block style={styles.row}>
                <FastImage
                  source={exercise.gif}
                  style={{
                    width: 90,
                    height: 90,
                    backgroundColor: Colors.secondary,
                    borderRadius: 10,
                  }}
                  resizeMode={FastImage.resizeMode.contain}
                />
                <Block style={{marginLeft: 26, flexGrow: 1,flex: 1,  }}>
                  <TextView h6 >{exercise.title}</TextView>
                  <TextView
                    h6
                    color={Colors.secondary}
                    style={{fontWeight: 'normal'}}>
                    {exercise.repetitions}
                  </TextView>
                </Block>
              </Block>
            </Block>
          ))}
        </Block>
      </ScrollView>
      <Block
        style={{
          position: 'absolute',
          bottom: 10,
          left: 30,
          right: 30,
        }}>
        <Button
          onPress={() => navigation.navigate('Exercising', {id: id})}
          width="100%"
          height={60}
          padding={0}
          color={Colors.yellow}
          style={{
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
            Mulai
          </TextView>
        </Button>
      </Block>
    </Block>
  );
};

export default WorkoutsScreen;

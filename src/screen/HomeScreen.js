import React from 'react';
import {
  View,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Block, Button, TextView} from '../components';
import {Colors} from '../config/colors';
import workouts from '../config/data';
const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const styles = StyleSheet.create({
  content: {
    padding: 24,
    marginBottom: 50,
    borderRadius: 21,
    height: 300,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
});

const TodayTask = () => {
  return (
    <React.Fragment>
      <TextView h6 style={{marginBottom: 10}}>
        Tantangan Harian
      </TextView>
      <Block style={styles.content} color={Colors.white}>
        <Block style={styles.row}>
          <Image
            source={require('../../assets/image/ilustration1.jpg')}
            style={{
              width: 100,
              height: 100,
              resizeMode: 'cover',
              overflow: 'hidden',
            }}
          />
          <Block>
            <TextView h4 style={{marginLeft: 10, marginTop: 10}}>
              Hari Ke 1
            </TextView>
            <TextView h6 style={{marginLeft: 10, marginTop: 1}}>
              Latihan Otot Perut
            </TextView>
          </Block>
          <Block
            color={Colors.yellow}
            width={120}
            height={40}
            style={{
              borderRadius: 15,
              marginLeft: 'auto',
              marginTop: 10,
              padding: 5,
              ...styles.row,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon
              name="check"
              color={Colors.white}
              size={21}
              style={{marginRight: 10}}
            />
            <TextView color={Colors.white} h5>
              Selesai
            </TextView>
          </Block>
        </Block>
        <Block
          style={{...styles.row, justifyContent: 'space-around', padding: 10}}>
          <Block>
            <TextView
              style={{
                textAlign: 'center',
                fontSize: 60,
                fontWeight: 'bold',
                color: Colors.yellow,
              }}>
              7
            </TextView>
            <TextView
              style={{
                textAlign: 'center',
                color: Colors.secondary,
                fontSize: 30,
              }}>
              Exercise
            </TextView>
          </Block>
          <Block>
            <TextView
              style={{
                textAlign: 'center',
                fontSize: 60,
                fontWeight: 'bold',
                color: Colors.yellow,
              }}>
              30
            </TextView>
            <TextView
              style={{
                textAlign: 'center',
                color: Colors.secondary,
                fontSize: 30,
              }}>
              kkal
            </TextView>
          </Block>
          <Block>
            <TextView
              style={{
                textAlign: 'center',
                fontSize: 60,
                fontWeight: 'bold',
                color: Colors.yellow,
              }}>
              4-6
            </TextView>
            <TextView
              style={{
                textAlign: 'center',
                color: Colors.secondary,
                fontSize: 30,
              }}>
              Menit
            </TextView>
          </Block>
        </Block>
      </Block>
    </React.Fragment>
  );
};

const HomeScreen = ({navigation}) => {
  return (
    <ParallaxScrollView
      style={{borderRadius: 10}}
      renderBackground={() => (
        <Image
          style={{
            height: 700,
            width: '100%',
            resizeMode: 'cover',
            overflow: 'hidden',
            // flex: 1,
          }}
          source={require('../../assets/image/main.jpg')}
        />
      )}
      // renderStickyHeader={() => (
      //     <Block style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      //         <TextView style={{ textAlign: 'center' }} h6>Workout</TextView>
      //     </Block>
      // )}
      stickyHeaderHeight={40}
      backgroundColor={Colors.bg}
      contentBackgroundColor={Colors.white}
      parallaxHeaderHeight={400}>
      <Block block padding={30} color={Colors.bg}>
        <TodayTask />

        <TextView h6 style={{marginBottom: 10}}>
          Program Latihan
        </TextView>

        {workouts.beginer.map((workout, index) => (
          <Button
            key={index}
            onPress={() => navigation.navigate('Workouts', {id: workout.id})}>
            <Block style={{height: 170, marginBottom: 10}} color={Colors.white}>
              <ImageBackground
                key={index}
                source={workout.img}
                style={{
                  height: 170,
                  width: null,
                  resizeMode: 'cover',
                  overflow: 'hidden',
                  flex: 1,
                  borderRadius: 10,
                  padding: 20,
                  justifyContent: 'flex-end',
                }}>
                <TextView style={{color: Colors.white, marginLeft: 'auto'}} h5>
                  {workout.title}
                </TextView>
              </ImageBackground>
            </Block>
          </Button>
        ))}
      </Block>
    </ParallaxScrollView>
  );
};

export default HomeScreen;

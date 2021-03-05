import React from 'react';
import {StyleSheet} from 'react-native';
import {Block, Button, TextView} from '../components';

import {Colors} from '../config/colors';

const styles = StyleSheet.create({
  box: {
    width: 130,
    height: 130,
    marginLeft: 10,
    marginRight: 10,
    padding: 15,
  },
});

const EndExercisingScreen = ({navigation}) => {
  const handleExit = () => {
    navigation.navigate('Home');
  };
  return (
    <Block block color={Colors.dark.bg}>
      <TextView color={Colors.secondary} h3 center style={{marginTop: 90}}>
        Selesai
      </TextView>
      <Block direction="row" style={{justifyContent: 'center', marginTop: 20}}>
        <Block style={styles.box} color={Colors.yellow}>
          <TextView
            color={Colors.dark}
            style={{
              fontWeight: 'bold',
            }}
            h1
            center>
            8
          </TextView>
          <TextView
            color={Colors.dark}
            style={{
              fontSize: 25,
            }}
            center>
            Exercise
          </TextView>
        </Block>
        <Block style={styles.box} color={Colors.yellow}>
          <TextView
            color={Colors.dark}
            style={{
              fontWeight: 'bold',
            }}
            h1
            center>
            8
          </TextView>
          <TextView
            color={Colors.dark}
            style={{
              fontSize: 25,
              fontWeight: '500',
            }}
            center>
            KKAL
          </TextView>
        </Block>
        <Block style={styles.box} color={Colors.yellow}>
          <TextView
            color={Colors.dark}
            style={{
              fontWeight: 'bold',
            }}
            h1
            center>
            30
          </TextView>
          <TextView
            color={Colors.dark}
            style={{
              fontSize: 25,
            }}
            center>
            Menit
          </TextView>
        </Block>
      </Block>
      <Button onPress={handleExit}>
        <TextView color={Colors.yellow} h3 center style={{marginTop: 40}}>
          Kembali
        </TextView>
      </Button>
    </Block>
  );
};
export default EndExercisingScreen;

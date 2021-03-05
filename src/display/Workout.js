import { Body, Button, Container, Content, Icon, Left, List, ListItem, Right, Switch, Text, Thumbnail } from 'native-base'
import React, { useState } from 'react'
import { StyleSheet, ImageBackground, Image, StatusBar } from 'react-native'
import FastImage from 'react-native-fast-image'


import workouts from '../config/data';


export default function Workout({ navigation, route }) {
    const { id } = route.params;
    const workout = workouts.beginer.find(w => w.id === id);
    return (
        <Container>
            <Content contentContainerStyle={{ flexGrow: 1 }} >
                <ImageBackground source={workout.img} style={{
                    height: 140,
                    width: null,
                    resizeMode: "cover",
                    // overflow: 'hidden',
                    // flex: 1,
                }} >
                    <Text style={styles.type}>{workout.title}</Text>
                </ImageBackground>

                <List >
                    {workout.data.map((stomatch, index) => (
                        <ListItem key={index} thumbnail style={styles.list}>
                            <Left style={styles.left}>
                                <FastImage source={stomatch.gif} style={{ width: 80, height: 80 }}

                                    resizeMode={FastImage.resizeMode.contain} />
                            </Left>
                            <Body style={styles.body}>
                                <Text style={styles.title}>{stomatch.title}</Text>
                                <Text style={styles.repetitions}>{stomatch.repetitions}</Text>
                            </Body>
                        </ListItem>
                    ))}
                </List>
            </Content>
            <Button style={{ marginTop: 10, marginBottom: 20, width: 400, height: 50, alignSelf: "center", backgroundColor: '#4592ff' }} block rounded onPress={() => navigation.navigate("StartExercise", { id: id })}>
                <Text >Mulai Latihan</Text>
            </Button>
        </Container >
    )
}

const styles = StyleSheet.create({

    type: {
        position: 'relative',
        top: 70,
        left: 30,
        fontSize: 26,
        fontWeight: 'bold',
        color: '#eaeaea',
    },
    list: {
        borderBottomWidth: 1,
        height: 110,
    },
    left: {
        position: "relative",
        left: 50
    },
    body: {
        position: "relative",
        left: 100,
        top: 5,
        borderBottomWidth: 0
    },
    title: {
        fontSize: 17,
        marginBottom: 10,
        fontWeight: "bold"
    },
    repetitions: {
        fontSize: 15,
        marginBottom: 10,
        color: '#696969',
        fontWeight: '600'
    }
});
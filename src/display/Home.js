import React, { useState } from 'react'
import { StyleSheet, ImageBackground, StatusBar, ScrollView } from 'react-native'
import { Body, Button, Card, CardItem, Container, Content, Left, Text, Thumbnail } from 'native-base'


import workouts from '../config/data';


export default function Home({ navigation }) {

    return (
        <ScrollView>
            <Container style={styles.container}>
                <StatusBar backgroundColor="#2273f5"></StatusBar>
                <Text style={styles.listTitle}>PEMULA</Text>
                {workouts.beginer.map((workout, index) => (
                    <Card key={index} style={styles.card}>
                        <CardItem cardBody button onPress={() => navigation.navigate("Workout", { id: workout.id })} >
                            <ImageBackground source={workout.img} style={styles.ImageBackground}>
                                <Text style={styles.title} >{workout.title}</Text>
                            </ImageBackground>
                        </CardItem>
                    </Card>
                ))
                }
            </Container >
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: 15,
    },
    listTitle: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 5,
    },
    card: {
        borderRadius: 4,
    },
    ImageBackground: {
        height: 130,
        width: null,
        resizeMode: "cover",
        overflow: 'hidden',
        flex: 1,
        borderRadius: 5
    },
    title: {
        color: '#eaeaea',
        fontSize: 25,
        fontWeight: 'bold',
        position: 'absolute',
        top: 5,
        left: 16
    }
})




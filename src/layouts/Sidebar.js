import { Body, Button, Container, Content, Footer, FooterTab, Header, Right, Title, Text, List, ListItem } from 'native-base';
import React from 'react'
import { useNavigation } from '@react-navigation/native';


export default function Sidebar() {

    return (
        <Container>
            <Content padder>
                <List>
                    <ListItem >
                        <Text>Home</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Aaron Bennet</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Ali Connors</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>B</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Bradley Horowitz</Text>
                    </ListItem>
                </List>
            </Content>
        </Container>
    );
}
import React from 'react';
import { View } from 'react-native';
import { Card, Drawer, CardItem, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

import Sidebar from './Sidebar';

export default class HomeScreen extends Component {

    closeDrawer() {
        this._drawer._root.close()
    };
    openDrawer() {
        this._drawer._root.open()
    };

    render() {
        return (
            <Drawer
                ref={(ref) => { this._drawer = ref; }}
                content={<SideBar navigator={this.navigator} />}
                onClose={() => this.closeDrawer()} >
                <Container>
                    <Header>
                        <Left>
                            <Button transparent onPress={() => this.openDrawer()}>
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Tutorial Drawer</Title>
                        </Body>
                        <Right />
                    </Header>
                    <Content padder>
                        <Card>
                            <CardItem header>
                                <Text>Kumpulan Program Inkubator dan Akselerator Startup di Indonesia</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>
                                        Di samping investor, keberadaan program inkubasi dan akselerator merupakan faktor penggerak tumbuhnya ekosistem startup teknologi . Meski secara garis besar berbeda, kedua hal tersebut memiliki tujuan yang sama, yakni mempercepat perkembangan startup, terutama dari segi kesiapan model bisnis, penyempurnaan konsep produk, dan lain-lain.
                                </Text>
                                </Body>
                            </CardItem>
                            <CardItem footer>
                                <Text>Tech in Asia</Text>
                            </CardItem>
                        </Card>
                    </Content>
                    <Footer>
                        <FooterTab>
                            <Button full>
                                <Text>Footer</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </Drawer>
        );
    }
}
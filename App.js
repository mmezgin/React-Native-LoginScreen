import React from 'react';
import { StyleSheet, TouchableHighlight, Text, View } from "react-native";
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import { Dimensions } from "react-native";
import { Ionicons, Entypo } from '@expo/vector-icons';
import GradientButton from 'react-native-gradient-buttons';


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default class MyComponent extends React.Component {
    state = {
        text: ''
    };
    render() {
        return (
            <View >
                <View style={styles.texts}>
                    <Text h1 style={styles.t1} >Welcome,</Text>
                    <Text h1 style={styles.t2} >Sign in to continue!</Text>
                </View>

                <View style={styles.inputs}>
                    <TextInput style={styles.i1}
                        label='Email ID'
                        mode='outlined'
                        underlineColor='#e8338b'
                        selectionColor='#e8338b'
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                    />
                    <TextInput
                        label='Password'
                        value={this.state.tex2t}
                        mode='outlined'
                        onChangeText={text2 => this.setState({ text2 })}
                    />
                </View>
                <View style={styles.t3}>
                    <Text style={{ fontWeight: 'bold' }} >Forgot Password?</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <View >
                        <GradientButton style={styles.buttons}
                            style={{ marginVertical: 8 }}
                            text="Login"
                            textStyle={{ fontSize: 20 }}
                            gradientBegin="#fc03a9"
                            gradientEnd="#f5ba57"
                            gradientDirection="diagonal"
                            height={screenHeight * 0.07}
                            width={screenWidth * 0.8}
                            radius={15}
                            impact
                            impactStyle='Light'
                        />
                    </View>

                    <View>
                        <TouchableHighlight style={[styles.buttons, styles.btn2]}>
                            <Text style={{ fontWeight: 'bold' }}> <Entypo name='facebook' size={16} color='blue'></Entypo>  Connect with Facebook </Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.t4}>
                    <Text h1 style={styles.t5}>I'm a new user.<Text h1 style={{ color: '#c60a8f', fontWeight: 'bold' }}>Sign up</Text> </Text>
                </View>


            </View>
        );

    }
}

const styles = StyleSheet.create({

    i1: {
        marginBottom: screenHeight * 0.02
    },
    inputs: {
        marginHorizontal: screenWidth * 0.08,
        justifyContent: 'space-between'
    },
    texts: {

        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        marginTop: screenHeight * 0.1,
        marginLeft: screenWidth * 0.09,
        marginBottom: screenHeight * 0.12


    },
    t1: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
    },
    t2: {
        color: 'gray',
        fontSize: 20,
    },
    t3: {
        alignItems: 'flex-end',
        marginTop: 0,
        marginBottom: screenHeight * 0.05,
        marginRight: screenWidth * 0.1
    },
    t4: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: screenHeight * 0.23
    },
    t5: {

        fontWeight: 'bold',

    },

    buttonContainer: {

        justifyContent: 'center',
        alignItems: 'center'

    },
    buttons: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'space-between',
        width: screenWidth * 0.8,
        height: screenHeight * 0.07
    },

    btn1: {
        marginBottom: screenHeight * 0.001,

    },
    btn2: {
        borderRadius: 15,
    }

});
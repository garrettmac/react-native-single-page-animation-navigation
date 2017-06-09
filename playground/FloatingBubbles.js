import React, { Component } from 'react';
import { StyleSheet, View,Text, Image, Animated, Dimensions } from 'react-native';
import Interactable from 'react-native-interactable';

const widthFactor = Dimensions.get('window').width / 375;
const heightFactor = (Dimensions.get('window').height - 75) / 667;

const showSecondFace = true;
const showThirdFace = true;
const showFourthFace = true;
export default class FloatingBubbles extends Component {
  constructor(props) {
    super(props);
    this._deltaX = new Animated.Value(0);
    this._deltaY = new Animated.Value(0);
    this._face1Scale = new Animated.Value(1);
    this._face2Scale = new Animated.Value(1);
    this._face3Scale = new Animated.Value(1);
    this._face4Scale = new Animated.Value(1);
    this.state={showTimer:false,secondsRemaining:3}
    this.tick=this.tick.bind(this)
  }
  tick(){
    // const {secondsRemaining} = this.state
    this.setState({secondsRemaining: this.state.secondsRemaining - 1});
    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval);
    }
  }
  componentDidMount() {
    // this.setState({ secondsRemaining: this.props.secondsRemaining });
    // this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const{showTimer}=this.state
    return (
      <View style={styles.container}>

          {!showTimer ? false :
        <Text style={{fontSize: 20,textAlign: "center",margin: 10,}}> {this.state.secondsRemaining}</Text>
          }
        <View style={[styles.frame,{borderWidth:2}]}>
          <Animated.Image
            source={{uri:"https://rawgit.com/wix/react-native-interactable/master/real-life-example/img/chatheads-delete.png"}}
            style={[styles.marker, {top: 200*heightFactor}, {
              opacity: this._deltaY.interpolate({
                inputRange: [-10*heightFactor, 50*heightFactor],
                outputRange: [0, 1],
                extrapolateLeft: 'clamp',
                extrapolateRight: 'clamp'
              }),
              transform: [{
                translateX: this._deltaX.interpolate({
                  inputRange: [-140*widthFactor, 140*widthFactor],
                  outputRange: [-10, 10]
                })
              },
              {
                translateY: this._deltaY.interpolate({
                  inputRange: [-30*heightFactor, 50*heightFactor, 270*heightFactor],
                  outputRange: [50*heightFactor, -10, 10],
                  extrapolateLeft: 'clamp'
                })
              }]
            }
          ]} />

        </View>
        <View style={styles.frame} pointerEvents='box-none'>
          <Interactable.View
            snapPoints={[
              {x: -140*widthFactor, y: 0}, {x: -140*widthFactor, y: -140*heightFactor}, {x: -140*widthFactor, y:  140*heightFactor}, {x: -140*widthFactor, y: -270*heightFactor}, {x: -140*widthFactor, y: 270*heightFactor},
              {x:  140*widthFactor, y: 0}, {x:  140*widthFactor, y:  140*heightFactor}, {x:  140*widthFactor, y: -140*heightFactor}, {x:  140*widthFactor, y: -270*heightFactor}, {x:  140*widthFactor, y: 270*heightFactor}]}
            dragWithSpring={{tension: 2000, damping: 0.5}}
            gravityPoints={[{x: 0, y: 200*heightFactor, strength: 8000, falloff: 40, damping: 0.5, haptics: true}]}
            onStop={(event) => this.onStopInteraction(event, this._face1Scale)}
            animatedValueX={this._deltaX}
            animatedValueY={this._deltaY}
            initialPosition={{x: -140*widthFactor, y: -270*heightFactor}}>
            <Animated.View style={[styles.head, {
              transform: [{
                scale: this._face1Scale
              }]
            }]}>
              <Image resizeMode="center" style={styles.image} source={{uri:"https://rawgit.com/unitedstates/images/gh-pages/congress/225x275/S000033.jpg"}} />
            </Animated.View>
          </Interactable.View>
        </View>

        {!showSecondFace ? false :
        <View style={styles.frame} pointerEvents='box-none'>
          <Interactable.View
            snapPoints={[
              {x: -140*widthFactor, y: 20*heightFactor}, {x: -140*widthFactor, y: -120*heightFactor}, {x: -140*widthFactor, y:  160*heightFactor}, {x: -140*widthFactor, y: -250*heightFactor}, {x: -140*widthFactor, y: 290*heightFactor},
              {x:  140*widthFactor, y: 20*heightFactor}, {x:  140*widthFactor, y:  160*heightFactor}, {x:  140*widthFactor, y: -120*heightFactor}, {x:  140*widthFactor, y: -250*heightFactor}, {x:  140*widthFactor, y: 290*heightFactor}]}
            dragWithSpring={{tension: 2000, damping: 0.5}}
            gravityPoints={[{x: 0, y: 200*heightFactor, strength: 8000, falloff: 40, damping: 0.5, haptics: true}]}
            onStop={(event) => this.onStopInteraction(event, this._face2Scale)}
            animatedValueX={this._deltaX}
            animatedValueY={this._deltaY}
            initialPosition={{x: 150*widthFactor, y: -250*heightFactor}}>
            <Animated.View style={[styles.head, {
              transform: [{
                scale: this._face2Scale
              }]
            }]}>
              <Image resizeMode="center" style={styles.image} source={{uri:"https://rawgit.com/unitedstates/images/gh-pages/congress/225x275/W000817.jpg"}} />
            </Animated.View>
          </Interactable.View>
        </View>
      }
        {!showThirdFace ? false :
        <View style={styles.frame} pointerEvents='box-none'>
          <Interactable.View
            snapPoints={[
              {x: -140*widthFactor, y: 20*heightFactor}, {x: -140*widthFactor, y: -120*heightFactor}, {x: -140*widthFactor, y:  160*heightFactor}, {x: -140*widthFactor, y: -250*heightFactor}, {x: -140*widthFactor, y: 290*heightFactor},
              {x:  140*widthFactor, y: 20*heightFactor}, {x:  140*widthFactor, y:  160*heightFactor}, {x:  140*widthFactor, y: -120*heightFactor}, {x:  140*widthFactor, y: -250*heightFactor}, {x:  140*widthFactor, y: 290*heightFactor}]}
            dragWithSpring={{tension: 2000, damping: 0.5}}
            gravityPoints={[{x: 0, y: 200*heightFactor, strength: 8000, falloff: 40, damping: 0.5, haptics: true}]}
            onStop={(event) => this.onStopInteraction(event, this._face3Scale)}
            animatedValueX={this._deltaX}
            animatedValueY={this._deltaY}
            initialPosition={{x: 140*widthFactor, y: -50*heightFactor}}>
            <Animated.View style={[styles.head, {
              transform: [{
                scale: this._face3Scale
              }]
            }]}>
              <Image resizeMode="center" style={styles.image} source={{uri:"https://rawgit.com/unitedstates/images/gh-pages/congress/225x275/F000457.jpg"}} />
            </Animated.View>
          </Interactable.View>
        </View>
      }
        {!showFourthFace ? false :
        <View style={styles.frame} pointerEvents='box-none'>
          <Interactable.View
            snapPoints={[
              {x: -140*widthFactor, y: 20*heightFactor}, {x: -140*widthFactor, y: -120*heightFactor}, {x: -140*widthFactor, y:  160*heightFactor}, {x: -140*widthFactor, y: -250*heightFactor}, {x: -140*widthFactor, y: 290*heightFactor},
              {x:  140*widthFactor, y: 20*heightFactor}, {x:  140*widthFactor, y:  160*heightFactor}, {x:  140*widthFactor, y: -120*heightFactor}, {x:  140*widthFactor, y: -250*heightFactor}, {x:  140*widthFactor, y: 290*heightFactor}]}
            dragWithSpring={{tension: 2000, damping: 0.5}}
            gravityPoints={[{x: 0, y: 200*heightFactor, strength: 8000, falloff: 40, damping: 0.5, haptics: true}]}
            onStop={(event) => this.onStopInteraction(event, this._face4Scale)}
            animatedValueX={this._deltaX}
            animatedValueY={this._deltaY}
            initialPosition={{x: 140*widthFactor, y: -250*heightFactor}}>
            <Animated.View style={[styles.head, {
              transform: [{
                scale: this._face4Scale
              }]
            }]}>
              <Image resizeMode="center" style={styles.image} source={{uri:"https://rawgit.com/unitedstates/images/gh-pages/congress/225x275/B001288.jpg"}} />
            </Animated.View>
          </Interactable.View>
        </View>
      }

      </View>
    );
  }
  onStopInteraction(event, scaleValue) {
    const x = event.nativeEvent.x;
    const y = event.nativeEvent.y;
    if (x > -10 && x < 10 && y < 210*heightFactor && y > 190*heightFactor) {
      this.interval = setInterval(this.tick, 1000);
      this.setState({showTimer:true})
if(this.state.secondsRemaining===0){
  clearInterval(this.interval);
  this.setState({showTimer:false,secondsRemaining:3})
  Animated.timing(scaleValue, {toValue: 0, duration: 300}).start();
}
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eff7ff',
  },
  head: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#dddddd',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 3,
    shadowOpacity: 0.8
  },
  image: {
    width: 78,
    height: 78,
    borderRadius: 40,
  },
  frame: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  marker: {
    width: 60,
    height: 60,
    margin: 10,
    position: 'relative'
  },
});

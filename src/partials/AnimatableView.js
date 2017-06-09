/* <AnimatableView */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,} from 'react-native';

import Loading from 'react-native-spinkit';
import _ from 'lodash';
import Swiper from 'react-native-scrollable-tab-view'
import FooterSwipeableSection from '../widgets/FooterSwipeableSection'
var {height, width} = Dimensions.get('window');


import * as Animatable from 'react-native-animatable';

export default class AnimatableView extends Component {
  handleClick = () => {
    const{
    initialPosition,
    moveAnimatedView,
    movedPosition,
    }=this.props
    this.props.updateAnimatedViewPosition();
    this.refs.mainContent.transitionTo((this.props.moveAnimatedView)?movedPosition:initialPosition)
  }
  render() {
    const{
    initialPosition,
    moveAnimatedView,
    movedPosition,
    imageSource,
    imageStyles,
    }=this.props

  /*
          style={[{
            justifyContent:"center",
          // alignItems:"center",
          backgroundColor:"green",
          width:width/2,
          left:0,
          flex:1,
          position:"absolute"},initialPosition]}*/

//in parent





        return (<Animatable.View ref="mainContent"
          style={[imageStyles,
          initialPosition]}
          //style={startTrans}
          >
          <TouchableOpacity onPress={this.handleClick}>
                <Image resizeMode="contain" source={imageSource} style={{
                            flex:1,
                            height:height,
                            width:width,
                            }}/>
               </TouchableOpacity>
        </Animatable.View>)
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AnimatableView.defaultProps={
imageStyles:{
  justifyContent:"center",
  alignItems:"center",
  backgroundColor:"green",
  // width:width,
  width:width,
  height:height,
  flex:1,
  position:"absolute"
}
}

/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import {VibrancyView,BlurView} from "react-native-blur";
import randomcolor from "randomcolor"
export default class BubbleContainer extends Component {
  updateWindowSize =(e) => {if(e&&e.nativeEvent&&e.nativeEvent.layout&&this.props.updateWindowSize)this.props.updateWindowSize(e.nativeEvent.layout)}
  render() {
    return (
      <View onLayout={this.updateWindowSize} style={{flex: 1,backgroundColor: randomcolor(),}}>
         <Image
                 source={{ uri:this.props.image}}
                 resizeMode='cover'
                 style={{position: 'absolute',left: 0,right: 0,top: 0,bottom: 0,height: null,width: null,}}>


                {/* <BlurView blurType="light" blurAmount={5} */}
               <VibrancyView blurType="light" blurAmount={5}
                        style={[{flex: 1,backgroundColor: 'transparent',justifyContent: 'center',alignItems: 'stretch',}]}>
                        {this.props.children}
                      </VibrancyView>
                      </Image>
                      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

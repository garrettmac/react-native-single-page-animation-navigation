/* @flow */
import randomcolor from 'randomcolor';
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Zocial from 'react-native-vector-icons/Zocial'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

export default class Bubble extends Component {
  hexToRgbA(hex,opacity=.5){
       var c;
       if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
           c= hex.substring(1).split('');
           if(c.length== 3){
               c= [c[0], c[0], c[1], c[1], c[2], c[2]];
           }
           c= '0x'+c.join('');
           return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+','+opacity+')';
       }
       throw new Error('Bad Hex');
   }
  render() {
    const {icon,top,color,right,iconImage,iconColor,iconFamily,borderRadius,iconSize,width,height}=this.props
    let Icon=null
    if(iconFamily==="Entypo")Icon=Entypo
    else if(iconFamily==="EvilIcons")Icon=EvilIcons
    else if(iconFamily==="FontAwesome")Icon=FontAwesome
    else if(iconFamily==="Foundation")Icon=Foundation
    else if(iconFamily==="Ionicons")Icon=Ionicons
    else if(iconFamily==="SimpleLineIcons")Icon=SimpleLineIcons
    else if(iconFamily==="MaterialIcons")Icon=MaterialIcons
    else if(iconFamily==="MaterialCommunityIcons")Icon=MaterialCommunityIcons
    else if(iconFamily==="Octicons")Icon=Octicons
    else if(iconFamily==="Zocial")Icon=Zocial
    else Icon=MaterialCommunityIcons


    return (
      <Animated.View style={[
                    {
                    top:top,
                    right:right,
                    borderRadius:borderRadius,
                    borderColor:this.hexToRgbA(color,.5),
                    backgroundColor:color,
                    height: height,
                    width: width
                  },
                    {
                    position:"absolute",
                    margin:5,
                    borderWidth:3,
                    alignItems:"center",
                    justifyContent:"center",
                    }
                  ]}>
                  {iconImage?(


                    <Image source={iconImage}
                      resizeMode='contain'
                      color="white"
                      style={{flex:1,justifyContent:"center",width:iconSize,height:iconSize}}/>
                  ):(<Icon name={icon} size={iconSize} color={iconColor}/>)
                }
                    </Animated.View>
    );
  }
}

Bubble.defaultProps={
  icon:"close",
  top:0,
  color:randomcolor(),
  right:0,
  iconSize:35,
  borderRadius:25,
  width:50,
  iconColor:'rgba(0,0,0,0.5)',
  height:50,
}

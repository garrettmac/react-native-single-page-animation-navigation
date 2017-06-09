/* @flow */

import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
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



import randomcolor from 'randomcolor';
export default class ListItem extends Component {
  render() {
    const {rightIcon,rightText,leftText,leftIcon,itemOnPress,IconFamily}=this.props


    let Icon=null
    if(IconFamily==="Entypo")Icon=Entypo
    else if(IconFamily==="EvilIcons")Icon=EvilIcons
    else if(IconFamily==="FontAwesome")Icon=FontAwesome
    else if(IconFamily==="Foundation")Icon=Foundation
    else if(IconFamily==="Ionicons")Icon=Ionicons
    else if(IconFamily==="SimpleLineIcons")Icon=SimpleLineIcons
    else if(IconFamily==="MaterialCommunityIcons")Icon=MaterialCommunityIcons
    else if(IconFamily==="Octicons")Icon=Octicons
    else if(IconFamily==="Zocial")Icon=Zocial
    else Icon=MaterialIcons

    return (
      <TouchableOpacity  onPress={()=>itemOnPress()} style={{flexDirection:'row',alignItems:"center"}} >
                      <Icon name={leftIcon} size={25} color="rgba(51,51,51,0.3)" style={{ margin:15}} />
                      <Text style = {{textAlign:"center",fontSize:15, fontWeight:'400', margin:0}}>{leftText}</Text>
                      <View style={{flexDirection:'row',alignItems:"center",position: 'absolute',right:10,}}>
                        <Text style = {{textAlign:"right",fontSize:15, fontWeight:'400', left:-5}}>{rightText}</Text>
                        <MaterialIcon name={rightIcon} size={25} color="rgba(51,51,51,0.3)" style={{ margin:0}} />
                      </View>
                      </TouchableOpacity>
    );
    // <TouchableOpacity onPress={()=>{
    //         // console.log("this.props.scrollEnabled: ",this.props.scrollEnabled);
    //         this.props.scrollEnabled.activate()}}
    //         style={{position:"absolute",top:25,right:10,flex:1,zIndex:3,width:35,height:35,alignItems:"center",justifyContent:"center",backgroundColor:"transparent"}}>
    //         <Icon name={icon} size={25} color="rgba(256,256,256,0.5)"/>
    //     </TouchableOpacity>
  }
}
// ListItem.defaultProps = {
//   IconFamily:'MaterialIcon'
// }

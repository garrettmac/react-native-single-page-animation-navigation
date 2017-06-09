/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,} from 'react-native';
  import * as Animatable from 'react-native-animatable';

import Loading from 'react-native-spinkit';
import _ from 'lodash';
import Swiper from 'react-native-scrollable-tab-view'
import FooterSwipeableSection from '../widgets/FooterSwipeableSection'
var {height, width} = Dimensions.get('window');
import Bubble from "../widgets/Bubble";

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
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



export default class BubbleButtons extends Component {
  // props={isOpen:true}
/*  render(){
const {bubbles,bubbleDefaults,isOpen} = this.props
    let bubblesView=[]

  bubbles.map((o,i) => {
    // o.refId="Bubble"+i
    let Icon=null
    if(o.iconFamily==="Entypo")Icon=Entypo
    else if(o.iconFamily==="EvilIcons")Icon=EvilIcons
    else if(o.iconFamily==="FontAwesome")Icon=FontAwesome
    else if(o.iconFamily==="Foundation")Icon=Foundation
    else if(o.iconFamily==="IonIcons")Icon=Ionicons
    else if(o.iconFamily==="SimpleLineIcons")Icon=SimpleLineIcons
    else if(o.iconFamily==="MaterialIcons")Icon=MaterialIcons
    else if(o.iconFamily==="MaterialCommunityIcons")Icon=MaterialCommunityIcons
    else if(o.iconFamily==="Octicons")Icon=Octicons
    else if(o.iconFamily==="Zocial")Icon=Zocial
    else Icon=MaterialCommunityIcons
    bubblesView.push(<Animatable.View
key={`bubble-item${i+1}`}
       ref={`bubble${i+1}`}
        style={[
                      {

                      top:bubbles[i].start.top,
                      right:bubbles[i].start.top,

                    },
                      {
                      position:"absolute",
                      margin:5,
                      backgroundColor:"red",
                      alignItems:"center",
                      justifyContent:"center",
                      }
                    ]}
        >
          <TouchableOpacity
            style={{  borderRadius:bubbleDefaults.start.borderRadius,
              backgroundColor:bubbles[i].color,
              height: bubbleDefaults.start.height,
              width: bubbleDefaults.start.width,}}
            onPress={()=>{
              this.refs[`bubble${i+1}`].transitionTo(bubbles[i].end)
              this.setState({isOpen: !this.props.isOpen});
            }}>
            <Icon name={bubbles[i].icon}
               size={bubbleDefaults.start.iconSize}
               color={bubbles[i].color}/>
</TouchableOpacity>
</Animatable.View>)
  })
  return <View>{bubblesView}</View>
  }*/
  render(){
  const{bubbleDefaults,bubbles,bubble,startFooterTitles}=this.props
  if(!bubbles){console.warn("no bubble props passed into BubbleButtons");return <Text>Nothins is here</Text>
  }else{

      console.log("bubbles: ",bubbles);
      let bubbleView=[]
      bubbles.map((item,i) => {
    bubbleView.push(
      <Animatable.View   key={`bubble-button-${i}`}
          ref={`Bubble${i+1}`} style={[{flex:1, height,width,backgroundColor:"blue"}]}>

      <TouchableOpacity


                      onPress={()=>{
                        const {start,end} = item
                        // const startPosition={}
                        // const endPosition={}
                        this.refs[`Bubble${i+1}`].transitionTo((this.props.isOpen)?start:end)
                        this.setState({isOpen: !this.props.isOpen});

                        }}>

                      <Bubble
                        //"start": {"top": 30,"right": 10},
                        //"end": {"top": -150,"right": 150}
                        right={item.start.right}

                        top={item.start.top}
                        icon={item.icon}
                        color={item.color}
                        iconFamily={item.iconFamily}
                        iconSize={item.iconSize}
                        borderRadius={bubbleDefaults.start.borderRadius}
                        iconSize={item.iconSize}
                        width={item.width}
                        height={item.height}

                        />
                      </TouchableOpacity>
                    </Animatable.View>
                    )
                      })
                      return bubbleView

       }


  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
BubbleButtons.defaultProps={
  "start":{
    "borderRadius": 25,
    "height": 50,
    "iconSize": 20,
    "width": 50
  },
  "end":{
    "borderRadius": 20,
    "height": 40,
    "iconSize": 20,
    "width": 40
  }
}

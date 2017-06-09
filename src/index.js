/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// import Nav from './widgets/nav';

let startTrans={marginTop:10,height:300,width:300,}
let endTrans={height:50,width:50,marginTop: 200}
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
  View
} from 'react-native';
import Loading from 'react-native-spinkit';
import _ from 'lodash';
import Swiper from 'react-native-scrollable-tab-view'

import randomcolor from 'randomcolor';
var {height, width} = Dimensions.get('window');

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from "react-native-vector-icons/MaterialIcons";

import {VibrancyView,BlurView} from "react-native-blur";








//widgets
import FooterSwipeableSection from './widgets/FooterSwipeableSection'
import ListItem from "./widgets/ListItem";
import Bubble from "./widgets/Bubble";
import SearchResultsListItem from './widgets/SearchResultsListItem';
//partials
import BubbleButtons from './partials/BubbleButtons';
import Footer from './partials/Footer';
import AnimatableView from './partials/AnimatableView';
import BubbleContainer from './partials/BubbleContainer';
import ChildPropertyContainer from './partials/ChildPropertyContainer';


export {BubbleButtons,
Footer,
AnimatableView,
FooterSwipeableSection,
BubbleContainer,
Bubble,
ChildPropertyContainer}
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
import * as Animatable from 'react-native-animatable';


import PropTypes from 'prop-types';

console.log("PropTypes: ",PropTypes);
export default class Index extends Component {

  static propTypes = {
    animationConfig: PropTypes.string.isRequired,
    // color: PropTypes.string.isRequired,
    // onPress: PropTypes.func.isRequired,
    // useNativeDriver: PropTypes.bool,
  };
constructor(props){
	super(props);
  this.state={
    isOpen:true
  }

  const {animationConfig,bubbleDefaults,MainContentConfig} = this.props
  // let MainContentConfig={start:{marginTop:new Animated.Value(200)},end:{marginTop:new Animated.Value(50)}}

   this.DEFAULT_ANIMATION_MARGIN_TOP=animationConfig.DEFAULT_ANIMATION_MARGIN_TOP
   this.DEFAULT_ANIMATION_USER_IMAGE_SIZE=animationConfig.DEFAULT_ANIMATION_USER_IMAGE_SIZE
   this.ONCHANGE_ANIMATION_MARGIN_TOP=animationConfig.ONCHANGE_ANIMATION_MARGIN_TOP
  //  this.DEFAULT_ANIMATION_TOP_HEIGHT=animationConfig.DEFAULT_ANIMATION_TOP_HEIGHT
   this.ONCHANGE_ANIMATION_TOP_HEIGHT=animationConfig.ONCHANGE_ANIMATION_TOP_HEIGHT
   this.ONCHANGE_ANIMATION_USER_IMAGE_SIZE=animationConfig.ONCHANGE_ANIMATION_USER_IMAGE_SIZE
  // this.BUBBLE=animationConfig.BUBBLE
  this.ACTIVE_BUBBLE=animationConfig.ACTIVE_BUBBLE
  this.BUBBLE_ANIMATION=animationConfig.BUBBLE_ANIMATION
  this.MAIN_IMAGE_MARGIN_TOP=animationConfig.MAIN_IMAGE_MARGIN_TOP
  this.MAIN_LARGE_IMAGE_ACTIVE=animationConfig.MAIN_LARGE_IMAGE_ACTIVE
  this.MAIN_LARGE_IMAGE_DISABLED=animationConfig.MAIN_LARGE_IMAGE_DISABLED
  this.FOOTER_TEXT_SEGMENT_BOTTOM_HEIGHT=animationConfig.FOOTER_TEXT_SEGMENT_BOTTOM_HEIGHT
  this.LIST_VIEW_TOP=animationConfig.LIST_VIEW_TOP

    this.ANIMATION_MARGIN_TOP = new Animated.Value(this.DEFAULT_ANIMATION_MARGIN_TOP)
  // this.ANIMATION_TOP_HEIGHT = new Animated.Value(DEFAULT_ANIMATION_TOP_HEIGHT)
  this.ANIMATION_USER_IMAGE_SIZE = new Animated.Value(this.DEFAULT_ANIMATION_MARGIN_TOP)

    this.resultsHeading=""
    this.topHalfHeight=new Animated.Value(animationConfig.DEFAULT_ANIMATION_TOP_HEIGHT)
    this.props.TEST=new Animated.Value(200)
    this.marginRightTop=new Animated.Value(this.MAIN_IMAGE_MARGIN_TOP.hidden)
    this.footerTextSegmentTop=new Animated.Value(this.FOOTER_TEXT_SEGMENT_BOTTOM_HEIGHT.hidden)
    this.ListViewTop=new Animated.Value(this.LIST_VIEW_TOP.hidden)
    this.marginRightMiddle=new Animated.Value(this.MAIN_LARGE_IMAGE_ACTIVE.marginRight)
    this.marginRightBottom=new Animated.Value(this.MAIN_LARGE_IMAGE_ACTIVE.marginRight)
    // this.isAnimationActive=true
    this.startFooterTitles=props.startFooterTitles
    this.mainImage={
      borderRadius:new Animated.Value(animationConfig.borderRadius),
      marginTop:new Animated.Value(animationConfig.marginTop),
      height:new Animated.Value(animationConfig.height),
      marginRight:new Animated.Value(animationConfig.marginRight),
    }
    if(animationConfig.width)mainImage.width=new Animated.Value(animationConfig.width)
    //gets bubbleDefaults
    this.bubble={
      borderRadius:new Animated.Value(bubbleDefaults.borderRadius),
      height:new Animated.Value(bubbleDefaults.height),
      iconSize:20,
      width:new Animated.Value(bubbleDefaults.width),
    }
    // if(animationConfig.width)this.bubble.width=new Animated.Value(animationConfig.width)


  // this.updateFooterText=this.updateFooterText.bind(this)


  if(props.bubbles){
    props.bubbles.map((item,i) => {
      this[`bubble${i+1}`]={
        color:item.color,
        icon:item.icon,
        iconFamily:item.iconFamily||null,
        component:item.component||null,
        iconImage:item.iconImage||null,
        start:{top:new Animated.Value(item.start.top),right:new Animated.Value(item.start.right)},
        // start:{top:item.start.top,right:item.start.right},
        // end:{top:item.end.top,right:item.end.right},
        top:new Animated.Value(item.start.top),
        right:new Animated.Value(item.start.right),
        end:{top:new Animated.Value(item.end.top),right:new Animated.Value(item.end.right)}
      }
    })

  }
  this._onFocus=this._onFocus.bind(this)
  this._onBlur=this._onBlur.bind(this)
  this.MainContentConfig=this.MainContentConfig.bind(this)
  this.onPress=this.onPress.bind(this)
}


  componentWillMount(){}
componentDidMount() {
  // console.log("BUBBLES this: ",this);

  // this._defaultFooterItem()
  // this._onFocus()
  // this._onFriendList()
}
  _defaultFooterItem(){
    //this.setState({
    return {startFooterTitles:{
      title:"Add Friends to",
      subTitle:"Your Lifeboat",
      body:"Lifeboats are small private groups that allows your to share an activity feed, a group chats, an itinerary and daily schedule with your group of friends.",
    }
  }
    // })
  }
  _onBlur() {

this._defaultFooterItem()

  const {
    BUBBLE,ONCHANGE_ANIMATION_TOP_HEIGHT,MAIN_LARGE_IMAGE_ACTIVE,FOOTER_TEXT_SEGMENT_BOTTOM_HEIGHT,LIST_VIEW_TOP,DEFAULT_ANIMATION_TOP_HEIGHT,MAIN_IMAGE_MARGIN_TOP,MAIN_LARGE_IMAGE_DISABLED,ACTIVE_BUBBLE,BUBBLE_ANIMATION,
  }=this

  const {footerTextSegmentTop,
  marginRightTop,
  ListViewTop,
  topHalfHeight,
  mainImage,
  bubble,
  bubbles,}=this.props






    //this.setState({isAnimationActive:true})
    //this.isAnimationActive=true
    if(footerTextSegmentTop)Animated.spring(footerTextSegmentTop, {toValue: FOOTER_TEXT_SEGMENT_BOTTOM_HEIGHT.hidden,duration: 400,}).start()
    if(ListViewTop)Animated.spring(ListViewTop, {toValue: this.LIST_VIEW_TOP.hidden,duration: 400,}).start()

    if(topHalfHeight)Animated.spring(topHalfHeight, {toValue: ONCHANGE_ANIMATION_TOP_HEIGHT,duration: 900,}).start()
    if(marginRightTop)Animated.spring(marginRightTop, {toValue: MAIN_IMAGE_MARGIN_TOP.hidden,duration: 400,}).start()

    if(mainImage.height)Animated.spring(mainImage.height, {toValue: MAIN_LARGE_IMAGE_ACTIVE.height,duration: 400,}).start()
   if(mainImage.width)Animated.spring(mainImage.width, {toValue: MAIN_LARGE_IMAGE_ACTIVE.borderRadius,duration: 400,}).start()
   if(mainImage.borderRadius)Animated.spring(mainImage.borderRadius, {toValue: MAIN_LARGE_IMAGE_ACTIVE.width,duration: 400,}).start()
   if(mainImage.marginTop)Animated.spring(mainImage.marginTop, {toValue: MAIN_LARGE_IMAGE_ACTIVE.marginTop,duration: 400,}).start()
   if(mainImage.right)Animated.spring(mainImage.right, {toValue: MAIN_LARGE_IMAGE_ACTIVE.right,duration: 400,}).start()

   if(bubble.height)Animated.spring(bubble.height, {toValue: BUBBLE.height,duration: 400,}).start()
   if(bubble.width)Animated.spring(bubble.width, {toValue: BUBBLE.width,duration: 400,}).start()
   if(bubble.iconSize)Animated.spring(bubble.iconSize, {toValue: BUBBLE.iconSize,duration: 400,}).start()
   if(bubble.borderRadius)Animated.spring(bubble.borderRadius, {toValue: BUBBLE.borderRadius,duration: 400,}).start()

   this.props.bubbles.map((item,i) => {
     Animated.spring(this[`bubble${i+1}`].top, {toValue: item.start.top,duration: 400,}).start()
     Animated.spring(this[`bubble${i+1}`].right, {toValue:item.start.right,duration: 400,}).start()
   })
  }
  _onFocus() {

//    this.setState({isAnimationActive:false})
  //this.isAnimationActive=false
const {
  FOOTER_TEXT_SEGMENT_BOTTOM_HEIGHT,LIST_VIEW_TOP,DEFAULT_ANIMATION_TOP_HEIGHT,MAIN_IMAGE_MARGIN_TOP,MAIN_LARGE_IMAGE_DISABLED,ACTIVE_BUBBLE,BUBBLE_ANIMATION,
}=this
const {footerTextSegmentTop,
        marginRightTop,
        ListViewTop,
        topHalfHeight,
        mainImage,
        bubble,
        bubbles,}=this.props
    if(footerTextSegmentTop)Animated.spring(footerTextSegmentTop, {toValue: FOOTER_TEXT_SEGMENT_BOTTOM_HEIGHT.active,duration: 400,}).start()
    if(ListViewTop)Animated.spring(ListViewTop, {toValue: this.LIST_VIEW_TOP.active,duration: 400,}).start()

    if(topHalfHeight)Animated.spring(topHalfHeight, {toValue: DEFAULT_ANIMATION_TOP_HEIGHT,duration: 900,}).start()
    if(marginRightTop)Animated.spring(marginRightTop, {toValue: MAIN_IMAGE_MARGIN_TOP.active,duration: 400,}).start()

     if(mainImage.height)Animated.spring(mainImage.height, {toValue: MAIN_LARGE_IMAGE_DISABLED.height,duration: 400,}).start()
     if(mainImage.width)Animated.spring(mainImage.width, {toValue: MAIN_LARGE_IMAGE_DISABLED.width,duration: 400,}).start()
    if(mainImage.borderRadius)Animated.spring(mainImage.borderRadius, {toValue: MAIN_LARGE_IMAGE_DISABLED.borderRadius,duration: 400,}).start()
    if(mainImage.marginTop)Animated.spring(mainImage.marginTop, {toValue: MAIN_LARGE_IMAGE_DISABLED.marginTop,duration: 400,}).start()
    if(mainImage.right)Animated.spring(mainImage.right, {toValue: MAIN_LARGE_IMAGE_DISABLED.right,duration: 400,}).start()

   if(bubble.height)Animated.spring(bubble.height, {toValue: ACTIVE_BUBBLE.height,duration: 400,}).start()
   if(bubble.width)Animated.spring(bubble.width, {toValue: ACTIVE_BUBBLE.width,duration: 400,}).start()
   if(bubble.iconSize)Animated.spring(bubble.iconSize, {toValue: ACTIVE_BUBBLE.iconSize,duration: 400,}).start()
   if(bubble.borderRadius)Animated.spring(bubble.borderRadius, {toValue: ACTIVE_BUBBLE.borderRadius,duration: 400,}).start()
   if(this.props.bubbles)
   this.props.bubbles.map((item,i) => {
     Animated.spring(this[`bubble${i+1}`].top, {toValue: item.end.top,duration: 400,}).start()
     Animated.spring(this[`bubble${i+1}`].right, {toValue:item.end.right,duration: 400,}).start()
   })

    }











MainContentConfig(isAnimationActive){
  this.props.isAnimationActive=!isAnimationActive
  alert()
Animated.spring(this.props.TEST, {toValue: (isAnimationActive)?200:20
,duration: 900,}).start()

}
onPress(){
    const {isOpen} = this.state
    this.setState({isOpen: !isOpen});
    this.refs.mainContent.transition((isOpen)?startTrans:endTrans,(isOpen)?endTrans:startTrans)
}
  render() {

// const{bubble1,bubble2,bubble3,bubble4,bubble5}=bubbles
const{
  isAnimationActive,

  bubble,
  ListViewTop,
  startFooterTitles,
  friendlist,
  topHalfHeight,
  footerList,
  footerListButtonOnPress,
  bubbles,

  //MAIN COMPONENT PROPS (including [isAnimationActive]
  marginRightTop,
  mainImageURI,
  mainImage,
  onPressMainImage,
  mainIconSize,
  mainIcon,
  IconFontFamily,
}=this.props



    return (
      <View style={{flex: 1,backgroundColor: 'transparent',}}>
         <Image
                 source={{ uri:"https://source.unsplash.com/category/nature?ocean"}}
                 resizeMode='cover'
                 style={{position: 'absolute',left: 0,right: 0,top: 0,bottom: 0,height: null,width: null,}}>


                {/* <BlurView blurType="light" blurAmount={5} */}
               <VibrancyView blurType="light" blurAmount={5}
                        style={[{flex: 1,backgroundColor: 'transparent',justifyContent: 'center',alignItems: 'stretch',}]}>


                     <Animated.View
                              style={{
                                height:(topHalfHeight)?topHalfHeight: height/.8,
                                width,flex:1,justifyContent:'flex-start',}}>



           {/* USER IMAGE SECTION */}

             <Animated.View style={{
                         //marginTop:(mainImage&&mainImage.marginTop)?mainImage.marginTop:20,
                         //marginTop:this.MainContentConfig(isAnimationActive,"marginTop"),
                         marginTop:this.props.TEST,

                         alignItems:isAnimationActive?'center':'flex-start',
                         //marginBottom:mainImage.marginTop
                       }}>
<TouchableOpacity
  //onPress={()=>{alert();this.refs.AnimatableView.transitionTo({marginTop: 200})}}

        style={{position:"absolute",top:0,right:0,flex:10,zIndex:3,width:30,height:30,alignItems:"center",justifyContent:"center",backgroundColor:(isAnimationActive)?"green":"red"}}>
<Text style={{fontSize: 20,textAlign: "center",margin: 10,}}>{isAnimationActive}</Text>
</TouchableOpacity>



<Animatable.View ref="mainContent" style={startTrans}>
      <TouchableOpacity
        onPress={()=>{
        // this.refs.mainContent.transitionTo((this.state.isOpen)?endTrans:startTrans)
        this.refs.mainContent.transition((this.state.isOpen)?startTrans:endTrans,(this.state.isOpen)?endTrans:startTrans)
        this.setState({isOpen: !this.state.isOpen});
      }}>
               <Image source={mainImageURI} style={{
                 marginTop:(marginRightTop)?(marginRightTop):0,
                 height:300,
                 width:300,
                 resizeMode:"contain",justifyContent:"flex-start",alignSelf:"flex-start",}}/>
               </TouchableOpacity>
                 </Animatable.View>
{/* <AnimatableView
  {...this.props}
  ref="AnimatableView"
  marginRightTop={marginRightTop}
  isAnimationActive={isAnimationActive}
  //image params
  mainImageURI={mainImageURI}
  mainImage={mainImage}
  //onPress param
  onPressMainImage={onPressMainImage}
  //onFocus={this._onFocus}
  //onFocus={alert("on1")}
  //onBlur={this._onBlur}
  //onBlur={alert("on2")}
  //icon params
  mainIconSize={mainIconSize}
  mainIcon={mainIcon}
  IconFontFamily={IconFontFamily}
/> */}

<BubbleButtons {...this.props}/>

             </Animated.View>
            </Animated.View>

 {/* BOTTOM SECTION */}
{/* {this.footerSection()} */}
<Footer {...this.props} />
 {/* RESULTS SECTION */}
 <ChildPropertyContainer {...this.props} />




 </VibrancyView>
 {/* </BlurView> */}
     </Image>
     </View>
    );
  }





  //-----------------------
  _onFriendList(){}


  updateFooterText(title=this.props.startFooterTitles.title,subTitle=this.props.startFooterTitles.subTitle,body=this.props.startFooterTitles.body,marginLeft=this.props.startFooterTitles.marginLeft){
const{startFooterTitles}=this.props



    // const {isAnimationActive}=this
    // if(isAnimationActive){

      //marginLeft:MAIN_LARGE_IMAGE_DISABLED.width,

      // alert(JSON.stringify(props.startFooterTitles))
      //this.setState({
        // footerMarginLeft:marginLeft,
        // this.footerMarginLeft=marginLef
        // startFooterTitles:
        // {title,subTitle,body,
        // titleSize:25,subTitleSize:30,
        // marginLeft:marginLeft,
        //marginLeft:(isAnimationActive)?startFooterTitles.start.marginLeft:startFooterTitles.end.marginLeft
      // }})
      // Animated.spring(ListViewTop, {toValue: this.LIST_VIEW_TOP.active,duration: 400,}).start()
    // }else{
    //   this._defaultFooterItem()
    //   Animated.spring(ListViewTop, {toValue: LIST_VIEW_TOP.hidden,duration: 400,}).start()
    // }
  }


   hexToRgbA(hex,opacity=.5){var c;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){c= hex.substring(1).split('');if(c.length== 3){c= [c[0], c[0], c[1], c[1], c[2], c[2]];}c= '0x'+c.join('');return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+','+opacity+')';}throw new Error('Bad Hex');}


    selectedFriend(){
      alert("selectedFriend")
    }
    //---------------
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:null,
    height:null
},

menu:{
  flex:4,
  justifyContent:'center'
}
}
);

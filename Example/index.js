
import React, { Component } from 'react';




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

var {height, width} = Dimensions.get('window');





import Index,{BubbleButtons,
Footer,BubbleContainer,
Bubble,
FooterSwipeableSection,
AnimatableView,
ChildPropertyContainer} from '../src/index.js';




import BubbleManager from './BubbleManager';
console.log(" BubbleManager: ",BubbleManager);




// let startMainContent={height:250,marginTop:0,width:200,top:100,}
// let endMainContent={height:50,marginTop:30,width:50,top:10,}


let footerList=[{image:`https://robohash.org/${"person1"}?size=350x350&set=set1`},{image:`https://robohash.org/${"person2"}?size=350x350&set=set1`},{image:`https://robohash.org/${"person3"}?size=350x350&set=set1`}]

// @inject("store") @observer
export default class Example extends Component {
constructor(props){
	super(props);
      this.state={
        //main
        moveAnimatedView:false,
        initialPosition:{height:250,marginTop:0,width:200,top:100,},
        movedPosition:{height:50,marginTop:30,width:50,top:10,},
        //footer
        footerList:footerList,
        footerStartPosition:{height,marginTop:height,},
        footerEndPosition:{height:height,marginTop:145},
        title:"Joe Dirts",
        subTitle:"Your Friends",
        paragraph:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
}



componentDidMount(){
  // this.setState({childPage:bubbles[0].component()})
//   setInterval(function(){
// if(this.refs.childComponent)this.refs.childComponent.transitionTo((this.state.isOpen)?startChildContent:endChildContent)
// this.setState({isOpen:!this.state.isOpen})
//   }.bind(this),3000)

}
  componentWillMount(){
  }




  updateAnimatedViewPosition = () => {
    this.setState({moveAnimatedView: !this.state.moveAnimatedView});
  }

pressedLifeboatImage(){
  //this.refs.footer.transitionTo((this.state.isOpen)?{marginLeft:50,top:25}:{marginLeft:0,top:height-220});
}


render(){

  const {
    //main
    moveAnimatedView,
    initialPosition,
    movedPosition,
    //footer
    footerList,
    title,
    subTitle,
    paragraph} = this.state
  return (
    <BubbleContainer image={"https://source.unsplash.com/category/nature?ocean"}>



<AnimatableView
  initialPosition={initialPosition}
  moveAnimatedView={moveAnimatedView}
  // initialPosition={(moveAnimatedView)?initialPosition:movedPosition}
  movedPosition={movedPosition}
  updateAnimatedViewPosition={this.updateAnimatedViewPosition}
  imageSource={{uri:"https://rawgit.com/garrettmac/images/master/projects/portpal/lifeboat.png"}}
/>


              <FooterSwipeableSection
               footerList={footerList}
               title={title}
               subTitle={subTitle}
               paragraph={paragraph}
               subTitleSize={30}
               titleSize={25}
                 style={{marginBottom:0,}}
                 //marginLeft={marginLeft}
                 titleColor="#fff"
                 subTitleColor={this.state.subTitleColor}
                  tabLabel="" /> 

      </BubbleContainer>)
}

}
const styles = StyleSheet.create({});
/*
renderButtons(bubbles){
    let bubblesView=[]
    if(!bubbles)return null

    bubbles.map((o,i) => {
        // alert(JSON.stringify(bubbles[i]))
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

      bubblesView.push(  <Animatable.View key={`bubble-item${i+1}`} ref={`bubble${i+1}`}
                  style={[
                        {
                        top:bubbles[i].start.top,
                        right:bubbles[i].start.right,
                        borderRadius:bubbleDefaults.start.borderRadius,
                        backgroundColor:bubbles[i].color,
                        height: bubbleDefaults.start.height,
                        width: bubbleDefaults.start.width,
                      },
                        {position:"absolute",margin:5,borderWidth:3,borderColor:'rgba(0,0,0,.2)',alignItems:"center",justifyContent:"center",}
                      ]}
          >
            <TouchableOpacity onPress={()=>{
if(o.moveMainContent){

  if(this.refs.childComponent)this.refs.childComponent.transitionTo((this.state.isOpen)?endChildContent:startChildContent)
  this.setState({isOpen:!this.state.isOpen,
    subTitleColor:o.color,
    FooterContent:o.FooterContent
  })
  this.refs.mainContent.transitionTo((this.state.isOpen)?endMainContent:startMainContent)
  this.refs.footer.transitionTo((this.state.isOpen)?{marginLeft:50,top:25}:{marginLeft:0,top:height-220})
  bubbles.map((item,i) => {
    this.refs[`bubble${i+1}`].transitionTo((this.state.isOpen)?item.end:item.start)
  })
}
                // this.setState({imageHeight:(this.state.isOpen)?endMainContent.height:startMainContent.height,isOpen: !this.state.isOpen});

                this.setPageContent(bubbles[i].component)
                //  if(bubbles[i].onPress && (typeof(bubbles[i].onPress) == 'function'))
                //  this.setState({childComponent:bubbles[i].component})
                //  this.setState({childComponent:bubbles[i].onPress})
              }}>
              <Icon name={bubbles[i].icon}
                 size={bubbleDefaults.start.iconSize}
                 color={bubbles[i].iconColor}/>
</TouchableOpacity>
</Animatable.View>)
    })
    return (<View style={{
      //flex: 1,height,width,position:"absolute",zIndex:5,
      backgroundColor:"yellow"}}>{bubblesView}</View>)
  }
*/

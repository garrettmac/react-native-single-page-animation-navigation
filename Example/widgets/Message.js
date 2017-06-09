import React, { Component } from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import InvertibleScrollView from 'react-native-invertible-scroll-view';

export default class Message extends Component {
constructor(props){
	super(props)
	console.log(this.props)
  // alert(JSON.stringify(this.props.rowData.value))
}
  render() {
    const TimestampView = (time) => {
      var timestamp=null;
      if(time)timestamp=moment({time}).startOf("hour").fromNow()
      return <Text style={{fontWeight:'400', color:'#333', fontSize:10}}>{timestamp||"some time ago"}</Text>
    }
const {time}=this.props.rowData.value
let timeView=null;
if(time){
  timeView =TimestampView(this.props.rowData.value.time)
}
    // <TouchableOpacity onPress ={() => console.log("pressed convo:",this.props.rowData.value.message)}>
    return (

    	 <TouchableOpacity onPress ={() => this.props.onPressChild(this.props.rowData)}>
      <View style= {{padding:10, flexDirection:'row', borderBottomWidth:1, borderColor:'#e3e3e3'}}>
      <Image source ={{uri: this.props.rowData.value.image}} resizeMode ="contain" style={{height:50, width:50, margin:10, borderRadius:25, backgroundColor:'#f8f8f8'}} />
      <View style={{alignSelf:'center', justifyContent:'center'}}>
      <View style = {{flexDirection:'row', justifyContent:'space-between', width:210}}>
      <Text style={{fontWeight:'600', color:'#333'}}>{this.props.rowData.value.username}</Text>
			{timeView}

      </View>
      <Text style ={{width:150, height:35, fontWeight:'300', color:'#333'}}>{this.props.rowData.value.message||"open to view"}</Text>
      </View>
      </View>
      </TouchableOpacity>

    );
  }
}

Message.defaultProps = {
	onPressChild:null,
	rowData:{
		value:{"message":"",
		//"image":`https://robohash.org/${"person"}?size=350x350&set=set1`,
		"image":``,
		"username":"",
		"time":"",
		"message":"",
	}

	}
}

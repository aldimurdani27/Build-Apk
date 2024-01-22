import React, {useCallback} from 'react';
import { Text, ScrollView, StyleSheet, View, Image, ImageAlert, Button, Linking, Alert, TouchableOpacity } from 'react-native';
import MyButton from './components/MyButton';
import InstagramButton from './components/InstagramButton';
import FacebookButton from './components/FacebookButton';
import Telegram from './components/TelegramButton';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// or any files within the Snack

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.overviewheading}>
        Overview
      </Text>
      <Card style={styles.card}>
        <View style={styles.inner_card}>
          <View style={{position:'relative', height:100}}>
            <Image style={{width:98, height:140, position:'absolute', bottom:-18, left:-8}} source={require('./assets/DSC00028.jpg')} />
          </View>
          <View style={{flex:1, marginLeft:104}}>
            <Text style={styles.pb1}>
              Aldi Murdani
            </Text>
            <Text style={styles.pb3}>
            Hello! It seems like you'd like to introduce a designer, but I need a bit more information to provide a more specific introduction..
            </Text>
          </View>
        </View>
      </Card>
      <View
        style={{
          marginVertical:16,
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <Text style={styles.projectheading}>
        Design
      </Text>
      <View>
        <View style={{marginBottom:14}}>
          <Card style={styles.card}>
            <View style={styles.inner_card1}>
              <View>
                <Image style={{width: 310, height:210, borderRadius:5}} source={require('./assets/Dribbleshow8.png')} />
              </View>
              <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center'}}>
                  <MyButton url="https://dribbble.com/shots/20560570-Programing-Language-Class" />
              </View>
            </View>
          </Card>
        </View>
        <View style={{marginBottom:14}}>
          <Card style={styles.card}>
            <View style={styles.inner_card1}>
              <View>
                <Image style={{width: 310, height:210, borderRadius:5}} source={require('./assets/Dribbleshow12.png')} />
              </View>
              <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center'}}>
                  <MyButton url="https://dribbble.com/shots/20658242-Coffee-Shop" />
              </View>
            </View>
          </Card>
        </View>
        <View style={{marginBottom:14}}>
          <Card style={styles.card}>
            <View style={styles.inner_card1}>
              <View>
                <Image style={{width: 310, height:210, borderRadius:5}} source={require('./assets/Frame15.png')} />
              </View>
              <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center'}}>
                  <MyButton url="https://dribbble.com/shots/20766212-Booking-Ticket-Travel-Company-Dashboard" />
              </View>
            </View>
          </Card>
        </View>
      </View>
     
      <View style={{paddingBottom:20}}>
        <Text style={styles.projectheading}>
        Social Media
      </Text>
        <View style={{flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center', justifyContent:'space-between',}}>
          <InstagramButton url="https://www.instagram.com/aldimurdani27" />
          <FacebookButton url="https://www.facebook.com/aldi.murdani.92" />
          <Telegram url="https://t.me/aldimurdani" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor:'#DDDDDD',
  },
  overviewheading: {
    paddingTop:52,
    marginBottom: 4,
    fontSize: 24,
    fontWeight: 'bold',
  },
  projectheading: {
    marginBottom: 4,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    position:'relative',
    padding:18,
    backgroundColor: '#EEEEEE',
  },
  inner_card: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  inner_card1: {
    textAlign:'center',
  },
  inner_card2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  marginbottomcard: {
    marginBottom:10,
  },
  textcenter: {
    textAlign:'center',
  },
  textleft: {
    textAlign:'left',
  },
  textright: {
    textAlign:'right',
  },
  // p1: {
  //   fontSize: 20,
  // },
  pb1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  // p2: {
  //   fontSize: 16,
  // },
  pb2: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  p3: {
    fontSize: 14,
  },
  pb3: {
    fontSize: 14,
  fontWeight: 'bold',
  },
});

import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TextInput,
  StyleSheet
} from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const Home = ({ navigation}) => {
    const [editable, setaditable] = React.useState(false);
    const [mobileno, setmobileno] = React.useState('7018947047')
    const [fullname, setfullname] = React.useState('Anuj Sharma');
    const [email, setEmail] = React.useState('anujshrki@gmail.com');
    const [cardno, setcardno] = React.useState('1234 4567 1234');
    const [addresshouseno, setaddresshouseno] = React.useState('12');
    const [addresscity, setaddresscity] = React.useState('Mohali');
    const [addressstate, setaddressstate] = React.useState('Punjab');
    const [addresspincode, setaddresspincode] = React.useState('160062');
  
    return (
      <SafeAreaView style={styles.mainContainer}>
       <StatusBar backgroundColor='#694fad'/>
        <View style={styles.topContainer}>
          <Image style={styles.userImageContainer}
            source={require('../assets/Images/maxresdefault.jpg')} />
          <Text style={{ marginLeft: 15, marginVertical: 15, color: '#fff',  fontSize: 20 }}>Hello,{"\n"}{fullname== '' ? 'User Name' :fullname}</Text>
        </View>
        {editable == false ? <TouchableOpacity style={{ position: 'absolute', right: 15, justifyContent: 'center', alignItems: 'center', top: screenHeight * 0.17, backgroundColor: '#000', borderRadius: 10, paddingHorizontal: 20, paddingVertical: 5 }}
          onPress={() => { setaditable(true) }}><Text style={
            {
              color: '#fff',
              fontSize: 16,
              
            }}>
            Edit
              </Text></TouchableOpacity> : <TouchableOpacity style={{ position: 'absolute', right: 15, justifyContent: 'center', alignItems: 'center', top: screenHeight * 0.17, backgroundColor: '#000', borderRadius: 10, paddingHorizontal: 15, paddingVertical: 5 }}
            onPress={() => { setaditable(false) }}><Text style={
              {
                color: '#fff',
                fontSize: 16,
                
              }}>
              Update
              </Text></TouchableOpacity>}
        {editable == false ?
          <View style={{
            width: screenWidth * 0.95, borderColor: '#eee', borderWidth: 2, padding: 10, borderRadius: 5, marginTop: 10,
            borderBottomRightRadius: 200,
            alignSelf: 'center'
          }}>
  
            <Text style={
              {
                color: '#000',
                fontSize: 20,
                
                marginBottom: 10
              }}>
              Personal Information
          </Text>
  
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', marginBottom: 10 }}>
              <Image style={{ height: 28, width: 24, backgroundColor: '#FFF', alignSelf: 'center', tintColor: '#000' }}
                source={require('../assets/Images/mobile.png')} resizeMode="contain" />
              <View style={{ flex: 1, paddingHorizontal: 10, }}>
                <Text style={
                  {
                    color: '#000',
                    fontSize: 16,
                    
                  }}>
                  Mobile no
          </Text>
  
                <Text style={
                  {
                    color: '#000',
                    fontSize: 14,
                    
                  }}>
                  {mobileno}
          </Text>
              </View></View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', marginBottom: 10 }}>
              <Image style={{ height: 28, width: 24, backgroundColor: '#FFF', alignSelf: 'center', tintColor: '#000' }}
                source={require('../assets/Images/email.png')} resizeMode="contain" />
              <View style={{ flex: 1, paddingHorizontal: 10, }}>
                <Text style={
                  {
                    color: '#000',
                    fontSize: 16,
                    
                  }}>
                  Email
          </Text>
  
                <Text style={
                  {
                    color: '#000',
                    fontSize: 14,
                    
                  }}>
                  {email}
          </Text>
              </View></View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', marginBottom: 10 }}>
              <Image style={{ height: 28, width: 24, backgroundColor: '#FFF', alignSelf: 'center', tintColor: '#000' }}
                source={require('../assets/Images/voter-id.png')} resizeMode="contain" />
              <View style={{ flex: 1, paddingHorizontal: 10, }}>
                <Text style={
                  {
                    color: '#000',
                    fontSize: 16,
                    
                  }}>
                  Voter/Aadhar Card no
          </Text>
  
                <Text style={
                  {
                    color: '#000',
                    fontSize: 14,
                    
                  }}>
                  {cardno}
          </Text>
              </View></View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', marginBottom: 10 }}>
              <Image style={{ height: 28, width: 24, backgroundColor: '#FFF', alignSelf: 'center', tintColor: '#000' }}
                source={require('../assets/Images/adress.png')} resizeMode="contain" />
              <View style={{ flex: 1, paddingHorizontal: 10, }}>
                <Text style={
                  {
                    color: '#000',
                    fontSize: 16,
                    
                  }}>
                  Address
          </Text>
  
                <Text style={
                  {
                    color: '#000',
                    fontSize: 14,
                    
                  }}>
                  {addresshouseno + ' ' + addresscity + ' ' + addressstate+ ' ' + addresspincode}
          </Text>
              </View></View>
           
          
          
          </View> : <KeyboardAvoidingView behavior="padding" >
            <ScrollView style={{
              width: screenWidth * 0.93, paddingTop: 10, marginTop: 10,paddingBottom: 50,
              alignSelf: 'center'
            }} showsVerticalScrollIndicator={false}>
              <Text style={
                {
                  color: '#000',
                  fontSize: 18,
                  marginBottom: 10
                }}>
                Please fill the Information
          </Text>
              <Text style={
                {
                  color: '#000',
                  fontSize: 16,
                  
                }}>
                Name
          </Text>
              <TextInput
                style={styles.input}
                placeholder='Full Name'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setfullname(text)}
                value={fullname}
                maxLength={25}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
              />
              <Text style={
                {
                  color: '#000',
                  fontSize: 16,
                  
                }}>
                Email
          </Text>
              <TextInput
                style={styles.input}
                placeholder='Email'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setEmail(text)}
                value={email}
                maxLength={20}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
              />
              <Text style={
                {
                  color: '#000',
                  fontSize: 16,
                  
                }}>
                Aadhar/Voter card no
          </Text>
              <TextInput
                style={styles.input}
                placeholder='Aadhar/Voter card no'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setcardno(text)}
                value={cardno}
                maxLength={16}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
              />
              <View>
                <View style={{ width: screenWidth * 0.93, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ width: screenWidth * 0.44, }}>
                    <Text style={
                      {
                        color: '#000',
                        fontSize: 16,
                        
                      }}>
                      House no
          </Text>
                    <TextInput
                      style={styles.halfinput}
                      placeholder='House no'
                      placeholderTextColor="#aaaaaa"
                      onChangeText={(text) => setaddresshouseno(text)}
                      value={addresshouseno}
                      maxLength={4}
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                    /></View>
                  <View style={{ width: screenWidth * 0.44, }}>
                    <Text style={
                      {
                        color: '#000',
                        fontSize: 16,
                        
                      }}>
                      City
          </Text>
                    <TextInput
                      style={styles.halfinput}
                      placeholder='City'
                      placeholderTextColor="#aaaaaa"
                      onChangeText={(text) => setaddresscity(text)}
                      value={addresscity}
                      maxLength={10}
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                    /></View></View>
                <View style={{ width: screenWidth * 0.93, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ width: screenWidth * 0.44, }}>
                    <Text style={
                      {
                        color: '#000',
                        fontSize: 16,
                        
                      }}>
                      State
          </Text>
                    <TextInput
                      style={styles.halfinput}
                      placeholder='State'
                      placeholderTextColor="#aaaaaa"
                      onChangeText={(text) => setaddressstate(text)}
                      value={addressstate}
                      maxLength={10}
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                    /></View>
                  <View style={{ width: screenWidth * 0.44, }}>
                    <Text style={
                      {
                        color: '#000',
                        fontSize: 16,
                        
                      }}>
                      Pin Code
          </Text>
                    <TextInput
                      style={styles.halfinput}
                      placeholder='PINCODE'
                      placeholderTextColor="#aaaaaa"
                      value={addresspincode}
                      maxLength={6}
                      onChangeText={(text) => setaddresspincode(text)}
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                    /></View></View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
  
        }
  
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: 'white'
    },
    input: {
      width: screenWidth * 0.93,
      height: 45,
      borderRadius: 5,
      overflow: 'hidden',
      backgroundColor: '#eee',
      marginTop: 10,
      marginBottom: 10,
      paddingLeft: 15
    },
    halfinput: {
      width: screenWidth * 0.45,
      height: 45,
      borderRadius: 5,
      overflow: 'hidden',
      backgroundColor: '#eee',
      marginTop: 10,
      marginBottom: 10,
    },
  
    topContainer: {
      backgroundColor: '#694fad',
      flexDirection: 'row',
      paddingVertical: 10,
      borderBottomRightRadius: 200
    },
  
    navigationHeaderContainer: {
      height:50,
      width: screenWidth,
      color: "blue",
      justifyContent: 'center',
      backgroundColor: '#bbb'
    },
  
    navigationHeaderContainerdetailscreen: {
      height: 50,
      width: screenWidth,
      color: "blue",
      justifyContent: 'center',
      backgroundColor: '#bbb'
    },
  
    userImageContainer: {
      marginLeft: 15,
      marginVertical: 8,
      height: screenWidth * 0.2,
      width: screenWidth * 0.2,
      backgroundColor: 'lightgrey',
      borderRadius: screenWidth * 0.3,
    },
  
  
  
  
  
    
  
  });
  
  export default Home;
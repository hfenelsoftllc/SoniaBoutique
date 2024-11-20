import {View, StyleSheet} from 'react-native';
import {Link, Stack} from 'expo-router';
import React from 'react';



export default function NotFoundScreen(){
    return(
        <>
            <Stack.Screen options={{title: 'Oops! Not Found'}} />
            <View style = {styles.container}></View>
            <Link href="/" style = {styles.button}>Go Back to Home Screen</Link>
        </>
    );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  button:{
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
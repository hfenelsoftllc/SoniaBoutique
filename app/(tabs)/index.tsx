import { Text, View, StyleSheet } from "react-native";
import Button from '../components/Button';
//import { Link } from "expo-router";

import ImageViewer from "../components/ImageViewer";

const PlaceHolderImage = require('@/assets/images/background-image.png')

export default function Index() {
  return (
    <View style={styles.container}>
      <View style ={styles.imageContainer}>
        <ImageViewer imgSource={PlaceHolderImage} />
      </View>
      <View style ={styles.footerContainer}>
        <Button theme="primary" label="Choose a Photo" />
        <Button label="Use this Photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#fff',
  },
  button:{
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  imageContainer:{
    flex: 1,
    paddingTop: 28,
  },
  footerContainer:{
    flex: 1/3,
    alignItems: 'center',
  },
  image:{
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

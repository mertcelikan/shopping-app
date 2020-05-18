import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  SafeAreaView,
  Button
} from 'react-native';

import Card from '../UI/Card';

const ProductItem = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
  
    <SafeAreaView style={styles.mainContainer}>
      <TouchableOpacity style={styles.product} onPress={props.onSelect}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.image }} />
        </View>
        <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.title}>{props.price} TL</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.actions}>
        {props.children}
      </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '23%',
    paddingHorizontal: 20
  },
  mainContainer: {
    alignItems: 'center',
    marginHorizontal: '4%',
    marginTop: '1%'
  },

  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 11,
    backgroundColor: 'white',
    height: 160,
    width: 140,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '1%'

  },
  textContainer: {
    marginTop: '0.5%'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 12,
    textAlign: 'center',
    marginTop: '2.5%'
  },
  imageContainer: {
    width: '90%',
    height: '75%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    alignSelf: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    marginTop: '2%'
  },
});

export default ProductItem;

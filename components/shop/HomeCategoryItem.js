import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

const HomeCategoryItem = props => {
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
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        marginHorizontal:'2%'
    },
   
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 11,
        backgroundColor: 'white',
        height: 75,
        width: 75,
        marginTop: 30,
        alignSelf: 'center',
        alignItems: 'center'

    },
    textContainer: {
        marginTop: '2.5%'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 11,
        textAlign: 'center',
    },
    imageContainer:{
        width: '90%',
        height: '90%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden',
        alignSelf: 'center',
        alignItems: 'center'
    }, 
    image: {
        width: '100%',
        height: '100%',
        marginTop: '5%'
    },
});
export default HomeCategoryItem;

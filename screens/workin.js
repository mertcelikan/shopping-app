import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Button} from 'react-native';


const workin = props => {
    const filtred = 1
    const filtred2 = 2
    return (
        <SafeAreaView>
            <Button 
            title="1" 
            onPress={() => {props.navigation.navigate('ProductsOverview', {filtre: filtred})}}/>
            <Button 
            title="2" 
            onPress={() => {props.navigation.navigate('ProductsOverview', {filtre: filtred2})}}/>
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({

});

export default workin;
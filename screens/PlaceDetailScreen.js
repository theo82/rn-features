import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlaceDetaiScreen = props => {
    return (
        <View>
            <Text>PlaceDetaiScreen</Text>
        </View>
    )
}

PlaceDetaiScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('placeTitle')
    }
}

const styles = StyleSheet.create({ });

export default PlaceDetaiScreen;
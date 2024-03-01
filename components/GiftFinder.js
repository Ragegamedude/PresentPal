import {Text, View} from "react-native";
import React from "react";
import {createGiftFinderStyle} from "./GiftFingerStyle";

export default GiftFinder = (props) => {

    const GiftFinderStyle = createGiftFinderStyle(props.currentTheme)

    return (
        <View style={GiftFinderStyle.giftFinderWrapper}>
            <Text>Test</Text>
        </View>
    )

}
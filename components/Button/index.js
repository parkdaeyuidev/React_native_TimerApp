import React, { Component } from 'react';
import propTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { FontAwesome} from "@expo/vector-icons";

Button.propTypes = {
    iconName : propTypes.string.isRequired,
    onPress : propTypes.func.isRequired
}
// {
//     isCounting: true | false,
//     counterDuration: 1500,
//     elapsedTime: 0,
// }
function Button({iconName, onPress}){
    return (
        <TouchableOpacity onPressOut={onPress}>
            <FontAwesome name={iconName} size={80} color="white"/>
        </TouchableOpacity>
    )
}

export default Button;
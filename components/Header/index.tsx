import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { style } from "./style";

export default function Header() {
    return (
        <View style={style.container}>
            <TouchableOpacity>
                <Image
                    style={style.perfil}
                    source={{
                        
                       uri: 'https://i.pinimg.com/564x/ec/79/98/ec79984d17ceda9a213be551926123fb.jpg'}}
                />
            </TouchableOpacity>
            <View>
                <Text style={style.character}>Babidi</Text>
                <Text style={style.username}>Robson#0001</Text>
            </View>
        </View>
    );
}

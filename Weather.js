import React from 'react';
import {View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from 'prop-types';
import { LinearGradient} from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {

    Thunderstorm : {
        iconName: "weather-lightning",
        gradient: ["#ffd89b", "19547b"],
        title: "Thunderstorm",
        subTitle: "clap of thunder!!"

    }, 
    Drizzle : {
        iconName: "weather-rainy",
        gradient: ["#00d2ff", "#928dab"],
        title: "Drizzle",
        subTitle: "Rain..? or Sunny..?"
    }, 
    Rain : {
        iconName: "weather-pouring",
        gradient: ["#0575E6","#021B79"],
        title: "Rain",
        subTitle: "Do I have an umbrella..?"
    }, 
    Snow : {
        iconName: "weather-snowy",
        gradient: ["#43C6AC", "#191654"],
        title: "Snow",
        subTitle: "Hello Snowman"
    }, 
    Atmosphere : {
        iconName: "weather-sunset",
        gradient: ["#FFAFBD", "#ffc3a0"],
        title: "Atmosphere",
        subTitle: "What am I..?"
    }, 
    Clear : {
        iconName: "weather-sunny",
        gradient: ["#F8FFAE", "#43C6AC"],
        title: "Clear",
        subTitle: "nice to meet you."
    }, 
    Clouds : {
        iconName: "weather-cloudy",
        gradient: ["#B06AB3", "#4568DC"],
        title: "Clouds",
        subTitle: "Please Show me the sun.."
    },
    Mist : {
        iconName: "weather-partlycloudy",
        gradient: ["#c0c0aa", "#1cefff"],
        title: "Mist",
        subTitle: "Watch out for driving"
    },
    Smoke : {
        iconName: "weather-partlycloudy",
        gradient: ["#808080", "3fada8"],
        title: "smoke",
        subTitle: "May I see the sun..?"
    },
    Haze : {
       iconName: "weather-fog", 
       gradient: ["#4da0b0", "#d39d38"],
       title: "Haze",
       subTitle: "Watch out for driving"

    },
    Dust : {
        iconName: "weather-partlycloudy",
        gradient: ["#fd746c", "2c3d50"],
        title: "Dust",
        subTitle: "May I see the sun..?"
        
    },
    Fog : {
        iconName: "weather-fog",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "Fog",
        subTitle: "Watch out for driving"
    },
    Sand : {
        iconName: "weather-partlycloudy",
        gradient: ["#be5869", "#403a3e"],
        title: "Sand",
        subTitle: "Please close your mouth.."
    },
    Ash : {
        iconName: "weather-fog",
        gradient: ["#DBE6F6", "#C5796D"],
        title: "Ash",
        subTitle: "I have one question.. Is it hot??"
    },
    Squall : {
        iconName: "weather-rainy",
        gradient: ["#F0F2F0", "#000C40"],
        title: "Squall",
        subTitle: "Watch out for wet clothes.."
    },
    Tornado : {
        iconName: "weather-hurricane",
        gradient: ["#237A57", "#093028"],
        title: "Tornado",
        subTitle: "Be careful not to fly"
    }

}

export default function Weather({temp, condition}) {
    return (
        <LinearGradient
          colors={weatherOptions[condition].gradient}
          style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    name={weatherOptions[condition].iconName} 
                    size={92} 
                    color="white"
                />
                <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={{ ...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Dust",
        "Ash",
        "Squall",
        "Tornado"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color:"white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subTitle: {
        color:"white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }


})
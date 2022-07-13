import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Movie } from "../interfaces/movieInterface";

interface Props {
    movie: Movie;
}
export const MoviePoster = ( { movie }:Props ) => {
    const uri = `http://image.tmdb.org/t/p/w500${ movie.poster_path }`
    return (
        <View style={styles.viewImage}>
            <View style={styles.imageContainer}>
                <Image source={{ uri }} style={ styles.image }/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewImage: {
        width: 300,
        height: 420,
    },
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 10,
        borderRadius: 18
    }
})
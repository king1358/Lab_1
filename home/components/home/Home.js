import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import { StatusBar, ScrollView, Image, TouchableOpacity } from "react-native";

export default function HomeScreen() {
    const [musicplayed, setMusic] = useState([
        { name: 'Dịu Dàng Em Đến', img: require('../../assets/Music/dded.jpg'), id : 1},
        { name: 'Nắng ấm xa dần', img: require('../../assets/Music/naxd.jpeg'),id:2 },
        { name: 'Tháng tư là lời nói dối của em', img: require('../../assets/Music/t4llnd.jpg'),id:3 },
        { name: 'Anh ơi ở lại', img: require('../../assets/Music/aool.jpg'),id:4 },
        { name: 'Thu Cuối', img: require('../../assets/Music/tc.jpg'),id:5 },
        { name: 'Tình Yêu Màu Nắng', img: require('../../assets/Music/tymn.png'),id:6 },
    ]);
    return (
        <LinearGradient
            colors={["#171518", "#171518"]}
            end={[0.05, 0.5]}
            style={styles.LinearGradient}
        >
            <View style={styles.container}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.header}>
                        <Text style={styles.textHeader}>Home</Text>
                    </View>
                    <View
                        style={{ borderBottomColor: "white", borderBottomWidth: 1.75 }}
                    />
                    <View style={styles.body}>
                        <View style={styles.option}>
                            <View style={styles.formOption}>
                                <Text style={styles.textForm}>Recently Played</Text>
                                <ScrollView style={styles.scrollHorizontal} horizontal={true}>
                                    {musicplayed.map((music) => {
                                        return (
                                            <TouchableOpacity key ={music.id} 
                                                onPress={() => {
                                                    alert(music.name)
                                                }}>
                                            <View >
                                                <Image style={styles.img}
                                                    source={music.img}
                                                />
                                                <Text style={styles.textDivForm}>{music.name}</Text>
                                            </View>
                                            </TouchableOpacity>
                                        )
                                    })}
                                </ScrollView>
                            </View>

                            {/* ========================================= */}

                            <View style={styles.formOption}>
                                <Text style={styles.textForm}>Trend</Text>
                                <ScrollView style={styles.scrollHorizontal} horizontal={true}>
                                    {musicplayed.map((music) => {
                                        return (
                                            <TouchableOpacity key ={music.id}
                                            onPress={() => { //call playing music UI
                                                alert(music.name)
                                            }}>
                                            <View key ={music.id}>
                                                <Image style={styles.img}
                                                    source={music.img}
                                                />
                                                <Text style={styles.textDivForm}>{music.name}</Text>
                                            </View>
                                            </TouchableOpacity>
                                        )
                                    })}
                                </ScrollView>
                            </View>

                            {/* ====================================== */}
                            <View style={styles.formOption}>
                                <Text style={styles.textForm}>Hot Music</Text>
                                <ScrollView style={styles.scrollHorizontal} horizontal={true}>
                                    {musicplayed.map((music) => {
                                        return (
                                            <TouchableOpacity key ={music.id} onPress={() => {
                                                alert(music.name)
                                            }}>
                                            <View key ={music.id}>
                                                <Image style={styles.img}
                                                    source={music.img}
                                                />
                                                <Text style={styles.textDivForm}>{music.name}</Text>
                                            </View>
                                            </TouchableOpacity>
                                        )
                                    })}
                                </ScrollView>
                            </View>
                            <View style={styles.formOption}>
                                <Text style={styles.textForm}>Category</Text>
                                <ScrollView style={styles.scrollHorizontal} horizontal={true}>
                                    {musicplayed.map((music) => {
                                        return (
                                            <TouchableOpacity key ={music.id} onPress={() => {
                                                alert(music.name)
                                            }}>
                                            <View key ={music.id}>
                                                <Image style={styles.img}
                                                    source={music.img}
                                                />
                                                <Text style={styles.textDivForm}>{music.name}</Text>
                                            </View>
                                            </TouchableOpacity>
                                        )
                                    })}
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    LinearGradient: {
        flex: 1,
    },
    container: {
        flex: 10,
        paddingTop: StatusBar.currentHeight,
    },
    header: {
        flex: 1,
    },
    textHeader: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        left: "2%",
    },
    body: {
        flex: 1,
    },
    option: {
        flex: 1,
    },
    textForm: {
        marginTop: 10,
        marginBottom: 10,
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },
    scrollHorizontal: {
        flexDirection: "row",
    },
    img: {
        width: 100,
        height: 100,
        marginLeft: 14,
        marginRight: 20,
    },
    textDivForm: {
        color: "white",
        marginLeft: 14,
        width: 100,
        justifyContent: "center",
        textAlign: "center",
    },
    formOption: {
        flex: 1,
        backgroundColor: "yellow",
        marginTop: 8,
        marginBottom: 8,
        backgroundColor: "#201E21",
    },
});
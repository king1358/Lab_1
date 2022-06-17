import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import { StatusBar, ScrollView, Image, TouchableOpacity } from "react-native";

export default function HomeScreen() {
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
                                <View>
                                    <View>
                                        <View style={styles.img} />
                                        <Text style={styles.textDivForm}></Text>
                                    </View>
                                </View>
                            </View>

                            {/* ========================================= */}

                            <View style={styles.formOption}>
                                <Text style={styles.textForm}>Trend</Text>
                                <View>
                                    <View>
                                        <View style={styles.img} />
                                        <Text style={styles.textDivForm}></Text>
                                    </View>
                                </View>
                            </View>

                            {/* ====================================== */}
                            <View style={styles.formOption}>
                                <Text style={styles.textForm}>Hot Music</Text>
                                <View>
                                    <View>
                                        <View style={styles.img} />
                                        <Text style={styles.textDivForm}></Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.formOption}>
                                <Text style={styles.textForm}>Category</Text>
                                <View >
                                    <View>
                                        <View style={styles.img} />
                                        <Text style={styles.textDivForm}></Text>
                                    </View>
                                </View>
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
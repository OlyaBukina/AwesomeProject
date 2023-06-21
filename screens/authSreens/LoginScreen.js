import { useState } from "react";
import {
    ImageBackground,
    Image,
    View,
    StyleSheet,
    Text,
    Pressable,
    TextInput,
} from "react-native";
import BgImage from "../../assets/images/bg-auth.jpg";
import { styles } from "./RegistrationScreen.styled";

export const LoginScreen = ({ onLayout }) => {
    return (
        <View style={styles.container} onLayout={onLayout}>
            <ImageBackground
                source={BgImage}
                style={styles.bgImage}
                resizeMode="cover"
            >
                <View
                    style={{
                        ...styles.registrationContainer,
                        paddingTop: 32,
                        paddingBottom: 132,
                        height: 489,
                    }}
                >
                    <Text style={styles.title}>Увійти</Text>

                    <View style={styles.formWrapper}>
                        <View style={styles.formItem}>
                            <TextInput
                                style={styles.formInput}
                                placeholder="Адреса електронної пошти"
                                placeholderTextColor={"#bdbdbd"}
                            ></TextInput>
                        </View>
                        <View style={styles.formItem}>
                            <TextInput
                                style={styles.formInput}
                                placeholder="Пароль"
                                placeholderTextColor={"#bdbdbd"}
                            ></TextInput>
                            <Pressable>
                                <Text style={styles.showPasswordBtn}>
                                    Показати
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                    <Pressable style={styles.submitBtn}>
                        <Text style={styles.submitBtnText}>Увійти</Text>
                    </Pressable>
                    <Pressable>
                        <Text style={styles.checkBtn}>
                            Немає акаунту? Зареєструватися
                        </Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    );
};

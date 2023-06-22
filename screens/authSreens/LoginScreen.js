import { useState } from "react";
import {
    ImageBackground,
    View,
    Text,
    Pressable,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
} from "react-native";
import BgImage from "../../assets/images/bg-auth.jpg";
import { styles } from "./RegistrationScreen.styled";

const initialState = {
    email: "",
    password: "",
};

export const LoginScreen = ({ onLayout }) => {
    const [inputName, setinputName] = useState("");
    const [state, setState] = useState(initialState);

    const [isShowKeyboard, setIsShowKeyboard] = useState(false);

    const keyBordHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={keyBordHide}>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <View
                    style={{
                        ...styles.container,
                        marginBottom: isShowKeyboard ? -235 : 0,
                    }}
                    onLayout={onLayout}
                >
                    <ImageBackground
                        source={BgImage}
                        style={styles.bgImage}
                        resizeMode="stretch"
                    >
                        <View
                            style={{
                                ...styles.registrationContainer,
                                paddingTop: 32,
                                paddingBottom: 111,
                                height: 489,
                            }}
                        >
                            <Text style={styles.title}>Увійти</Text>

                            <View style={styles.formWrapper}>
                                <TextInput
                                    style={
                                        inputName === "email"
                                            ? styles.inputFocused
                                            : styles.formInput
                                    }
                                    placeholder="Адреса електронної пошти"
                                    placeholderTextColor={"#bdbdbd"}
                                    onFocus={() => {
                                        setinputName("email");
                                        setIsShowKeyboard(true);
                                    }}
                                    onChangeText={(value) =>
                                        setState((prevState) => ({
                                            ...prevState,
                                            email: value,
                                        }))
                                    }
                                ></TextInput>

                                <View style={{ position: "relative" }}>
                                    <TextInput
                                        style={
                                            inputName === "password"
                                                ? styles.inputFocused
                                                : styles.formInput
                                        }
                                        placeholder="Пароль"
                                        placeholderTextColor={"#bdbdbd"}
                                        onFocus={() => {
                                            setinputName("password");
                                            setIsShowKeyboard(true);
                                        }}
                                        onChangeText={(value) =>
                                            setState((prevState) => ({
                                                ...prevState,
                                                password: value,
                                            }))
                                        }
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
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

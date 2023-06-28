import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

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
import { AntDesign } from "@expo/vector-icons";
import BgImage from "../../assets/images/bg-auth.jpg";
import { styles } from "./RegistrationScreen.styled";

const initialState = {
    login: "",
    email: "",
    password: "",
};

export const RegistrationScreen = ({ onLayout }) => {
    const [inputName, setinputName] = useState("");
    const [state, setState] = useState(initialState);
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const navigation = useNavigation();

    const keyBordHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
    };

    const submitForm = () => {
        if (state.login === "" || state.email === "" || state.password === "") {
            return;
        }
        console.log(state);
        navigation.navigate("Home");
        setState(initialState);
    };

    return (
        <TouchableWithoutFeedback onPress={keyBordHide}>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <View style={styles.container} onLayout={onLayout}>
                    <ImageBackground
                        source={BgImage}
                        style={styles.bgImage}
                        resizeMode="cover"
                    >
                        <View style={styles.registrationContainer}>
                            <View style={styles.photoWrapper}>
                                <Pressable style={styles.addIcon}>
                                    <AntDesign
                                        name="pluscircleo"
                                        size={25}
                                        color="#FF6C00"
                                    />
                                </Pressable>
                            </View>
                            <Text style={styles.title}>Реєстрація</Text>

                            <View style={styles.formWrapper}>
                                <TextInput
                                    style={
                                        inputName === "login"
                                            ? styles.inputFocused
                                            : styles.formInput
                                    }
                                    placeholder="Логін"
                                    placeholderTextColor={"#bdbdbd"}
                                    value={state.login}
                                    onFocus={() => {
                                        setinputName("login");
                                        setIsShowKeyboard(true);
                                    }}
                                    onBlur={() => setIsShowKeyboard(false)}
                                    onChangeText={(value) =>
                                        setState((prevState) => ({
                                            ...prevState,
                                            login: value,
                                        }))
                                    }
                                ></TextInput>

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
                                    onBlur={() => setIsShowKeyboard(false)}
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
                                        onBlur={() => setIsShowKeyboard(false)}
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
                            <Pressable
                                style={styles.submitBtn}
                                onPress={submitForm}
                            >
                                <Text style={styles.submitBtnText}>
                                    Зареєстуватися
                                </Text>
                            </Pressable>
                            <Pressable
                                onPress={() => navigation.navigate("Login")}
                            >
                                <Text style={styles.checkBtn}>
                                    Вже є акаунт? Увійти
                                </Text>
                            </Pressable>
                        </View>
                    </ImageBackground>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

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
  Alert,
} from "react-native";
import BgImage from "../../assets/images/bg-auth.jpg";
import { styles } from "./RegistrationScreen.styled";
import { logIn } from "../../redux/auth/operations";

export const LoginScreen = ({ onLayout }) => {
  const [inputName, setinputName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const keyBordHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const submitForm = () => {
    if (email === "" || password === "") {
      return Alert.alert(
        "Не коректні дані",
        "Будь ласка, заповніть всі поля непустими даними"
      );
    }

    dispatch(logIn({ email, password }));
    navigation.navigate("Home");
    setEmail("");
    setPassword("");
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
                  onBlur={() => setIsShowKeyboard(false)}
                  onChangeText={(value) => setEmail(value)}
                  value={email}
                ></TextInput>

                <View style={{ position: "relative" }}>
                  <TextInput
                    value={password}
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
                    onChangeText={(value) => setPassword(value)}
                  ></TextInput>
                  <Pressable>
                    <Text style={styles.showPasswordBtn}>Показати</Text>
                  </Pressable>
                </View>
              </View>
              <Pressable style={styles.submitBtn} onPress={submitForm}>
                <Text style={styles.submitBtnText}>Увійти</Text>
              </Pressable>
              <Pressable onPress={() => navigation.navigate("Registration")}>
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

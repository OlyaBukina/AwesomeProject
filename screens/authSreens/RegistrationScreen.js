import {
    ImageBackground,
    View,
    Text,
    Pressable,
    TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import BgImage from "../../assets/images/bg-auth.jpg";
import { styles } from "./RegistrationScreen.styled";

export const RegistrationScreen = ({ onLayout }) => {
    return (
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
                        <View style={styles.formItem}>
                            <TextInput
                                style={styles.formInput}
                                placeholder="Логін"
                                placeholderTextColor={"#bdbdbd"}
                            ></TextInput>
                        </View>
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
                        <Text style={styles.submitBtnText}>Зареєстуватися</Text>
                    </Pressable>
                    <Pressable>
                        <Text style={styles.checkBtn}>
                            Вже є акаунт? Увійти
                        </Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    );
};

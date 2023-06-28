import {
    ImageBackground,
    StyleSheet,
    Pressable,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { styles } from "./CreatePostsScreen.styled";
import { useState } from "react";
export const CreatePostsScreen = () => {
    const [postName, setPostName] = useState("");
    const [postLocation, setPostLocation] = useState("");
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const keyBordHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
    };
    const submitForm = () => {
        if (postName === "" || postLocation === "") {
            return;
        }
        console.log(state);
        // setPostName("");
        // setPostLocation("");
    };

    return (
        <TouchableWithoutFeedback onPress={keyBordHide}>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <View style={styles.mainForm}>
                    <View style={styles.photoWrapper}>
                        <View style={styles.iconWrapper}>
                            <MaterialIcons
                                name="camera-alt"
                                size={24}
                                color="#BDBDBD"
                            />
                        </View>
                    </View>
                    <Text style={styles.callText}>Завантажте фото</Text>
                    <View style={styles.secondaryForm}>
                        <TextInput
                            style={styles.input}
                            placeholder="Назва..."
                            placeholderTextColor="#BDBDBD"
                            onFocus={() => {
                                setIsShowKeyboard(true);
                            }}
                            onBlur={() => setIsShowKeyboard(false)}
                            onChangeText={(value) => setPostName(value)}
                            value={postName}
                        ></TextInput>
                        <View style={{ position: "relative" }}>
                            <TextInput
                                style={{ ...styles.input, paddingLeft: 28 }}
                                placeholder="Місцевість..."
                                placeholderTextColor="#BDBDBD"
                                onFocus={() => {
                                    setIsShowKeyboard(true);
                                }}
                                onBlur={() => setIsShowKeyboard(false)}
                                onChangeText={(value) => setPostLocation(value)}
                                value={postLocation}
                            ></TextInput>
                            <Feather
                                style={styles.iconMap}
                                name="map-pin"
                                size={24}
                                color="#BDBDBD"
                            />
                        </View>
                    </View>
                    <Pressable style={styles.submitBtn} onPress={submitForm}>
                        <Text style={styles.submitBtnText}>Опубліковати</Text>
                    </Pressable>
                </View>
                <View style={styles.deleteBtnContainer}>
                    <Pressable style={styles.deleteBtn} onPress={submitForm}>
                        <Feather name="trash-2" size={24} color="#BDBDBD" />
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

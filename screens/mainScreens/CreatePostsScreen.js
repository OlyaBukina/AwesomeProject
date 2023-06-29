import {
    Pressable,
    Text,
    View,
    Image,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
} from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { styles } from "./CreatePostsScreen.styled";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

export const CreatePostsScreen = ({ navigation }) => {
    const [postName, setPostName] = useState("");
    const [photo, setPhoto] = useState("");
    const [location, setLocation] = useState("");
    const [currentLocation, setCurrentLocation] = useState("");
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [data, setData] = useState(false);

    useEffect(() => {
        const isAllDataFilled = () => {
            if (photo === "" || postName === "" || location === "") {
                setData(true);
            } else {
                setData(false);
            }
        };
        isAllDataFilled();
    }, [photo, postName, location]);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            await MediaLibrary.requestPermissionsAsync();

            setHasPermission(status === "granted");
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    const keyBordHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
    };

    const submitForm = async () => {
        if (data) {
            return;
        }
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                console.log("Permission to access location was denied");
            }

            let location = await Location.getCurrentPositionAsync({});
            const coords = {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            };
            setCurrentLocation(coords);
        })();
        navigation.navigate("PostsScreen");
        deletePost();
    };
    const deletePost = () => {
        setPhoto("");
        setPostName("");
        setLocation("");
    };
    return (
        <TouchableWithoutFeedback onPress={keyBordHide}>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <View style={styles.mainForm}>
                    <View style={styles.photoWrapper}>
                        <Camera
                            style={styles.camera}
                            type={type}
                            ref={setCameraRef}
                        >
                            <View style={styles.photoWrapper}>
                                {photo && (
                                    <Image
                                        style={styles.photo}
                                        source={{ uri: photo }}
                                    />
                                )}
                                <TouchableOpacity
                                    disabled={Boolean(photo)}
                                    style={{
                                        ...styles.cameraBtn,
                                        backgroundColor: photo
                                            ? "#ffffff4d"
                                            : "#fff",
                                    }}
                                    onPress={async () => {
                                        if (cameraRef) {
                                            const { uri } =
                                                await cameraRef.takePictureAsync();
                                            await MediaLibrary.createAssetAsync(
                                                uri
                                            );
                                            setPhoto(uri);
                                        }
                                    }}
                                >
                                    <MaterialIcons
                                        name="camera-alt"
                                        size={24}
                                        color={photo ? "#fff" : "#BDBDBD"}
                                    />
                                </TouchableOpacity>
                            </View>
                        </Camera>
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
                                onChangeText={(value) => setLocation(value)}
                                value={location}
                            ></TextInput>
                            <Feather
                                style={styles.iconMap}
                                name="map-pin"
                                size={24}
                                color="#BDBDBD"
                            />
                        </View>
                    </View>
                    <Pressable
                        style={{
                            ...styles.submitBtn,
                            backgroundColor: data ? "#F6F6F6" : "#FF6C00",
                        }}
                        onPress={submitForm}
                        disabled={data}
                    >
                        <Text
                            style={{
                                ...styles.submitBtnText,
                                color: data ? "#BDBDBD" : "#fff",
                            }}
                        >
                            Опубліковати
                        </Text>
                    </Pressable>
                </View>
                <View style={styles.deleteBtnContainer}>
                    <Pressable
                        style={styles.deleteBtn}
                        onPress={deletePost}
                        disabled={!data}
                    >
                        <Feather name="trash-2" size={24} color="#BDBDBD" />
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

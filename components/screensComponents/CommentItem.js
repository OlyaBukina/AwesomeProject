import { useState } from "react";
import {
    Image,
    View,
    Text,
    Pressable,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
    ScrollView,
} from "react-native";
import ellipse from "../../assets/images/ellipse.jpg";
import { styles } from "./CommentItems.styled";

export const CommentItem = ({ isOwner = false }) => {
    return (
        <View
            style={{
                ...styles.container,
                flexDirection: isOwner ? "row-reverse" : "row",
            }}
        >
            <Image source={ellipse} style={styles.avatar}></Image>
            <View
                style={{
                    ...styles.commentWrapper,
                    borderTopRightRadius: isOwner ? 0 : 6,
                    borderTopLeftRadius: isOwner ? 6 : 0,
                }}
            >
                <Text style={styles.commentText}>
                    Really love your most recent photo. I’ve been trying to
                    capture the same thing for a few months and would love some
                    tips!
                </Text>
                <Text
                    style={{
                        ...styles.commentDate,
                        textAlign: isOwner ? "left" : "right",
                    }}
                >
                    09 червня, 2020 | 08:40
                </Text>
            </View>
        </View>
    );
};

import { useState } from "react";

import {
    Image,
    View,
    Pressable,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Platform,
} from "react-native";
import { styles } from "./CommentsScreen.styled";
import postImage from "../../assets/images/postImage.jpg";
import { SendIcon } from "../../components/icons/SendIcon";
import { CommentItem } from "../../components/screensComponents/CommentItem";

export const CommentsScreen = () => {
    const [comment, setComment] = useState("");
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);

    const keyBordHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
    };

    const sendComment = () => {
        if (comment === "") {
            return;
        }
        console.log(comment);
        setComment("");
    };

    return (
        <TouchableWithoutFeedback onPress={keyBordHide}>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.container}
                keyboardVerticalOffset={60}
            >
                <View style={{ flex: 1, paddingBottom: 32 }}>
                    <Image source={postImage} style={styles.postImage}></Image>
                    <View style={styles.commentsWrapper}>
                        <CommentItem />
                        <CommentItem isOwner={true} />
                    </View>
                    <View style={styles.sendCommentWrapper}>
                        <TextInput
                            style={styles.commentInput}
                            placeholder="Коментувати..."
                            placeholderTextColor="#BDBDBD"
                            onFocus={() => setIsShowKeyboard(true)}
                            onBlur={() => setIsShowKeyboard(false)}
                            onChangeText={(value) => setComment(value)}
                            value={comment}
                        ></TextInput>
                        <Pressable style={styles.sendBtn} onPress={sendComment}>
                            <SendIcon />
                        </Pressable>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

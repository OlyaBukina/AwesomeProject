import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,

        paddingTop: 32,
        backgroundColor: "#fff",
    },
    postImage: {
        width: "100%",
        borderRadius: 8,
        height: 240,
        marginBottom: 32,
    },
    commentsWrapper: {
        gap: 24,
        marginBottom: 31,
        ...Platform.select({
            ios: {
                flex: 1,
            },
        }),
    },
    sendCommentWrapper: {
        position: "relative",
    },
    commentInput: {
        width: "100%",
        height: 50,
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 25,
        borderColor: "#E8E8E8",
        borderWidth: 1,
        backgroundColor: "#F6F6F6",
    },
    sendBtn: {
        position: "absolute",
        top: 8,
        right: 8,
        backgroundColor: "#FF6C00",
        width: 34,
        height: 34,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 17,
    },
});

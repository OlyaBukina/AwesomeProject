import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: 16,
    },
    avatar: {
        width: 28,
        height: 28,
        borderRadius: 14,
    },
    commentWrapper: {
        flex: 1,
        display: "flex",
        gap: 8,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        backgroundColor: "#00000008",
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    commentText: {
        fontFamily: "Roboto-Regular",
        fontSize: 13,
        lineHeight: 18,
        color: "#212121",
    },
    commentDate: {
        fontFamily: "Roboto-Regular",
        fontSize: 10,
        color: "#BDBDBD",
        textAlign: "right",
    },
});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        gap: 8,
    },
    photoWrapper: {
        height: 240,
        // width: "100%",
        borderRadius: 8,
        marginBottom: 8,
    },

    postImage: { width: "100%", borderRadius: 8, height: 240 },
    postTitle: { fontFamily: "Roboto-Medium", fontSize: 16 },
    postDetails: {
        display: "flex",
        flexDirection: "row",
    },
    detailsItem: { gap: 6, alignItems: "center", flexDirection: "row" },
    detailsText: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        color: "#212121",
    },
    commentsIcon: {},
});

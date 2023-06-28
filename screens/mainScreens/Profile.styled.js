import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgImage: {
        flex: 1,
        justifyContent: "flex-end",
        paddingTop: 165,
    },
    profileContainer: {
        position: "relative",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 53,
        paddingTop: 92,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    photoWrapper: {
        width: 120,
        height: 120,
        position: "absolute",
        top: -60,
    },
    userAvatar: {
        borderRadius: 16,
    },
    addIcon: {
        position: "absolute",
        right: -12.5,
        top: 81,

        borderRadius: 12.5,
        backgroundColor: "#fff",
    },
    logOutIcon: { position: "absolute", right: 16, top: 22 },
    title: {
        fontFamily: "Roboto-Medium",
        fontSize: 30,
        letterSpacing: 0.3,
        marginBottom: 33,
    },
    postsWrapper: {
        width: "100%",
        display: "flex",
        gap: 32,
    },
});

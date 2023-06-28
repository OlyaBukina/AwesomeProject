import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        width: "100%",
        backgroundColor: "#fff",
    },
    header: {
        height: 88,
        borderBottomWidth: 1,
        borderBottomColor: "#0000004d",
        width: "100%",
        paddingBottom: 11,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
    },

    logOut: {
        position: "absolute",
        bottom: 10,
        right: 16,
        width: 24,
        height: 24,
    },
    headerTitle: {
        fontFamily: "Roboto-Medium",
        fontSize: 17,
    },
    userAvatar: {
        width: 60,
        height: 60,
    },
    screenWrapper: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 32,
    },
    userWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginBottom: 32,
    },
    infoWrapper: {
        display: "flex",
    },
    userName: {
        fontFamily: "Roboto-Bold",
        fontSize: 13,
        lineHeight: 15,
    },
    userEmail: {
        fontFamily: "Roboto-Medium",
        fontSize: 11,
        lineHeight: 13,
        color: "#212121cc",
    },
    footer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: 9,
        gap: 31,
        borderTopWidth: 1,
        borderTopColor: "#0000004d",
        height: 83,
    },
    activeTabBtn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF6C00",
        borderRadius: 20,
        width: 70,
        height: 40,
    },

    buttonWrapper: {
        backgroundColor: "#FFF",
    },
    postsWrapper: {
        width: "100%",
        display: "flex",
        gap: 32,
    },
});

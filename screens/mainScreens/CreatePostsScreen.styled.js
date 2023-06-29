import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        display: "flex",
        alignItems: "center",
        paddingTop: 32,
        paddingBottom: 34,
        paddingHorizontal: 16,
    },
    mainForm: {
        width: "100%",
        marginBottom: "auto",
    },
    cameraContainer: { height: 240, width: "100%", borderRadius: 8 },
    camera: { flex: 1, width: "100%" },

    photoWrapper: {
        height: 240,
        width: "100%",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 8,
    },
    photo: {
        height: 240,
        width: "100%",
        position: "absolute",
        top: 0,
        right: 0,
    },
    cameraBtn: {
        backgroundColor: "#fff",
        width: 60,
        height: 60,
        borderRadius: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    callText: {
        color: "#BDBDBD",
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        marginBottom: 32,
    },
    secondaryForm: {
        display: "flex",
        gap: 16,
        marginBottom: 32,
    },
    input: {
        paddingBottom: 15,
        paddingTop: 16,
        borderBottomColor: "#E8E8E8",
        borderBottomWidth: 1,
    },
    iconMap: {
        position: "absolute",
        bottom: 17,
        left: 0,
    },
    submitBtn: {
        backgroundColor: "#F6F6F6",
        borderRadius: 100,
        width: "100%",
        height: 51,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    submitBtnText: {
        fontFamily: "Roboto-Regular",
        color: "#BDBDBD",
        fontSize: 16,
    },
    deleteBtnContainer: {
        height: 83,
        paddingTop: 9,
    },
    deleteBtn: {
        backgroundColor: "#F6F6F6",
        borderRadius: 20,
        width: 70,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        ...Platform.select({
            android: {
                marginTop: "auto",
            },
        }),
    },
});

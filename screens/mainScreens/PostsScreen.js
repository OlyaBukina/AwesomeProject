import { Image, View, Text, Pressable, TextInput } from "react-native";
import { styles } from "./PostScreen.styled";
import userAvatar from "../../assets/images/userAvatar.jpg";
import { LogoutIcon } from "../../components/icons/LogoutIcon";
import { GridIcon } from "../../components/icons/GridIcon";
import { AddPostIcon } from "../../components/icons/AddPostIcon";
import { UserIcon } from "../../components/icons/UserIcon";

export const PostScreen = ({ onLayout }) => {
    return (
        <View style={styles.container} onLayout={onLayout}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Публікації</Text>
                <Pressable style={styles.logOut}>
                    <LogoutIcon />
                </Pressable>
            </View>
            <View style={styles.screenWrapper}>
                <View style={styles.userWrapper}>
                    <Image
                        source={userAvatar}
                        style={styles.userAvatar}
                    ></Image>
                    <View style={styles.infoWrapper}>
                        <Text style={styles.userName}>Natali Romanova</Text>
                        <Text style={styles.userEmail}>email@example.com</Text>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <Pressable>
                    <GridIcon />
                </Pressable>
                <Pressable style={styles.AddPostIcon}>
                    <AddPostIcon />
                </Pressable>
                <Pressable>
                    <UserIcon />
                </Pressable>
            </View>
        </View>
    );
};

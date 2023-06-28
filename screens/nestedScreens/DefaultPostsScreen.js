import { Image, View, Text, ScrollView } from "react-native";
import { styles } from "./DefaultPostScreen.styled";
import userAvatar from "../../assets/images/userAvatar.jpg";
import { PostItem } from "../../components/screensComponents/PostItem";

export const DefaultPostsScreen = ({ onLayout }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.container} onLayout={onLayout}>
                <View style={styles.screenWrapper}>
                    <View style={styles.userWrapper}>
                        <Image
                            source={userAvatar}
                            style={styles.userAvatar}
                        ></Image>
                        <View style={styles.infoWrapper}>
                            <Text style={styles.userName}>Natali Romanova</Text>
                            <Text style={styles.userEmail}>
                                email@example.com
                            </Text>
                        </View>
                    </View>
                    <View style={styles.postsWrapper}>
                        <PostItem />
                        <PostItem />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

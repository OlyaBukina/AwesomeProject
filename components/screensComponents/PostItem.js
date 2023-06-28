import {
    View,
    Image,
    Text,
    Pressable,
} from "react-native";
import postImage from "../../assets/images/postImage.jpg";
import { styles } from "./PostItem.styled";
import { Feather } from "@expo/vector-icons";
import { CommentsIcon } from "../../components/icons/CommentsIcon";
import { useNavigation } from "@react-navigation/native";

export const PostItem = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={postImage} style={styles.postImage}></Image>
            <Text style={styles.postTitle}>Ліс</Text>
            <View style={styles.postDetails}>
                <Pressable
                    style={{ ...styles.detailsItem, marginRight: 24 }}
                    onPress={() => navigation.navigate("Comments")}
                >
                    <CommentsIcon />
                    <Text style={styles.detailsText}>8</Text>
                </Pressable>
                <View style={{ ...styles.detailsItem, marginRight: "auto" }}>
                    <Feather name="thumbs-up" size={24} color="#FF6C00" />
                    <Text style={styles.detailsText}>153</Text>
                </View>
                <Pressable
                    style={styles.detailsItem}
                    onPress={() => navigation.navigate("Map")}
                >
                    <Feather
                        style={styles.iconMap}
                        name="map-pin"
                        size={24}
                        color="#BDBDBD"
                    />
                    <Text
                        style={{
                            ...styles.detailsText,
                            textDecorationLine: "underline",
                        }}
                    >
                        Ukraine
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

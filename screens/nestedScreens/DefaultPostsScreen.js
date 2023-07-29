import { Image, View, Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { styles } from "./DefaultPostScreen.styled";
import userAvatar from "../../assets/images/userAvatar.jpg";
import { PostItem } from "../../components/screensComponents/PostItem";

export const DefaultPostsScreen = ({ onLayout }) => {
  const user = useSelector(selectUser);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container} onLayout={onLayout}>
        <View style={styles.screenWrapper}>
          <View style={styles.userWrapper}>
            <Image source={userAvatar} style={styles.userAvatar}></Image>
            <View style={styles.infoWrapper}>
              <Text style={styles.userName}>{user.login}</Text>
              <Text style={styles.userEmail}>{user.email}</Text>
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

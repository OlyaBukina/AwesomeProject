import { useState } from "react";
import {
  ImageBackground,
  View,
  Image,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./Profile.styled";
import BgImage from "../../assets/images/bg-auth.jpg";
import { PostItem } from "../../components/screensComponents/PostItem";
import { AntDesign, Feather } from "@expo/vector-icons";
import userAvatar from "../../assets/images/userAvatar.jpg";
import { useNavigation } from "@react-navigation/native";
import { selectUser } from "../../redux/auth/selectors";

export const Profile = () => {
  const user = useSelector(selectUser);
  const navigation = useNavigation();
  console.log(user);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <ImageBackground
          source={BgImage}
          style={styles.bgImage}
          resizeMode="stretch"
        >
          <View style={styles.profileContainer}>
            <View style={styles.photoWrapper}>
              <Image source={userAvatar} style={styles.userAvatar}></Image>
              <Pressable style={styles.addIcon}>
                <AntDesign name="closecircleo" size={25} color="#BDBDBD" />
              </Pressable>
            </View>
            <Feather
              name="log-out"
              size={24}
              color="#BDBDBD"
              style={styles.logOutIcon}
              onPress={() => navigation.navigate("Login")}
            />
            <Text style={styles.title}>{user.login}</Text>
            <View style={styles.postsWrapper}>
              <PostItem />
              <PostItem />
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

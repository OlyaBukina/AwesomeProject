import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import {
  ImageBackground,
  View,
  Image,
  Text,
  Pressable,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './Profile.styled';
import BgImage from '../../assets/images/bg-auth.jpg';
import { PostItem } from '../../components/screensComponents/PostItem';
import { AntDesign, Feather } from '@expo/vector-icons';
import userAvatar from '../../assets/images/userAvatar.jpg';
import { useNavigation } from '@react-navigation/native';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import { selectPosts } from '../../redux/posts/selectors';
import { getAllPosts } from '../../redux/posts/operations';

export const Profile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const user = useSelector(selectUser);
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const logOutUser = () => {
    dispatch(logOut());
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
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
              onPress={logOutUser}
            />
            <Text style={styles.title}>{user.login}</Text>
            <FlatList
              style={styles.postsWrapper}
              data={posts}
              renderItem={({ item }) => <PostItem data={item}></PostItem>}
              keyExtractor={(item) => item.id}
            />
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

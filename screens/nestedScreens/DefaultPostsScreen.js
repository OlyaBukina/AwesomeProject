import { Image, View, Text, SafeAreaView, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { styles } from './DefaultPostScreen.styled';
import userAvatar from '../../assets/images/userAvatar.jpg';
import { PostItem } from '../../components/screensComponents/PostItem';
import { useEffect } from 'react';
import { getAllPosts } from '../../redux/posts/operations';
import { selectPosts } from '../../redux/posts/selectors';

// eslint-disable-next-line react/prop-types
export const DefaultPostsScreen = ({ onLayout }) => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container} onLayout={onLayout}>
        <View style={styles.screenWrapper}>
          <View style={styles.userWrapper}>
            <Image source={userAvatar} style={styles.userAvatar}></Image>
            <View style={styles.infoWrapper}>
              <Text style={styles.userName}>{user.login}</Text>
              <Text style={styles.userEmail}>{user.email}</Text>
            </View>
          </View>
          <FlatList
            style={styles.postsWrapper}
            data={posts}
            renderItem={({ item }) => <PostItem data={item}></PostItem>}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

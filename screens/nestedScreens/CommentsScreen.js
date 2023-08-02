import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Image,
  View,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { styles } from './CommentsScreen.styled';
import { SendIcon } from '../../components/icons/SendIcon';
import { CommentItem } from '../../components/screensComponents/CommentItem';
import { addComment } from '../../redux/posts/operations';
import { auth } from '../../config';
import { Alert } from 'react-native';
import { selectPosts } from '../../redux/posts/selectors';
import { formatDate } from '../../redux/helpers/formatDate';

// eslint-disable-next-line react/prop-types
export const CommentsScreen = ({ route }) => {
  // eslint-disable-next-line react/prop-types
  const { photo, idPost } = route.params;
  const [comment, setComment] = useState('');
  const [, setIsShowKeyboard] = useState(false);

  const dispatch = useDispatch();

  const currentUser = auth.currentUser;
  const posts = useSelector(selectPosts);

  const comments = posts.find(({ id }) => id === idPost).comments;

  const keyBordHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const sendComment = () => {
    if (comment === '') {
      return Alert('Комент відсутній');
    }

    dispatch(
      addComment({
        idPost,
        idUser: currentUser.uid,
        commentText: comment,
        date: formatDate(),
      })
    ).then((res) => {
      if (res.type === 'posts/addComment/fulfilled') {
        keyBordHide();
        setComment('');
      } else {
        return Alert('Помилка створення коментаря');
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <FlatList
          style={styles.commentsWrapper}
          ListHeaderComponent={
            <>
              <Image source={{ uri: photo }} style={styles.postImage}></Image>
            </>
          }
          data={comments}
          renderItem={({ item, index }) => (
            <CommentItem key={index} comment={item} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          style={{ paddingTop: 16 }}
          keyboardVerticalOffset={90}
        >
          <View style={styles.sendCommentWrapper}>
            <TextInput
              style={styles.commentInput}
              placeholder="Коментувати..."
              placeholderTextColor="#BDBDBD"
              onFocus={() => setIsShowKeyboard(true)}
              onBlur={() => setIsShowKeyboard(false)}
              onChangeText={(value) => setComment(value)}
              value={comment}
            ></TextInput>
            <Pressable style={styles.sendBtn} onPress={sendComment}>
              <SendIcon />
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

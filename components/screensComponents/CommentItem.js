import PropTypes from 'prop-types';

import { Image, View, Text } from 'react-native';
import ellipse from '../../assets/images/ellipse.jpg';
import { styles } from './CommentItems.styled';
import { auth } from '../../config';

export const CommentItem = ({ comment }) => {
  const curUser = auth.currentUser;
  const isOwner = curUser.uid === comment.idUser ? true : false;
  return (
    <View
      style={{
        ...styles.container,
        flexDirection: isOwner ? 'row-reverse' : 'row',
      }}
    >
      <Image source={ellipse} style={styles.avatar}></Image>
      <View
        style={{
          ...styles.commentWrapper,
          borderTopRightRadius: isOwner ? 0 : 6,
          borderTopLeftRadius: isOwner ? 6 : 0,
        }}
      >
        <Text style={styles.commentText}>{comment.commentText}</Text>
        <Text style={styles.commentText}>{isOwner}</Text>
        <Text
          style={{
            ...styles.commentDate,
            textAlign: isOwner ? 'left' : 'right',
          }}
        >
          {comment.date}
        </Text>
      </View>
    </View>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.shape({
    commentText: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    idPost: PropTypes.string,
    idUser: PropTypes.string.isRequired,
  }),
};

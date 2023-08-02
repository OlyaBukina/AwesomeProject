import PropTypes from 'prop-types';

import { View, Image, Text, Pressable } from 'react-native';
import { styles } from './PostItem.styled';
import { Feather } from '@expo/vector-icons';
import { CommentsIcon } from '../../components/icons/CommentsIcon';
import { useNavigation } from '@react-navigation/native';

// eslint-disable-next-line react/prop-types
export const PostItem = ({ data }) => {
  const { id, photo, title, place, coords, comments } = data;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={{ uri: photo }} style={styles.postImage}></Image>
      <Text style={styles.postTitle}>{title}</Text>
      <View style={styles.postDetails}>
        <Pressable
          style={{ ...styles.detailsItem, marginRight: 24 }}
          onPress={() => navigation.navigate('Comments', { photo, idPost: id })}
        >
          <CommentsIcon commentsLength={comments.length} />

          <Text style={styles.detailsText}>{comments.length}</Text>
        </Pressable>
        <View style={{ ...styles.detailsItem, marginRight: 'auto' }}>
          <Feather name="thumbs-up" size={24} color="#BDBDBD" />
          <Text style={styles.detailsText}>0</Text>
        </View>
        <Pressable
          style={styles.detailsItem}
          onPress={() => navigation.navigate('Map', { coords, place, title })}
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
              textDecorationLine: 'underline',
            }}
          >
            {place}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

PostItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    coords: PropTypes.object.isRequired,
    comments: PropTypes.array.isRequired,
    idUser: PropTypes.string,
  }),
};

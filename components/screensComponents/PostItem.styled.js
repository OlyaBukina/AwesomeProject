import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  commentsIcon: {},
  container: {
    display: 'flex',
    gap: 8,
    marginBottom: 32,
  },

  detailsItem: { alignItems: 'center', flexDirection: 'row', gap: 6 },
  detailsText: {
    color: '#212121',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  photoWrapper: {
    height: 240,
    // width: "100%",
    borderRadius: 8,
    marginBottom: 8,
  },
  postDetails: {
    display: 'flex',
    flexDirection: 'row',
  },
  postImage: { borderRadius: 8, height: 240, width: '100%' },
  postTitle: { fontFamily: 'Roboto-Medium', fontSize: 16 },
});

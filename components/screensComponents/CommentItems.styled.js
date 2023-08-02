import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  avatar: {
    borderRadius: 14,
    height: 28,
    width: 28,
  },
  commentDate: {
    color: '#BDBDBD',
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
    textAlign: 'right',
  },
  commentText: {
    color: '#212121',
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    lineHeight: 18,
  },
  commentWrapper: {
    backgroundColor: '#00000008',
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6,
    display: 'flex',
    flex: 1,
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  container: {
    display: 'flex',
    flexDirection: 'row-reverse',
    gap: 16,
    width: '100%',
    marginBottom: 24,
  },
});

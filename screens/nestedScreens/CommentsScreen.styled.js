import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 16,
    paddingTop: 32,
    ...Platform.select({
      android: {
        paddingBottom: 16,
      },
    }),
  },
  commentInput: {
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderRadius: 25,
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 16,
    paddingVertical: 16,
    width: '100%',
  },
  commentsWrapper: {
    ...Platform.select({
      ios: {
        flex: 1,
      },
    }),
  },
  postImage: {
    borderRadius: 8,
    height: 240,
    marginBottom: 32,
    width: '100%',
  },
  sendBtn: {
    alignItems: 'center',
    backgroundColor: '#FF6C00',
    borderRadius: 17,
    display: 'flex',
    height: 34,
    justifyContent: 'center',
    position: 'absolute',
    right: 8,
    top: 8,
    width: 34,
  },
  sendCommentWrapper: {
    position: 'relative',
  },
});

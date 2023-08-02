import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  addIcon: {
    backgroundColor: '#fff',
    borderRadius: 12.5,
    position: 'absolute',

    right: -12.5,
    top: 81,
  },
  bgImage: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingTop: 165,
  },
  container: {
    flex: 1,
  },
  logOutIcon: { position: 'absolute', right: 16, top: 22 },
  photoWrapper: {
    height: 120,
    position: 'absolute',
    top: -60,
    width: 120,
  },
  postsWrapper: {
    display: 'flex',
    gap: 32,
    width: '100%',
  },
  profileContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 43,
    // paddingBottom: 53,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 92,
    position: 'relative',
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    letterSpacing: 0.3,
    marginBottom: 33,
  },
  userAvatar: {
    borderRadius: 16,
  },
});

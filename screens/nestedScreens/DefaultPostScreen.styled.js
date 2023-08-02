import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  activeTabBtn: {
    alignItems: 'center',
    backgroundColor: '#FF6C00',
    borderRadius: 20,
    display: 'flex',
    height: 40,
    justifyContent: 'center',
    width: 70,
  },
  buttonWrapper: {
    backgroundColor: '#FFF',
  },

  container: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
    width: '100%',
  },
  footer: {
    borderTopColor: '#0000004d',
    borderTopWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    gap: 31,
    height: 83,
    justifyContent: 'center',
    paddingTop: 9,
  },
  header: {
    alignItems: 'flex-end',
    borderBottomColor: '#0000004d',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    height: 88,
    justifyContent: 'center',
    paddingBottom: 11,
    width: '100%',
  },
  headerTitle: {
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
  },
  infoWrapper: {
    display: 'flex',
  },
  logOut: {
    bottom: 10,
    height: 24,
    position: 'absolute',
    right: 16,
    width: 24,
  },
  postsWrapper: {
    display: 'flex',
  },
  screenWrapper: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  userAvatar: {
    height: 60,
    width: 60,
  },
  userEmail: {
    color: '#212121cc',
    fontFamily: 'Roboto-Medium',
    fontSize: 11,
    lineHeight: 13,
  },

  userName: {
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
    lineHeight: 15,
  },
  userWrapper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    marginBottom: 32,
  },
});

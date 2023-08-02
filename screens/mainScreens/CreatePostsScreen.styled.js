import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  callText: {
    color: '#BDBDBD',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    marginBottom: 32,
  },
  camera: { flex: 1, width: '100%' },
  cameraBtn: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 60,
    display: 'flex',
    height: 60,
    justifyContent: 'center',
    width: 60,
  },
  cameraContainer: { borderRadius: 8, height: 240, width: '100%' },

  container: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    display: 'flex',
    flex: 1,
    paddingBottom: 34,
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  deleteBtn: {
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
    display: 'flex',
    height: 40,
    justifyContent: 'center',
    width: 70,

    ...Platform.select({
      android: {
        marginTop: 'auto',
      },
    }),
  },
  deleteBtnContainer: {
    height: 83,
    paddingTop: 9,
  },
  iconMap: {
    bottom: 17,
    left: 0,
    position: 'absolute',
  },
  input: {
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    paddingBottom: 15,
    paddingTop: 16,
  },
  mainForm: {
    marginBottom: 'auto',
    width: '100%',
  },
  photo: {
    height: 240,
    position: 'absolute',
    right: 0,
    top: 0,
    width: '100%',
  },
  photoWrapper: {
    alignItems: 'center',
    borderRadius: 8,
    display: 'flex',
    height: 240,
    justifyContent: 'center',
    marginBottom: 8,
    width: '100%',
  },
  secondaryForm: {
    display: 'flex',
    gap: 16,
    marginBottom: 32,
  },
  submitBtn: {
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 100,
    display: 'flex',
    height: 51,
    justifyContent: 'center',
    width: '100%',
  },
  submitBtnText: {
    color: '#BDBDBD',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
});

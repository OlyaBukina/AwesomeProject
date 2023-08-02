import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../config';

async function upLoadFile(file, path) {
  const storageRef = ref(storage, path);
  const uploadTask = await uploadBytes(storageRef, file);
  return await getDownloadURL(uploadTask.ref);
}

export const uploadPhotoToServer = async (photo) => {
  if (!photo) {
    return 'No photo';
  }
  // eslint-disable-next-line no-undef
  const response = await fetch(photo);
  const file = await response.blob();
  const fileName = photo.slice(photo.lastIndexOf('/') + 1);
  const path = `images/${fileName}`;
  return await upLoadFile(file, path);
};

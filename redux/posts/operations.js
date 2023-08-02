import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';
import { db } from '../../config';
import { uploadPhotoToServer } from '../helpers/uploadPhotoToServer ';

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (post, thunkAPI) => {
    try {
      const { photo } = post;
      const uploadPhoto = await uploadPhotoToServer(photo);
      post = { ...post, photo: uploadPhoto };

      const docRef = await addDoc(collection(db, 'posts'), post);
      return { id: docRef.id, ...post };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllPosts = createAsyncThunk(
  'posts/getPosts',
  async (_, thunkAPI) => {
    try {
      const posts = await getDocs(collection(db, 'posts'));
      const array = [];
      posts.forEach((doc) => {
        array.push({ id: doc.id, ...doc.data() });
      });
      return array;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addComment = createAsyncThunk(
  'posts/addComment',
  async (comment, thunkAPI) => {
    try {
      const { idPost } = comment;
      const postRef = doc(db, 'posts', idPost);
      await updateDoc(postRef, {
        comments: arrayUnion(comment),
      });

      return comment;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

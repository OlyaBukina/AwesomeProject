import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import {
  ImageBackground,
  View,
  Text,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Alert,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import BgImage from '../../assets/images/bg-auth.jpg';
import { styles } from './RegistrationScreen.styled';
import { register } from '../../redux/auth/operations';

// eslint-disable-next-line react/prop-types
export const RegistrationScreen = ({ onLayout }) => {
  const [inputName, setinputName] = useState('');
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [, setIsShowKeyboard] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const keyBordHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const resetForm = () => {
    setLogin('');
    setEmail('');
    setPassword('');
  };

  const submitForm = () => {
    if (login === '' || email === '' || password === '') {
      return Alert.alert(
        'Не коректні дані',
        'Будь ласка, заповніть всі поля непустими даними'
      );
    }
    dispatch(register({ login, email, password })).then((res) => {
      if (res.type === 'auth/register/fulfilled') {
        navigation.navigate('Home');
        resetForm();
      } else {
        return Alert.alert(
          'Помилка реєстрації',
          `Будь ласка, заповніть всі поля коректними даними.`
        );
      }
    });
  };

  const navToLogin = () => {
    resetForm();
    navigation.navigate('Login');
  };

  return (
    <TouchableWithoutFeedback onPress={keyBordHide}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.container} onLayout={onLayout}>
          <ImageBackground
            source={BgImage}
            style={styles.bgImage}
            resizeMode="cover"
          >
            <View style={styles.registrationContainer}>
              <View style={styles.photoWrapper}>
                <Pressable style={styles.addIcon}>
                  <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
                </Pressable>
              </View>
              <Text style={styles.title}>Реєстрація</Text>

              <View style={styles.formWrapper}>
                <TextInput
                  style={
                    inputName === 'login'
                      ? styles.inputFocused
                      : styles.formInput
                  }
                  placeholder="Логін"
                  placeholderTextColor={'#bdbdbd'}
                  value={login}
                  onFocus={() => {
                    setinputName('login');
                    setIsShowKeyboard(true);
                  }}
                  onBlur={() => setIsShowKeyboard(false)}
                  onChangeText={(value) => setLogin(value)}
                ></TextInput>

                <TextInput
                  style={
                    inputName === 'email'
                      ? styles.inputFocused
                      : styles.formInput
                  }
                  placeholder="Адреса електронної пошти"
                  placeholderTextColor={'#bdbdbd'}
                  onFocus={() => {
                    setinputName('email');
                    setIsShowKeyboard(true);
                  }}
                  onBlur={() => setIsShowKeyboard(false)}
                  onChangeText={(value) => setEmail(value)}
                ></TextInput>

                <View style={{ position: 'relative' }}>
                  <TextInput
                    style={
                      inputName === 'password'
                        ? styles.inputFocused
                        : styles.formInput
                    }
                    placeholder="Пароль"
                    secureTextEntry={!showPassword}
                    placeholderTextColor={'#bdbdbd'}
                    onFocus={() => {
                      setinputName('password');
                      setIsShowKeyboard(true);
                    }}
                    onBlur={() => setIsShowKeyboard(false)}
                    onChangeText={(value) => setPassword(value)}
                  ></TextInput>
                  <Pressable
                    onPress={() => setShowPassword((prevState) => !prevState)}
                  >
                    <Text style={styles.showPasswordBtn}>
                      {!showPassword ? 'Показати' : 'Приховати'}
                    </Text>
                  </Pressable>
                </View>
              </View>
              <Pressable style={styles.submitBtn} onPress={submitForm}>
                <Text style={styles.submitBtnText}>Зареєстуватися</Text>
              </Pressable>
              <Pressable onPress={navToLogin}>
                <Text style={styles.checkBtn}>Вже є акаунт? Увійти</Text>
              </Pressable>
            </View>
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  getHeaderTitle,
  getTabBarStyle,
  getHeaderRight,
  getHeaderLeft,
} from './screenOptions';

import { PostScreen } from './PostsScreen';
import { CreatePostsScreen } from './CreatePostsScreen';
import { Profile } from './Profile';
import { Feather } from '@expo/vector-icons';

const HomeTab = createBottomTabNavigator();

// eslint-disable-next-line react/prop-types
export const Home = ({ onLayout }) => {
  return (
    <HomeTab.Navigator
      initialRouteName="PostScreen"
      onLayout={onLayout}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'PostsScreen') {
            iconName = 'grid';
          } else if (route.name === 'CreatePostsScreen') {
            iconName = 'plus';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }
          return (
            <View style={focused ? styles.activeTabBtn : styles.buttonWrapper}>
              <Feather
                name={iconName}
                size={24}
                color={focused ? '#fff' : '#616161'}
              />
            </View>
          );
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#212121CC',
        tabBarStyle: {
          height: 83,
        },
        headerTitleAlign: 'center',
        headerTintColor: '#212121CC',
        headerTitleStyle: {
          fontFamily: 'Roboto-Medium',
          fontSize: 17,
          fontWeight: 500,
          lineHeight: 22,
          textAlign: 'center',
          color: '#212121',
        },
        headerStyle: {
          height: 88,
          borderBottomWidth: 0.5,
          borderBottomColor: '#0000004d',
        },
      })}
    >
      <HomeTab.Screen
        name="PostsScreen"
        component={PostScreen}
        options={({ route, navigation }) => ({
          title: getHeaderTitle(route),
          headerStyle: {
            height: 88,
            borderBottomWidth: 0.5,
            borderBottomColor: '#0000004d',
          },
          headerTitleStyle: {
            fontFamily: 'Roboto-Medium',
            fontSize: 17,
            fontWeight: 500,
            lineHeight: 22,
            textAlign: 'center',
            color: '#212121',
          },
          tabBarStyle: getTabBarStyle(route),
          headerRight: () => getHeaderRight(route, navigation),
          headerLeft: () => getHeaderLeft(route, navigation),
        })}
      ></HomeTab.Screen>
      <HomeTab.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          title: 'Створити публікацію',
          headerLeft: () => (
            <Feather
              name="arrow-left"
              size={24}
              color="#212121CC"
              style={{ marginRight: 16, padding: 5 }}
              onPress={() => navigation.navigate('PostsScreen')}
            />
          ),
          tabBarStyle: {
            display: 'none',
          },
        })}
      />
      <HomeTab.Screen
        name="Profile"
        component={Profile}
        options={() => ({
          headerShown: false,
        })}
      />
    </HomeTab.Navigator>
  );
};

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
});

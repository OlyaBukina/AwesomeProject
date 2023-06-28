import { createStackNavigator } from "@react-navigation/stack";
import { CommentsScreen } from "../nestedScreens/CommentsScreen";
import { DefaultPostsScreen } from "../nestedScreens/DefaultPostsScreen";
import { MapScreen } from "../nestedScreens/MapScreen";

const PostsStack = createStackNavigator();

export const PostScreen = () => {
    return (
        <PostsStack.Navigator screenOptions={{ headerShown: false }}>
            <PostsStack.Screen
                name="DefaultScreen"
                component={DefaultPostsScreen}
            />
            <PostsStack.Screen name="Comments" component={CommentsScreen} />
            <PostsStack.Screen name="Map" component={MapScreen} />
        </PostsStack.Navigator>
    );
};

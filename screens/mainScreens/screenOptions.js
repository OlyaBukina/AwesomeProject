import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

export const getHeaderTitle = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "DefaultScreen";

    switch (routeName) {
        case "DefaultScreen":
            return "Публікації";
        case "Comments":
            return "Коментарі";
        case "Map":
            return "Карта";
    }
};

export const getTabBarStyle = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "DefaultScreen";

    switch (routeName) {
        case "DefaultScreen":
            return {
                height: 83,
            };
        case "Comments":
            return { display: "none" };
        case "Map":
            return { display: "none" };
    }
};

export const getHeaderRight = (route, navigation) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "DefaultScreen";
    switch (routeName) {
        case "DefaultScreen":
            return (
                <Feather
                    onPress={() => navigation.navigate("Login")}
                    name="log-out"
                    size={24}
                    color="#BDBDBD"
                    style={{ marginRight: 16 }}
                />
            );
        case "Comments":
            return;
        case "Map":
            return;
    }
};

export const getHeaderLeft = (route, navigation) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "DefaultScreen";
    switch (routeName) {
        case "DefaultScreen":
            return;
        case "Comments":
            return (
                <Feather
                    onPress={() => navigation.navigate("DefaultScreen")}
                    name="arrow-left"
                    size={24}
                    color="#212121"
                    style={{ marginRight: 16, padding: 5 }}
                />
            );
        case "Map":
            return (
                <Feather
                    onPress={() => navigation.navigate("DefaultScreen")}
                    name="arrow-left"
                    size={24}
                    color="#212121"
                    style={{ marginRight: 16, padding: 5 }}
                />
            );
    }
};

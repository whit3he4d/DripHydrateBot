import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import DripWeb from "./screens/DripWeb";

const navigator = createStackNavigator(
  {
    Web: DripWeb
  },
  {
    initialRouteName: "Web",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);

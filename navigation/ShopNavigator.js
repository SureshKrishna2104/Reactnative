import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen';
import Colors from '../constatnts/Colors';
import {Platform} from 'react-native';

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductOverviewScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : ' ',
    },
  },
);
export default createAppContainer(ProductsNavigator);

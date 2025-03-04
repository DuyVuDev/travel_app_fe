import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListHotelScreen from './screens/hotelScreen/ListHotelScreen';
import SearchHotelScreen from './screens/hotelScreen/SearchHotelScreen';
import MainScreen from './screens/MainScreen';
import FilterHotelScreen from './screens/hotelScreen/FilterHotelScreen';
import HotelDetailScreen from './screens/hotelScreen/HotelDetailScreen';
import ListRoomScreen from './screens/bookingRoomScreen/ListRoomScreen';
import BookingRoomScreen from './screens/bookingRoomScreen/BookingRoomScreen';
import ManageBookingScreen from './screens/bookingRoomScreen/ManageBookingSceen';
import PaymentScreen from './screens/bookingRoomScreen/PaymentScreen';
import BookFlightTickets from './screens/bookFlightTickets/BookFlightTickets';
import ListFlightTickets from './screens/bookFlightTickets/ListFlightTickets';
import TicketDetail from './screens/bookFlightTickets/TicketDetail';
import TicketBookingForm from './screens/bookFlightTickets/TicketBookingForm';
import ConfirmationPage from './screens/bookFlightTickets/ConfirmationPage';
import PaymentPage from './screens/bookFlightTickets/PaymentPage';
import MyListTickets from './screens/bookFlightTickets/MyListTickets';
import LoginScreen from './screens/logInScreen/LoginScreen';
import SignUpScreen from './screens/logInScreen/SignUpScreen';
import SplashScreen from './screens/SplashScreen';
import TripManageScreen from './screens/tripScreens/TripManageScreen';
import TripDetailScreen from './screens/tripScreens/TripDetailScreen';
import PlanUpScreen from './screens/tripScreens/PlanUpScreen';
import DayPlanScreen from './screens/tripScreens/DayPlanScreen';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="SearchHotelScreen" component={SearchHotelScreen} />
        <Stack.Screen name="ListHotelScreen" component={ListHotelScreen} />
        <Stack.Screen name="BookFlightTickets" component={BookFlightTickets} />
        <Stack.Screen name="ListFlightTickets" component={ListFlightTickets} />
        <Stack.Screen name="TicketDetail" component={TicketDetail} />
        <Stack.Screen name="TicketBookingForm" component={TicketBookingForm} />
        <Stack.Screen name="ConfirmationPage" component={ConfirmationPage} />
        <Stack.Screen name="PaymentPage" component={PaymentPage} />
        <Stack.Screen name="MyListTickets" component={MyListTickets} />
        <Stack.Screen name="FilterHotelScreen" component={FilterHotelScreen} />
        <Stack.Screen name="HotelDetailScreen" component={HotelDetailScreen} />
        <Stack.Screen name="ListRoomScreen" component={ListRoomScreen} />
        <Stack.Screen name="BookingRoomScreen" component={BookingRoomScreen} />
        <Stack.Screen name="ManageBookingScreen" component={ManageBookingScreen} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="TripManageScreen" component={TripManageScreen} />
        <Stack.Screen name="TripDetailScreen" component={TripDetailScreen} />
        <Stack.Screen name="PlanUpScreen" component={PlanUpScreen} />
        <Stack.Screen name="DayPlanScreen" component={DayPlanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

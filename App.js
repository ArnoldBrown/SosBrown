import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from './screens/main/Splash';
import Welcome from './screens/main/Welcome';
import PhoneEntry from './screens/main/PhoneEntry';
import Otp from './screens/main/Otp';
import UserName from './screens/main/UserName';
import Dashboard from './screens/dash/Dashboard';
import RewardDetails from './screens/dash/rewards/RewardsDetail';
import EditProfile from './screens/dash/sos/EditProfile';
import AboutMain from './screens/dash/sos/AboutMain';
import AboutUs from './screens/dash/sos/AboutUs';
import MyVouchers from './screens/dash/sos/MyVouchers';
import MyReservation from './screens/reservation/MyReservation';
import MakeReservation from './screens/reservation/MakeReservation';
import ReserveCancelAlert from './screens/reservation/ReserveCancelAlert';
import ReserveDetails from './screens/reservation/ReserveDetails';
import OutletsMain from './screens/outlets/OutletsMain';
import OutletsDetail from './screens/outlets/OutletsDetail';
import SosMore from './screens/dash/sos/SosMore';
import Catalog from './screens/dash/sos/Catalog';
import Pay from './screens/dash/payment/Pay';
import QrScan from './screens/dash/sos/QrScan';
import PaymentAlert from './screens/dash/payment/PaymentAlert';
import PaymentAlertFailure from './screens/dash/payment/PaymentAlertFailure';
import TopUp from './screens/dash/payment/TopUp';
import PaymentHistory from './screens/dash/payment/PaymentHistory';
import Receipt from './screens/dash/payment/Receipt';
import TopUpAlert from './screens/dash/payment/TopUpAlert';
import RewardBadge from './screens/dash/rewards/RewardBadge';
import TierBenefits from './screens/dash/rewards/TierBenefits';
import PointsHistory from './screens/dash/rewards/PointsHistory';
import LimitedOffers from './screens/dash/rewards/LimitedOffers';
import InboxDetail from './screens/dash/inbox/InboxDetail';
import CatProdDetail from './screens/dash/sos/CatProdDetail';
import HomeHeader from './screens/dash/home/HomeHeader';
import TermsOfUse from './screens/dash/sos/TermsOfUse';
import PrivacyPolicy from './screens/dash/sos/PrivacyPolicy';
import VoucherDetail from './screens/dash/sos/VoucherDetail';
import Maintanance from './screens/maintainance/Maintanance';
import NewsDetail from './screens/dash/home/NewsDetail';


const Stack = createStackNavigator();

import Auth from './screens/Auth/Auth';
import {useSelector} from 'react-redux';

const App = () => {
  const getToken = useSelector((state) => state.loginDetails);

  const {status, extractName} = getToken;

  //const { status } = 'failure';

  return (
    <NavigationContainer>
      {status === 'failure' || status === '' || extractName === '' ? (
        <Auth />
      ) : (
        <Stack.Navigator initialRouteName="Dashboard" headerMode="none">
          {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}

          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="PhoneEntry"
            component={PhoneEntry}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="RewardDetails"
            component={RewardDetails}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="EditProfile"
            component={EditProfile}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="AboutMain"
            component={AboutMain}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="AboutUs"
            component={AboutUs}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="MyVouchers"
            component={MyVouchers}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="MyReservation"
            component={MyReservation}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="MakeReservation"
            component={MakeReservation}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="ReserveCancelAlert"
            component={ReserveCancelAlert}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="ReserveDetails"
            component={ReserveDetails}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="OutletsMain"
            component={OutletsMain}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="OutletsDetail"
            component={OutletsDetail}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="SosMore"
            component={SosMore}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Catalog"
            component={Catalog}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Pay"
            component={Pay}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="QrScan"
            component={QrScan}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="PaymentAlert"
            component={PaymentAlert}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="PaymentAlertFailure"
            component={PaymentAlertFailure}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="TopUp"
            component={TopUp}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="PaymentHistory"
            component={PaymentHistory}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Receipt"
            component={Receipt}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="TopUpAlert"
            component={TopUpAlert}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="RewardBadge"
            component={RewardBadge}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="TierBenefits"
            component={TierBenefits}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="PointsHistory"
            component={PointsHistory}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="LimitedOffers"
            component={LimitedOffers}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="InboxDetail"
            component={InboxDetail}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="CatProdDetail"
            component={CatProdDetail}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="HomeHeader"
            component={HomeHeader}
            options={{headerShown: false}}
          />
          
          <Stack.Screen
            name="TermsOfUse"
            component={TermsOfUse}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="PrivacyPolicy"
            component={PrivacyPolicy}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="VoucherDetail"
            component={VoucherDetail}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Maintanance"
            component={Maintanance}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="NewsDetail"
            component={NewsDetail}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;

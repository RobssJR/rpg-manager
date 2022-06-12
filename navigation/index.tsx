/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import Header from '../components/Header';

import Home from '../screens/ScreenHome';
import Campanhas from '../screens/ScreenCampanhas';
import Friends from '../screens/ScreenFriendsList';
import FastDice from '../screens/ScreenFastDice';
import Characters from '../screens/ScreenCharacter';

export default function Navigation() {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={MyTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const MyTheme = {
  dark: false,
  colors: {
    background: Colors.background,
    card: Colors.comment,
    text: Colors.foreground,
  },
};

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors.green,
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          title: '',
          headerLeft: Header,
          headerStyle: {
            height: 100,
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        })}
      />

      <BottomTab.Screen
        name="Campanhas"
        component={Campanhas}
        options={({ navigation }: RootTabScreenProps<'Campanhas'>) => ({
          title: '',
          headerLeft: Header,
          headerStyle: {
            height: 100,
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        })}
      />

      <BottomTab.Screen
        name="FastDice"
        component={FastDice}
        options={({ navigation }: RootTabScreenProps<'FastDice'>) => ({
          title: '',
          headerLeft: Header,
          headerStyle: {
            height: 100,
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="dice-d20" color={color} />,
        })}
      />

      <BottomTab.Screen
        name="Characters"
        component={Characters}
        options={({ navigation }: RootTabScreenProps<'Characters'>) => ({
          title: '',
          headerLeft: Header,
          headerStyle: {
            height: 100,
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="address-card" color={color} />,
        })}
      />

      <BottomTab.Screen
        name="FriendList"
        component={Friends}
        options={({ navigation }: RootTabScreenProps<'FriendList'>) => ({
          title: '',
          headerLeft: Header,
          headerStyle: {
            height: 100,
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="user-friends" color={color} />,
        })}
      />

    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome5>['name'];
  color: string;
}) {
  return <FontAwesome5 size={30} style={{ marginBottom: -3 }} {...props} />;
}

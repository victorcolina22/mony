import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign size={28} name='home' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='budget'
        options={{
          title: 'Budget',
          tabBarIcon: ({ color }) => (
            <AntDesign name='barschart' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='tools'
        options={{
          title: 'Tools',
          tabBarIcon: ({ color }) => (
            <Octicons name='tools' size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <AntDesign size={28} name='setting' color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

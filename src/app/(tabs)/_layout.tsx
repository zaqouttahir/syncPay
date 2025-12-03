import { Tabs } from 'expo-router';
import { FontAwesome6, Ionicons, Octicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#00C897',
        headerStyle: { backgroundColor: '#132a53' },
        headerTitleStyle: { color: '#00C897', fontSize: 30 },
        headerTitleAlign: 'center',
        sceneStyle: { backgroundColor: '#eee' },
        tabBarStyle: {
          borderTopWidth: 1,
          borderColor: '#00C897',
          backgroundColor: '#132a53',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Octicons name="home-fill" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="expenses"
        options={{
          title: 'Expenses',
          headerTitle: 'Expenses',
          tabBarIcon: ({ color, size }) => <Ionicons name="wallet" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settlements"
        options={{
          title: 'Settlements',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="handshake-simple" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => <Ionicons name="settings" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}

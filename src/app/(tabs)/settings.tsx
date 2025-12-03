import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo, Feather, FontAwesome5, FontAwesome6, Ionicons } from '@expo/vector-icons';
import { FlashList } from '@shopify/flash-list';

const demoGroups = [
  {
    id: 'grp_home',
    title: 'Shared Home',
    emoji: '🏠',
    description: 'Rent, utility bills, and monthly groceries.',
    member_count: 3,
    is_active: true,
  },
  {
    id: 'grp_trip',
    title: 'Turkey Trip 2026',
    emoji: '✈️',
    description: 'Travel expenses, hotels, and dining out.',
    member_count: 5,
    is_active: true,
  },
  {
    id: 'grp_couple',
    title: 'Family & Kids',
    emoji: '👨‍👩‍👧‍👦',
    description: 'Primary family expenses and schooling fees.',
    member_count: 2,
    is_active: true,
  },
  {
    id: 'grp_project',
    title: 'Graduation Project',
    emoji: '💻',
    description: 'Software licenses, hardware, and programmer costs.',
    member_count: 4,
    is_active: false,
  },
];

const demoCategories = [
  {
    id: 'cat_food',
    name: 'Food & Dining',
    emoji: '🍔',
    color_code: '#E74C3C', // Red/Orange for attention
  },
  {
    id: 'cat_housing',
    name: 'Housing & Bills',
    emoji: '💡',
    color_code: '#2C3E50', // Dark Blue for major expenses
  },
  {
    id: 'cat_transport',
    name: 'Transportation',
    emoji: '🚗',
    color_code: '#3498DB', // Light Blue
  },
  {
    id: 'cat_fun',
    name: 'Entertainment & Shopping',
    emoji: '🛍️',
    color_code: '#9B59B6', // Purple/Violet
  },
  {
    id: 'cat_health',
    name: 'Health & Wellness',
    emoji: '💊',
    color_code: '#1ABC9C', // Teal/Mint
  },
  {
    id: 'cat_other',
    name: 'Miscellaneous',
    emoji: '✨',
    color_code: '#F39C12', // Yellow/Orange
  },
];

export default function SettingsScreen() {
  return (
    <SafeAreaView className="relative flex-1 gap-5 px-4" edges={['top']}>
      <View className="flex-row items-center justify-between">
        <Text className="text-3xl font-semibold">Settings</Text>
        {/* logout btn  */}
        <TouchableOpacity
          activeOpacity={0.7}
          className="flex-row items-center gap-2 rounded-lg bg-custom-red p-1.5 px-2">
          <Text className="text-lg font-semibold text-white">Logout</Text>
          <Entypo name="log-out" size={18} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView className="mb-2 flex-1 gap-5" showsVerticalScrollIndicator={false}>
        {/* groups */}
        <View className="gap-3">
          <View className="flex-row items-center justify-between border-b border-gray-200 pb-2">
            <Text className="text-2xl font-semibold">Groups</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              className="flex-row items-center gap-1 rounded-full bg-custom-green p-2">
              <Entypo name="plus" size={16} color="white" />
            </TouchableOpacity>
          </View>
          {demoGroups.map((item) => (
            <View key={item.id} className="mb-4 rounded-lg bg-white p-2 shadow-sm">
              <Text className="text-xl font-semibold text-text-main">{item.title}</Text>
              <Text className="mt-1 text-sm text-text-gray">{item.description}</Text>
              <Text className="mt-2 text-sm text-text-gray">{item.member_count} members</Text>
            </View>
          ))}
        </View>
        {/* categories */}
        <View className="gap-3">
          <View className="flex-row items-center justify-between border-b border-gray-300 pb-2">
            <Text className="text-2xl font-semibold">Categories</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              className="flex-row items-center gap-1 rounded-full bg-custom-green p-2">
              <Entypo name="plus" size={16} color="white" />
            </TouchableOpacity>
          </View>
          <View className="flex-1 flex-row flex-wrap gap-3">
            {demoCategories.map((item) => (
              <View
                key={item.id}
                className="flex-row gap-1 rounded-3xl p-2"
                style={{ backgroundColor: item.color_code }}>
                <Text className="mt-1 text-sm text-text-gray">{item.emoji}</Text>
                <Text className="text-xl font-semibold text-text-main">{item.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        activeOpacity={0.7}
        className="absolute bottom-5 right-5 z-10 rounded-full bg-custom-green p-4">
        <FontAwesome6 name="user-plus" size={22} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

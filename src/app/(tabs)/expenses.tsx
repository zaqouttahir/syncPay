import { Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Container from '@/components/Container';
import { FlashList } from '@shopify/flash-list';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const demoExpenses = [
  {
    id: 'exp_001',
    description: 'December Rent',
    amount: 3000.0,
    paid_by: 'user_ahmad_id', // Ahmad
    date: '2025-12-01T10:00:00Z',
    category: 'Housing',
    // Split equally among all three users
    splits: [
      { user_id: 'user_ahmad_id', share: 1000.0 },
      { user_id: 'user_sara_id', share: 1000.0 },
      { user_id: 'user_khaled_id', share: 1000.0 },
    ],
  },
  {
    id: 'exp_002',
    description: 'Restaurant Bill (Dinner)',
    amount: 150.0,
    paid_by: 'user_sara_id', // Sara
    date: '2025-12-02T14:30:00Z',
    category: 'Food',
    // Unequal split (Khaled didn't join)
    splits: [
      { user_id: 'user_sara_id', share: 50.0 },
      { user_id: 'user_ahmad_id', share: 100.0 },
    ],
  },
  {
    id: 'exp_003',
    description: 'Cleaning Supplies',
    amount: 75.0,
    paid_by: 'user_khaled_id', // Khaled
    date: '2025-12-02T18:45:00Z',
    category: 'Shared Items',
    // Split equally among all three users
    splits: [
      { user_id: 'user_ahmad_id', share: 25.0 },
      { user_id: 'user_sara_id', share: 25.0 },
      { user_id: 'user_khaled_id', share: 25.0 },
    ],
  },

  {
    id: 'exp_004',
    description: 'Cleaning Supplies',
    amount: 75.0,
    paid_by: 'user_khaled_id', // Khaled
    date: '2025-12-02T18:45:00Z',
    category: 'Shared Items',
    // Split equally among all three users
    splits: [
      { user_id: 'user_ahmad_id', share: 25.0 },
      { user_id: 'user_sara_id', share: 25.0 },
      { user_id: 'user_khaled_id', share: 25.0 },
    ],
  },
  {
    id: 'exp_005',
    description: 'Cleaning Supplies',
    amount: 75.0,
    paid_by: 'user_khaled_id', // Khaled
    date: '2025-12-02T18:45:00Z',
    category: 'Shared Items',
    // Split equally among all three users
    splits: [
      { user_id: 'user_ahmad_id', share: 25.0 },
      { user_id: 'user_sara_id', share: 25.0 },
      { user_id: 'user_khaled_id', share: 25.0 },
    ],
  },
  {
    id: 'exp_006',
    description: 'Cleaning Supplies',
    amount: 75.0,
    paid_by: 'user_khaled_id', // Khaled
    date: '2025-12-02T18:45:00Z',
    category: 'Shared Items',
    // Split equally among all three users
    splits: [
      { user_id: 'user_ahmad_id', share: 25.0 },
      { user_id: 'user_sara_id', share: 25.0 },
      { user_id: 'user_khaled_id', share: 25.0 },
    ],
  },
  {
    id: 'exp_007',
    description: 'Cleaning Supplies',
    amount: 75.0,
    paid_by: 'user_khaled_id', // Khaled
    date: '2025-12-02T18:45:00Z',
    category: 'Shared Items',
    // Split equally among all three users
    splits: [
      { user_id: 'user_ahmad_id', share: 25.0 },
      { user_id: 'user_sara_id', share: 25.0 },
      { user_id: 'user_khaled_id', share: 25.0 },
    ],
  },
  {
    id: 'exp_008',
    description: 'Cleaning Supplies',
    amount: 75.0,
    paid_by: 'user_khaled_id', // Khaled
    date: '2025-12-02T18:45:00Z',
    category: 'Shared Items',
    // Split equally among all three users
    splits: [
      { user_id: 'user_ahmad_id', share: 25.0 },
      { user_id: 'user_sara_id', share: 25.0 },
      { user_id: 'user_khaled_id', share: 25.0 },
    ],
  },
  {
    id: 'exp_009',
    description: 'Cleaning Supplies',
    amount: 75.0,
    paid_by: 'user_khaled_id', // Khaled
    date: '2025-12-02T18:45:00Z',
    category: 'Shared Items',
    // Split equally among all three users
    splits: [
      { user_id: 'user_ahmad_id', share: 25.0 },
      { user_id: 'user_sara_id', share: 25.0 },
      { user_id: 'user_khaled_id', share: 25.0 },
    ],
  },
];

export default function ExpensesScreen() {
  return (
    <SafeAreaView className="flex-1" edges={['top']}>
      <View className="px-4 py-5 shadow-md">
        <ExpenseHeader />
      </View>
      <FlashList
        className="px-4"
        data={demoExpenses}
        keyExtractor={(item) => item.id}
        contentContainerClassName="pb-4 gap-3"
        showsVerticalScrollIndicator={false}
        renderItem={ExpenseItem}
        ItemSeparatorComponent={() => <View className="h-3" />}
      />
    </SafeAreaView>
  );
}

function ExpenseHeader() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <View className="rounded-lg bg-white shadow-md">
      <View className="flex-row items-center gap-2 rounded-md  p-2">
        <MaterialCommunityIcons name="magnify" size={22} color="gray" />
        <TextInput
          placeholder="Search ..."
          className="flex-1 p-2 text-lg text-text-main"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <MaterialCommunityIcons
            name="close"
            size={20}
            color="#E74C3C"
            onPress={() => setSearchQuery('')}
          />
        )}
      </View>
    </View>
  );
}

function ExpenseItem({ item }: { item: (typeof demoExpenses)[0] }) {
  return (
    <View className="gap-2 rounded-lg bg-white p-4 shadow-md">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-2">
          <Text className="text-lg font-semibold text-text-main">{item.description}</Text>
          <Text>🥛</Text>
        </View>
        <Text className="text-lg font-bold text-text-main">{item.amount} SAR</Text>
      </View>
      {/* <View>
        <Text className="text-base text-text-gray">{item.paid_by}</Text>
      </View> */}
      <View className="flex-row items-center justify-between">
        {/* <Text className="text-sm text-text-gray">{item.category}</Text> */}
        <Text className="text-base text-text-gray">{item.paid_by}</Text>

        <Text className="text-sm text-text-gray">{item.date}</Text>
      </View>
    </View>
  );
}

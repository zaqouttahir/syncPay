import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const finalSettlements = [
  {
    id: 'settlement_001',
    // من يدفع (Owes)
    debtor_id: 'user_sara_id',
    debtor_name: 'Sara',
    // من يستلم (Is Owed)
    creditor_id: 'user_ahmad_id',
    creditor_name: 'Ahmad',
    amount: 925.0,
    currency: 'SAR',
    // حالة التسوية (لإضافة زر "تمت التسوية")
    is_settled: false,
    settled_date: null,
  },
  {
    id: 'settlement_002',
    // من يدفع
    debtor_id: 'user_khaled_id',
    debtor_name: 'Khaled',
    // من يستلم
    creditor_id: 'user_ahmad_id',
    creditor_name: 'Ahmad',
    amount: 950.0,
    currency: 'SAR',
    is_settled: false,
    settled_date: null,
  },
  {
    id: 'settlement_003',
    // من يدفع
    debtor_id: 'user_khaled_id',
    debtor_name: 'Khaled',
    // من يستلم
    creditor_id: 'user_ahmad_id',
    creditor_name: 'Ahmad',
    amount: 950.0,
    currency: 'SAR',
    is_settled: false,
    settled_date: null,
  },
  {
    id: 'settlement_004',
    // من يدفع
    debtor_id: 'user_khaled_id',
    debtor_name: 'Khaled',
    // من يستلم
    creditor_id: 'user_ahmad_id',
    creditor_name: 'Ahmad',
    amount: 950.0,
    currency: 'SAR',
    is_settled: false,
    settled_date: null,
  },
  {
    id: 'settlement_005',
    // من يدفع
    debtor_id: 'user_khaled_id',
    debtor_name: 'Khaled',
    // من يستلم
    creditor_id: 'user_ahmad_id',
    creditor_name: 'Ahmad',
    amount: 950.0,
    currency: 'SAR',
    is_settled: false,
    settled_date: null,
  },
  {
    id: 'settlement_006',
    // من يدفع
    debtor_id: 'user_khaled_id',
    debtor_name: 'Khaled',
    // من يستلم
    creditor_id: 'user_ahmad_id',
    creditor_name: 'Ahmad',
    amount: 950.0,
    currency: 'SAR',
    is_settled: false,
    settled_date: null,
  },
  {
    id: 'settlement_007',
    // من يدفع
    debtor_id: 'user_khaled_id',
    debtor_name: 'Khaled',
    // من يستلم
    creditor_id: 'user_ahmad_id',
    creditor_name: 'Ahmad',
    amount: 950.0,
    currency: 'SAR',
    is_settled: false,
    settled_date: null,
  },
  {
    id: 'settlement_008',
    // من يدفع
    debtor_id: 'user_khaled_id',
    debtor_name: 'Khaled',
    // من يستلم
    creditor_id: 'user_ahmad_id',
    creditor_name: 'Ahmad',
    amount: 950.0,
    currency: 'SAR',
    is_settled: false,
    settled_date: null,
  },
];

export default function SettlementsScreen() {
  return (
    <SafeAreaView className="flex-1 px-4" edges={['top']}>
      <View className="p-2">
        <Text className="text-3xl font-semibold">Settlements</Text>
      </View>
      <FlashList
        className="flex-1"
        showsVerticalScrollIndicator={false}
        data={finalSettlements}
        keyExtractor={(item) => item.id}
        renderItem={SettlementItem}
        ItemSeparatorComponent={() => <View className="h-5" />}
        ListFooterComponent={() => <View className="h-5" />}
      />
    </SafeAreaView>
  );
}

function SettlementItem({ item }: { item: (typeof finalSettlements)[0] }) {
  return (
    <View
      className={`rounded-lg border-s-8 p-2 shadow-sm ${finalSettlements.indexOf(item) % 2 === 0 ? 'border-custom-red bg-custom-red/5' : 'border-custom-green bg-custom-green/5'}`}>
      <View className="flex-row items-center justify-between">
        <Text className="text-lg font-semibold text-text-main">{item.debtor_name} Owes</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <FontAwesome name="check-circle" size={28} color="#00C897" />
          {/* <FontAwesome5 name="check-circle" size={24} color="#00C897" /> */}
        </TouchableOpacity>
      </View>

      <View className="flex-row items-center gap-1">
        <Text className="text-2xl font-semibold text-text-main">{item.amount}</Text>
        <Text className="text-sm font-semibold text-text-main">{item.currency}</Text>
      </View>
      <Text>To: {item.creditor_name}</Text>
      {/* <Text>{item.is_settled ? 'Settled' : 'Not Settled'}</Text> */}
    </View>
  );
}

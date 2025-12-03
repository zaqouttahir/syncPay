import Container from '@/components/Container';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <Container>
      {/* total expenses */}
      <ScrollView
        className="flex-1 px-4"
        contentContainerClassName="pt-5 pb-20"
        alwaysBounceVertical={true}
        overScrollMode="always"
        showsVerticalScrollIndicator={false}>
        {/* main card */}
        <View className="items-center rounded-lg bg-white p-4 shadow-lg">
          <Text className="text-2xl font-semibold text-text-main">Total Expenses</Text>
          <Text className="mt-3 text-3xl font-bold text-text-main">5000</Text>
          <Text className="text-text-gray">SAR</Text>
        </View>
        <View className="mt-8 flex-row items-center gap-8">
          {/* debit */}
          <View className="flex-1 flex-row items-center gap-2 rounded-lg border border-custom-red bg-red-100/80 p-4 py-6 shadow-md">
            <MaterialCommunityIcons name="arrow-down-bold" size={30} color="#E74C3C" />
            <View className="gap-2">
              <Text className="text-xl text-custom-red ">You owe</Text>
              <View className="flex-row items-center gap-3">
                <Text className="text-3xl font-bold text-custom-red">5000</Text>
                <Text className="text-sm text-custom-red">SAR</Text>
              </View>
            </View>
          </View>
          {/* credit */}
          <View className="flex-1 flex-row items-center gap-2 rounded-lg border border-custom-green bg-green-100/80 p-4 py-6 shadow-md">
            <MaterialCommunityIcons name="arrow-up-bold" size={30} color="#00C897" />
            <View className="gap-2">
              <Text className="text-xl text-custom-green ">You are owed</Text>
              <View className="flex-row items-center gap-3">
                <Text className="text-3xl font-bold text-custom-green">5000</Text>
                <Text className="text-sm text-custom-green">SAR</Text>
              </View>
            </View>
          </View>
        </View>

        {/* expenses */}
        <View className="mt-8">
          <Text className="text-lg font-semibold text-text-main">Last Expenses</Text>
          <View className="mt-5 gap-5">
            {/* expense card */}
            <View className="flex-row items-center justify-between rounded-lg bg-white p-4 shadow-md">
              <View className="flex-row items-center gap-2">
                <Text className="text-base font-semibold text-text-main">Buy milk</Text>
                <Text>🛒</Text>
              </View>
              <View className="gap-1">
                <View className="flex-row items-center gap-1">
                  <Text className="text-lg font-bold text-text-main">100</Text>
                  <Text className="text-xs text-text-gray">SAR</Text>
                </View>
                <Text className="text-sm text-text-gray">2 days ago</Text>
              </View>
            </View>
            {/* expense card */}
            <View className="flex-row items-center justify-between rounded-lg bg-white p-4 shadow-md">
              <View className="flex-row items-center gap-2">
                <Text className="text-base font-semibold text-text-main">Buy bread</Text>
                <Text>🛒</Text>
              </View>
              <View className="gap-1">
                <View className="flex-row items-center gap-1">
                  <Text className="text-lg font-bold text-text-main">305</Text>
                  <Text className="text-xs text-text-gray">SAR</Text>
                </View>
                <Text className="text-sm text-text-gray">2 days ago</Text>
              </View>
            </View>
            {/* expense card */}
            <View className="flex-row items-center justify-between rounded-lg bg-white p-4 shadow-md">
              <View className="flex-row items-center gap-2">
                <Text className="text-base font-semibold text-text-main">Buy cookies</Text>
                <Text>🛒</Text>
              </View>
              <View className="gap-1">
                <View className="flex-row items-center gap-1">
                  <Text className="text-lg font-bold text-text-main">150</Text>
                  <Text className="text-xs text-text-gray">SAR</Text>
                </View>
                <Text className="text-sm text-text-gray">2 days ago</Text>
              </View>
            </View>
            {/* expense card */}
            <View className="flex-row items-center justify-between rounded-lg bg-white p-4 shadow-md">
              <View className="flex-row items-center gap-2">
                <Text className="text-base font-semibold text-text-main">Buy cookies</Text>
                <Text>🛒</Text>
              </View>
              <View className="gap-1">
                <View className="flex-row items-center gap-1">
                  <Text className="text-lg font-bold text-text-main">150</Text>
                  <Text className="text-xs text-text-gray">SAR</Text>
                </View>
                <Text className="text-sm text-text-gray">2 days ago</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.7}
        className="absolute bottom-5 right-5 z-10 rounded-full bg-custom-green p-4 shadow-lg">
        <MaterialCommunityIcons name="plus" size={30} color="white" />
      </TouchableOpacity>
    </Container>
  );
}

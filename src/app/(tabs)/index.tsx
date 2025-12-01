import Container from '@/components/Container';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <Container>
      {/* total expenses */}
      <ScrollView className="flex-1 pt-5">
        {/* main card */}
        <View className="items-center rounded-lg bg-white p-4 shadow-lg">
          <Text className="text-text-main text-2xl font-semibold">Total Expenses</Text>
          <Text className="text-text-main mt-3 text-3xl font-bold">5000</Text>
          <Text className="text-text-gray">SAR</Text>
        </View>
        <View className="mt-8 flex-row items-center gap-8">
          {/* debit */}
          <View className="border-custom-red flex-1 flex-row items-center gap-2 rounded-lg border bg-red-100/80 p-4 py-6 shadow-md">
            <MaterialCommunityIcons name="arrow-down-bold" size={30} color="#E74C3C" />
            <View className="gap-1">
              <Text className="text-custom-red text-center text-xl ">Debit</Text>
              <View className="flex-row items-center gap-3">
                <Text className="text-custom-red text-3xl font-bold">5000</Text>
                <Text className="text-custom-red">SAR</Text>
              </View>
            </View>
          </View>
          {/* credit */}
          <View className="border-custom-green flex-1 flex-row items-center gap-2 rounded-lg border bg-green-100/80 p-4 py-6 shadow-md">
            <MaterialCommunityIcons name="arrow-up-bold" size={30} color="#00C897" />
            <View className="gap-1">
              <Text className="text-custom-green text-center text-xl ">Credit</Text>
              <View className="flex-row items-center gap-3">
                <Text className="text-custom-green text-3xl font-bold">5000</Text>
                <Text className="text-custom-green">SAR</Text>
              </View>
            </View>
          </View>
        </View>

        {/* expenses */}
        <View className="mt-8">
          <Text className="text-text-main text-lg font-semibold">Last Expenses</Text>
          <View className="mt-5 gap-5">
            {/* expense card */}
            <View className="flex-row items-center justify-between rounded-lg bg-white p-4 shadow-md">
              <View className="flex-row items-center gap-2">
                <Text className="text-text-main text-base font-semibold">Buy milk</Text>
                <Text>🛒</Text>
              </View>
              <View className="gap-1">
                <View className="flex-row items-center gap-1">
                  <Text className="text-text-main text-lg font-bold">100</Text>
                  <Text className="text-text-gray text-xs">SAR</Text>
                </View>
                <Text className="text-text-gray text-sm">2 days ago</Text>
              </View>
            </View>
            {/* expense card */}
            <View className="flex-row items-center justify-between rounded-lg bg-white p-4 shadow-md">
              <View className="flex-row items-center gap-2">
                <Text className="text-text-main text-base font-semibold">Buy bread</Text>
                <Text>🛒</Text>
              </View>
              <View className="gap-1">
                <View className="flex-row items-center gap-1">
                  <Text className="text-text-main text-lg font-bold">305</Text>
                  <Text className="text-text-gray text-xs">SAR</Text>
                </View>
                <Text className="text-text-gray text-sm">2 days ago</Text>
              </View>
            </View>
            {/* expense card */}
            <View className="flex-row items-center justify-between rounded-lg bg-white p-4 shadow-md">
              <View className="flex-row items-center gap-2">
                <Text className="text-text-main text-base font-semibold">Buy cookies</Text>
                <Text>🛒</Text>
              </View>
              <View className="gap-1">
                <View className="flex-row items-center gap-1">
                  <Text className="text-text-main text-lg font-bold">150</Text>
                  <Text className="text-text-gray text-xs">SAR</Text>
                </View>
                <Text className="text-text-gray text-sm">2 days ago</Text>
              </View>
            </View>
            {/* expense card */}
            <View className="flex-row items-center justify-between rounded-lg bg-white p-4 shadow-md">
              <View className="flex-row items-center gap-2">
                <Text className="text-text-main text-base font-semibold">Buy cookies</Text>
                <Text>🛒</Text>
              </View>
              <View className="gap-1">
                <View className="flex-row items-center gap-1">
                  <Text className="text-text-main text-lg font-bold">150</Text>
                  <Text className="text-text-gray text-xs">SAR</Text>
                </View>
                <Text className="text-text-gray text-sm">2 days ago</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
}

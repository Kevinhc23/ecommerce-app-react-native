import { StatusBar } from "expo-status-bar";
import { View, SafeAreaView, ScrollView } from "react-native";
import Header from "../component/section/header";
import "./globals.css";
import { InputSearch } from "../component/ui/Input";
import { Main } from "../component/section/main";
import { Products } from "../component/ui/products";

export default function App(): JSX.Element {
  return (
    <SafeAreaView className="bg-black">
      <View className="px-4 py-8 gap-8">
        <Header />
        <Main />

        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
}

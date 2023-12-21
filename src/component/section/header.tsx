import { View, Text, ScrollView } from "react-native";
import { ButtonIcon, ButtonLink } from "../ui/buttons";
import { InputSearch } from "../ui/Input";
import { CardSlider } from "./main";

export default function Header(): JSX.Element {
  return (
    <View className="gap-4">
      <View className="flex flex-row justify-between items-center">
        <Text className="text-white text-4xl font-bold">Discover</Text>
        <View className="flex flex-row gap-6 items-center">
          <ButtonIcon nameIcon="shopping-bag" />
        </View>
      </View>
      <InputSearch placeHolder="Search Products" />
    </View>
  );
}

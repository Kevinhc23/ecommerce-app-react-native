import { View, Text, Image, ScrollView } from "react-native";
import { StarIcon } from "../icons";

interface HeaderCardProps {
  title: string;
  subtitle: string;
  image: string;
  onPress?: () => void;
}

export const HeaderCard = ({
  title,
  subtitle,
  image,
  onPress,
}: HeaderCardProps) => {
  return (
    <View className="h-48 w-80 rounded-lg overflow-hidden">
      <Image source={{ uri: image }} className="h-full w-80 rounded-xl" />
      <View className="absolute top-0 left-0 right-0 h-full w-80 bg-black opacity-50" />
      <View className="absolute bottom-0 left-0 right-0 px-4 py-4">
        <Text className="text-white font-bold text-2xl">{title}</Text>
        <Text className="text-white font-normal text-lg">{subtitle}</Text>
      </View>
    </View>
  );
};

export const ProductCard = ({ title, price, image, valoration }: any) => {
  return (
    <View className="rounded-lg gap-2">
      <Image source={{ uri: image }} className="h-48 rounded-xl" />
      <View>
        <Text className="text-white font-bold text-xl">{title}</Text>
        <View className="flex-row justify-between items-center">
          <Text className="text-white font-normal text-lg">${price} USD</Text>
          <View className="flex-row items-center gap-2">
            <StarIcon />
            <Text className="text-white font-normal text-lg">{valoration}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

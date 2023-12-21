import { Pressable, StyleProp, Text, ViewStyle } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import IconMenu from "react-native-vector-icons/Ionicons";

interface ButtonProps {
  onPress?: () => void;
  nameIcon?: string;
  text?: string;
}

export const ButtonIcon = ({ onPress, nameIcon }: ButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <Icon name={`${nameIcon}`} size={24} color="#fff" />
    </Pressable>
  );
};

export const ButtonLink = ({ onPress, text }: ButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <Text className="text-white text-xl font-normal underline">{text}</Text>
    </Pressable>
  );
};

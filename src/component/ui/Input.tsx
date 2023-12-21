import { TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useState } from "react";

interface InputProps {
  onPress?: () => void;
  placeHolder?: string;
}

export const InputSearch = ({ placeHolder }: InputProps) => {
  return (
    <TextInput
      placeholder={placeHolder}
      className="bg-white rounded-full px-8 py-4 text-black "
    />
  );
};

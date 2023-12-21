import { Pressable, ScrollView, Text, View } from "react-native";

interface TagsProps {
  name?: string;
}

const TagsData = [
  {
    id: 1,
    name: "Adidas",
  },
  {
    id: 2,
    name: "Nike",
  },
  {
    id: 3,
    name: "Puma",
  },
  {
    id: 4,
    name: "Reebok",
  },
  {
    id: 5,
    name: "Converse",
  },
];

export const Tags = () => {
  return (
    <ScrollView
      className="flex flex-row"
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      decelerationRate={0}
    >
      <View className="flex-row gap-2">
        {TagsData.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => {
              const [{ name }] = TagsData.filter((tag) => tag.id === item.id);
              console.log(name);
            }}
          >
            <View className="bg-white px-4 py-2 rounded-full w-32">
              <Text className="text-black font-semibold text-center ">
                {item.name}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

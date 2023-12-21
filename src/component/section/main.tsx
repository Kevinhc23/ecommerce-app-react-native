import { HeaderCard } from "../ui/Card";
import { View, Text, ScrollView } from "react-native";
import { ButtonIcon, ButtonLink } from "../ui/buttons";
import { Tags } from "../ui/tags";
import { Products } from "../ui/products";

const SliderImage = [
  {
    id: 1,
    title: "New Arrival",
    subtitle: "You've never seen it before!",
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/612e04479ff1445b99b051d7e05b581f_9366/Samba_OG_Shoes_Green_IE7011_01_standard.jpg",
  },
  {
    id: 2,
    title: "Best Seller",
    subtitle: "Buy it before it runs out!",
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cbfca5a166ef44be85f9ae6d015f7a4c_9366/Forum_84_Low_Shoes_White_GW2007_01_standard.jpg",
  },
];
const ProductsData = [
  {
    id: 1,
    title: "Adidas Samba OG",
    price: 80.79,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/612e04479ff1445b99b051d7e05b581f_9366/Samba_OG_Shoes_Green_IE7011_01_standard.jpg",
    category: "Shoes",
    valoration: 4.5,
  },
  {
    id: 2,
    title: "Adidas Forum 84",
    price: 100.79,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cbfca5a166ef44be85f9ae6d015f7a4c_9366/Forum_84_Low_Shoes_White_GW2007_01_standard.jpg",
    category: "Shoes",
    valoration: 4.5,
  },
  {
    id: 3,
    title: "Adidas Superstar",
    price: 120.79,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg",
    category: "Shoes",
    valoration: 4.5,
  },
  {
    id: 4,
    title: "Adidas NMD_R1",
    price: 140.79,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e2a94436c8ce46aabf48ae61000ae692_9366/NMD_R1_V2_Shoes_Black_HP9743_01_standard.jpg",
    category: "Shoes",
    valoration: 4.5,
  },
  {
    id: 5,
    title: "Adidas Stan Smith",
    price: 160.79,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a6c30ecf06b44b809bdebe2b527685d4_9366/Stan_Smith_Lux_Shoes_Pink_IG1330_01_standard.jpg",
    category: "Shoes",
    valoration: 4.5,
  },
  {
    id: 6,
    title: "Adidas Stan Smith",
    price: 160.79,
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a6c30ecf06b44b809bdebe2b527685d4_9366/Stan_Smith_Lux_Shoes_Pink_IG1330_01_standard.jpg",
    category: "Shoes",
    valoration: 4.5,
  },
];
export const Main = (): JSX.Element => {
  return (
    <View className="gap-4">
      <CardSlider />
      <View className="flex flex-row justify-between items-center">
        <Text className="text-white text-2xl font-bold">Categories</Text>
        <ButtonLink text="See All" />
      </View>

      <Tags />
      <Products data={ProductsData} />
    </View>
  );
};

export const CardSlider = (): JSX.Element => {
  return (
    <ScrollView
      className="flex flex-row"
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      decelerationRate={0}
    >
      {SliderImage.map((item) => (
        <View className="flex justify-center items-center px-2" key={item.id}>
          <HeaderCard
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
          />
        </View>
      ))}
    </ScrollView>
  );
};

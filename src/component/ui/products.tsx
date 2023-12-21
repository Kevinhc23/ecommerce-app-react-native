import { View, Text } from "react-native";
import { ProductCard } from "./Card";
import { FlatGrid } from "react-native-super-grid";
import { Header } from "react-native/Libraries/NewAppScreen";
import { Main } from "../section/main";

export const Products = ({ data }: any) => {
  return (
    <View>
      <Text className="text-white font-bold text-2xl py-2">Products</Text>
      <FlatGrid
        itemDimension={130}
        data={data}
        renderItem={({ item }) => (
          <>
            <ProductCard
              title={item.title}
              price={item.price}
              image={item.image}
              valoration={item.valoration}
            />
          </>
        )}
      />
    </View>
  );
};

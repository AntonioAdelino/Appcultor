import * as React from "react";
import { View } from "react-native";
import { Button, Menu, Divider, Provider } from "react-native-paper";
import { IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const MenuTelaInicial = () => {
  const [visible, setVisible] = React.useState(true);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const navigation = useNavigation();
  const navegar = (destino) => {
    setVisible(false);
    navigation.navigate(destino);
  };

  return (
    <View
      style={{
        paddingTop: 0,
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <IconButton
            icon="dots-vertical"
            color={"#fff"}
            size={24}
            onPress={() => openMenu()}
          />
        }
      >
        <Menu.Item onPress={() => navegar("Contribua")} title="Contribua" />
        <Divider />
        <Menu.Item onPress={() => navegar("Info")} title="Informações" />
        
      </Menu>
    </View>
  );
};

export default MenuTelaInicial;

{
  /* <IconButton
    icon="dots-vertical"
    color={"#fff"}
    size={24}
    onPress={() => alert('Pressed')}
/> */
}

// function navegar (destino){
//     navigation.navigate(destino)
//     closeMenu;
//   }

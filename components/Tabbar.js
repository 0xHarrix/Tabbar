import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Dimensions, Pressable } from "react-native";
import { useNavigation, useRoute, useIsFocused } from "@react-navigation/native";

const Tabbar = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();
  const [activeTab, setActiveTab] = useState(isFocused ? route.name : null);

  useEffect(() => {
    if (isFocused) {
      setActiveTab(route.name);
    }
  }, [isFocused, route.name]);

  const tabData = [
    { name: 'Home', iconActive: require('../assets/HomeActivated.png'), iconInactive: require('../assets/Home.png') },
    { name: 'Categories', iconActive: require('../assets/CategoriesActivated.png'), iconInactive: require('../assets/Categories.png') },
    { name: 'Notifications', iconActive: require('../assets/NotificationsActivated.png'), iconInactive: require('../assets/Notifications.png') },
    { name: 'Accounts', iconActive: require('../assets/AccountsActivated.png'), iconInactive: require('../assets/Accounts.png') },
    { name: 'Cart', iconActive: require('../assets/CartActivated.png'), iconInactive: require('../assets/Cart.png') },
  ];

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    navigation.navigate(tabName);
  };

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/Tabbar1.png')} />
      </View>
      <View style={styles.group}>
        {tabData.map((tab) => (
          <Pressable key={tab.name} onPress={() => handleTabPress(tab.name)}>
            <Image source={activeTab === tab.name ? tab.iconActive : tab.iconInactive} style={styles.tabIcon} />
          </Pressable>
        ))}
      </View>
    </>
  );
};

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -10,
    width: "100%",
    alignItems: "center", // Position at the bottom
  },
  group: {
    position: 'absolute',
    bottom: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // Adjust the factor to your preference
    width: "100%", // 90% of the screen width
  },
  image: {
    width: '105%',
  },
  tabIcon: {
    marginHorizontal: 20,
  },
});

export default Tabbar;

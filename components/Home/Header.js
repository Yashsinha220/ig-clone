import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const Header = () => {
    // don't need to do display flex
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/header-logo.png")}
        ></Image>
      </TouchableOpacity>

      <View style={styles.iconcontainer}>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png",
            }}
            style={styles.icon}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/like.png",
            }}
            style={styles.icon}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style = {styles.unreadbadge}>
                <Text style = {styles.unreadbadgeText}>11</Text>
            </View>
          <Image
            source={{
              uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png",
            }}
            style={styles.icon}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 10,
  },

  iconcontainer: {
    flexDirection: "row",
  },

  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  unreadbadge : {
    // absolute position relative to parent itself
    backgroundColor: 'red',
    position : 'absolute',
    left : 20,
    bottom : 18,
    width: 25,
    height : 18,
    borderRadius : 25,
    alignItems : 'center',
    justifyContent : 'center',
    // more z index mor the item will be at top
    zIndex : 100,
    
  },
  unreadbadgeText : {
    color :'white',
    fontWeight : 600

  }
});

import React, { useState } from "react";
import {
  Image,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

//Thư viện bên ngoài
import CardView from "react-native-cardview";
import IconRight from "react-native-vector-icons/FontAwesome";

//Image
const imageLogoVnua = require("../src/images/LogoHUA.png");

export default function Login() {
  //State dùng nhận giá trị người dùng nhập login
  const [code, setCode] = useState("");

  //Hàm lấy dữ liệu ra xử lý khi ấn vào nút đăng nhập
  const ClickLogin = () => {
    console.log(code);
    if (code == "") {
      console.log("Rỗng");
    }
    setCode("");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.wrapperLogin}>
          <CardView cardElevation={2} cardMaxElevation={2} cornerRadius={5}>
            <Image style={styles.imageLogo} source={imageLogoVnua} />
          </CardView>
          <CardView cardElevation={2} cardMaxElevation={2} cornerRadius={5}>
            <TextInput
              keyboardType="numeric"
              maxLength={6}
              style={styles.textInputMSV}
              placeholder="Mã số"
              onChangeText={(text) => setCode(text)}
              value={code}
            ></TextInput>
          </CardView>
          <CardView cardElevation={2} cardMaxElevation={2} cornerRadius={5}>
            <TouchableOpacity style={styles.btnLogin} onPress={ClickLogin}>
              <IconRight name="chevron-right" color="#fff" size={16} />
            </TouchableOpacity>
          </CardView>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Style Login
  wrapperLogin: {
    margin: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  imageLogo: {
    width: 100,
    height: 100,
    marginBottom: 60,
  },

  textInputMSV: {
    borderColor: "#DDD",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 16,
    borderRadius: 8,
    width: 200,
  },

  btnLogin: {
    marginTop: 20,
    backgroundColor: "#559d55",
    width: 80,
    height: 60,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },
});

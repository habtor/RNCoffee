import axios from "axios";
import { router, Link } from "expo-router";
import React, { useState, useContext } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // console.log(email, password);
    const userData = {
      email,
      password,
    };
    axios
      .post("http:///192.168.2.5:3000/login-user", userData)
      .then((res) => {
        // router.push("/home");
        console.log(res.data);
        if (res.data.status === "ok") {
          // Alert.alert("Login Success");
          console.log(res.data);
          router.push("(tabs)");
        } else {
          Alert.alert("Login Failed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View className="mt-20 mx-10">
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Login
      </Text>
      <Text style={{ fontSize: 16 }}>Email</Text>
      <TextInput
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 5,
          padding: 10,
          marginBottom: 15,
        }}
      />

      {/* Password Input */}
      <Text style={{ fontSize: 16 }}>Password</Text>
      <TextInput
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 5,
          padding: 10,
          marginBottom: 20,
        }}
      />
      <Button title="Login" onPress={handleLogin} />
      <View className="flex-row justify-center  pt-5 gap-2">
        <Text className="text-base font-pmedium">Don't have an account?</Text>
        <Link href="/signup" className="text-blue-400">
          Sign Up
        </Link>
      </View>
    </View>
  );
};

export default LoginScreen;

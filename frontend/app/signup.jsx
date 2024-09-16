import axios from "axios";
import { router, Link } from "expo-router";
import React, { useState, useContext } from "react";
import { View, TextInput, Button, Text, Alert } from "react-native";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // Basic validation
    if (!username || !email || !password) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    const userData = {
      username,
      email,
      password,
    };
    axios
      .post("http:///192.168.2.5:3000/register", userData)
      .then((res) => {
        // router.push("/home");
        console.log(res.data);
        if (res.data.status === "ok") {
          Alert.alert("User Created Successfully");
          router.push("/");
        } else {
          Alert.alert("SignUp Failed");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View className="mt-20 mx-10">
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        Sign Up
      </Text>

      {/* Username Input */}
      <Text style={{ fontSize: 16 }}>Username</Text>
      <TextInput
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 5,
          padding: 10,
          marginBottom: 15,
        }}
      />

      {/* Email Input */}
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

      {/* Sign Up Button */}
      <Button title="Sign Up" onPress={handleSignUp} />

      {/* Link to Login */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 16 }}>Already have an account? </Text>
        <Link href="/" style={{ color: "blue", fontSize: 16 }}>
          Login
        </Link>
      </View>
    </View>
  );
};

export default SignUp;

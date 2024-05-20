import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { FontFamily } from '../../../GlobalStyles'
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const loginFormSchema = yup
                        .object({
                            email: yup.string().email("Email not valid").required("Email is Required"),
                            password: yup.string().min(8, "Password minimum 8 characters").required("Password must be filled")
                        }).required();

const Login = () => {
  const navigation = useNavigation()
  const [isShowPassword, setIsShowPassword] = useState(false)
    const {
        control,
        handleSubmit,
        getValues,
        getFieldState,
        formState: {errors}
    } = useForm({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: yupResolver(loginFormSchema)
    })

  const onSubmit = () => {
    console.log("Debug Form", {
      "getValues()": getValues(),
      "getFieldState('email')": getFieldState("email"),
    });
    const { email, password } = getValues();
    // navigation.navigate("Home", { email, password, isFromLogin: true });
  }

  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome Back!</Text>
        </View>
        <View style={styles.emailContainer}>
        <Controller
          control={control}
          rules={{
              required: true
          }}
          render={({ field: {onChange, onBlur, value} }) => (
            <TextInput
            label="Email"
            value={value}
            onChangeText={onChange}
            mode="outlined"
            style={styles.emailText}
            activeOutlineColor="#4D869C"
            outlineStyle={{ borderRadius: 10, borderColor: '#626262' }}
            onBlur={onBlur}
            left={
              <TextInput.Icon
                icon={() => (
                  <MaterialCommunityIcons
                    name={'email'}
                    size={20}
                    style={styles.icon}
                  />
                )}
                onPress={() => {}}
              />
            }
          />
          )}
        name="email"
        />
        {errors.email && (
          <Text style={styles.errors}>
          {errors.email.message}
          </Text>
        )}
        </View>
        <View style={styles.passwordContainer}>
        <Controller
          control={control}
          rules={{
              required: true
          }}
          render={({ field: {onChange, onBlur, value} }) => (
            <TextInput
            label="Password"
            value={value}
            onChangeText={onChange}
            mode="outlined"
            style={styles.passwordText}
            activeOutlineColor='#4D869C'
            outlineStyle={{borderRadius: 10, borderColor: '#626262'}}
            onBlur={onBlur}
            secureTextEntry={!isShowPassword}
            left={
              <TextInput.Icon
                icon={() => (
                  <MaterialCommunityIcons
                    name={'onepassword'}
                    size={20}
                    style={styles.icon}
                  />
                )}
                onPress={() => {}}
              />
            }
          />
          )}
        name="password"
        />
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
          position: 'absolute',
          right: 20,
          top: 25
        }}
        onPress={() => setIsShowPassword(!isShowPassword)}
            >
              <MaterialCommunityIcons
                name={isShowPassword ? "eye" : "eye-off"}
                size={20}
              />
        </TouchableOpacity>
        {errors.password && (
          <Text style={styles.errors}>
          {errors.password.message}
          </Text>
        )}
        </View>
        <View style={styles.loginButtonContainer}>
          <Button 
          mode="contained" 
          onPress={handleSubmit(onSubmit)}
          style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </Button>
        </View>
        <View style={styles.dontHaveContainer}>
          <Text style={styles.dontHaveText1}>Dont have an account? </Text>
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={styles.dontHaveText2}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  welcomeContainer: {
    marginLeft: 30,
    marginRight: 100,
    marginTop: 30
  },
  welcomeText: {
    fontFamily: FontFamily.plusJakartaSansBold,
    fontSize: 50
  },
  emailContainer: {
    marginHorizontal: 30,
    marginTop: 60,
  },
  emailText: {
    fontFamily: FontFamily.soraMedium,
    fontSize: 15,
    height: 60,
    backgroundColor: '#F3F3F3',
  },
  passwordContainer: {
    marginHorizontal: 30,
    marginTop: 25,
  },
  passwordText: {
    fontSize: 15,
    height: 60,
    backgroundColor: '#F3F3F3'
  },
  loginButtonContainer: {
    marginTop: 100,
    marginHorizontal: 30,
    justifyContent: 'center'
  },
  loginButton: {
    backgroundColor: '#4D869C',
    borderRadius: 10,
    padding: 10
  },
  loginButtonText: {
    fontSize: 20,
  },
  dontHaveContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  dontHaveText1: {
    fontFamily: FontFamily.soraMedium,
    color: 'gray'
  },
  dontHaveText2: {
    fontFamily: FontFamily.soraBold,
    color: '#4D869C'
  },
  errors: {
    fontFamily: FontFamily.soraRegular,
    fontSize: 12,
    color: 'red',
    marginLeft: 5,
    marginTop: 5
  },
  icon: {
    top: 5,
    color: 'grey'
  },
})
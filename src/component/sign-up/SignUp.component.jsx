import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import * as yup from "yup"
import { useNavigation } from '@react-navigation/native'
import { Button, TextInput } from 'react-native-paper'
import { FontFamily } from '../../../GlobalStyles'

const signUpFormSchema = yup
                        .object({
                            email: yup.string().email("Email not valid").required("Email is Required"),
                            password: yup.string().min(8, "Password minimum 8 characters").required("Password must be filled"),
                            confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Passwords must match").required("Password must be filled")
                        }).required();

const SignUp = () => {
  const navigation = useNavigation()
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
  const {
    control,
    handleSubmit,
    getValues,
    getFieldState,
    formState: {errors}
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: ""
    },
    resolver: yupResolver(signUpFormSchema)
  })

  const onSubmit = () => {
    console.log("Debug Form", {
      "getValues()": getValues(),
      "getFieldState('email')": getFieldState("email"),
    });
    const { email, password } = getValues();
    navigation.navigate("SignUpSuccess", { email, password, isFromLogin: true });
  }

  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.createAccountText}>Create an Account</Text>
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
        <View style={styles.passwordContainer}>
        <Controller
          control={control}
          rules={{
              required: true
          }}
          render={({ field: {onChange, onBlur, value} }) => (
            <TextInput
            label="Confirm Password"
            value={value}
            onChangeText={onChange}
            mode="outlined"
            style={styles.passwordText}
            activeOutlineColor='#4D869C'
            outlineStyle={{borderRadius: 10, borderColor: '#626262'}}
            onBlur={onBlur}
            secureTextEntry={!isShowConfirmPassword}
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
        name="confirmPassword"
        />
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
          position: 'absolute',
          right: 20,
          top: 25
        }}
        onPress={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
            >
              <MaterialCommunityIcons
                name={isShowPassword ? "eye" : "eye-off"}
                size={20}
              />
        </TouchableOpacity>
        {errors.confirmPassword && (
          <Text style={styles.errors}>
          {errors.confirmPassword.message}
          </Text>
        )}
        </View>
        <View style={styles.loginButtonContainer}>
          <Button 
          mode="contained" 
          onPress={handleSubmit(onSubmit)}
          style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>Sign Up</Text>
          </Button>
        </View>
      </View>
    </>
  )
}

export default SignUp

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
  createAccountText: {
    fontFamily: FontFamily.plusJakartaSansBold,
    fontSize: 36
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
    justifyContent: 'center'
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
    fontFamily: FontFamily.soraSemiBold
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
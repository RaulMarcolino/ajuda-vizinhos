import { View, Text, Image, StyleSheet, Button } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'

const index = () => {
  return (
    <View>
      <Text style = {styles.title} >Como você deseja usar o app?</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    position: "relative",
    textAlign: "center",
    paddingHorizontal: 20,
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
    marginTop: 15
  }
})

export default index
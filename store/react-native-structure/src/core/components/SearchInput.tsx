import React from 'react'
import { StyleSheet, TextInput, type TextInputProps, type TextStyle, View } from 'react-native'
import SearchIcon from '../assets/icons/Search'
import { s } from '../utils/size'

interface SearchInputProps extends  TextInputProps{
  inputStyle?: TextStyle
}


export default function SearchInput(props: SearchInputProps) {
  return (
    <View style={{...styles.searchContainer, ...props.style}}>
      <SearchIcon size={20} />
      <TextInput
        style={{...styles.searchBarnew, ...props.inputStyle}}
        placeholderTextColor="#A8A8A8"
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#f0f4f3",
    borderWidth: 1,
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingLeft: 16,
    paddingRight: 16,
    elevation: 1,
    marginHorizontal: 16,
    backgroundColor: "#fff",
  },
  searchBarnew: {
    flex: 1,
    height: 52,
    fontSize: s(12),
    color: "#000",
  },
})
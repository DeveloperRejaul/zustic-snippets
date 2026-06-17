import { StyleSheet, View } from "react-native";
import StarIcon from "@src/core/assets/icons/star";
import { colors } from "../constance/colors";

export default function Stars ({num, size}: {num:number, size?: number}) {
  const stars = Math.floor(num);
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map((star, index) => {
        return <StarIcon size={size} key={index} color={star <= stars ? undefined : colors.weight }/>
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    alignItems:"center"
  }
})
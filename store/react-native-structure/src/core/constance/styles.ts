import { StyleSheet } from "react-native";
import { PADDING_HORIZONTAL } from "./size";
import { typography } from "./typography";

export const GStyles = StyleSheet.create({
  row:{
    flexDirection:"row",
    alignItems:"center",
    gap: 10
  },
  rowWrap:{
    flexDirection:"row",
    alignItems:"center",
    gap: 10,
    flexWrap:"wrap"
  },
  rowBetween:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
  },
  center:{
    justifyContent:"center",
    alignItems:"center",
  },
  centerFull:{
    justifyContent:"center",
    alignItems:"center",
    flex:1,
  },
  between:{
    justifyContent:"space-between"
  },
  flex:{
    flex:1,
  },
  flexGrow :{
    flexGrow: 1,
  },
  flexWrap:{
    flexWrap:"wrap"
  },
  widthFull:{
    width:"100%"
  },
  heightFull:{
    height:"100%"
  },

  // extra
  hint:{
    ...typography.text_xs_regular,
    backgroundColor: "#E9F9F3",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 1000,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: "#90C0A5",
  },
  productListBody:{
    flexDirection:"row",
    justifyContent:"space-between",
    flexWrap:"wrap",
    rowGap: 8,
    paddingTop: 10,
  },
  screenScrollViewContainer:{
    paddingHorizontal:PADDING_HORIZONTAL, 
    paddingBottom: 30
  }
})
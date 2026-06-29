import { StyleSheet } from "react-native";
import { fonts } from "./fonts";
import { s } from "../utils/size";

const base = StyleSheet.create({
  title_2xl:{
    fontSize: 72,
    lineHeight: 90,
    letterSpacing: -2,
  },
  title_xl:{
    fontSize: 60,
    lineHeight: 72,
    letterSpacing: -2,
  },
  title_lg:{
    fontSize: 48,
    lineHeight: 60,
    letterSpacing: -2,
  },
  title_md:{
    fontSize: 36,
    lineHeight: 44,
    letterSpacing: -2,
  },
  title_sm:{
    fontSize: 30,
    lineHeight: 38,
    letterSpacing: 0,
  },
  title_xs:{
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0,
  },
  text_xl:{
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: 0,
  },
  text_lg:{
    fontSize: 18,
    lineHeight: 28,
    letterSpacing: 0,
  },
  text_md:{
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
  },
  text_sm:{
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0,
  },
  text_xs:{
    fontSize: s(12),
    lineHeight: 18,
    letterSpacing: 0,
  }
})

export const typography = StyleSheet.create({
  title_2xl_regular:{
    ...base.title_2xl,
    fontFamily: fonts.poppinsRegular
  },
  title_2xl_medium:{
    ...base.title_2xl,
    fontFamily: fonts.poppinsMedium
  },
  title_2xl_semibold:{
    ...base.title_2xl,
    fontFamily: fonts.poppinsSemiBold
  },
  title_2xl_bold:{
    ...base.title_2xl,
    fontFamily:fonts.poppinsBold
  },

  title_xl_regular:{
    ...base.title_xl,
    fontFamily: fonts.poppinsRegular
  },
  title_xl_medium:{
    ...base.title_xl,
    fontWeight:"500"
  },
  title_xl_semibold:{
    ...base.title_xl,
    fontFamily: fonts.poppinsSemiBold
  },
  title_xl_bold:{
    ...base.title_xl,
    fontFamily: fonts.poppinsBold
  },

  title_lg_regular:{
    ...base.title_lg,
    fontFamily: fonts.poppinsRegular
  },
  title_lg_medium:{
    ...base.title_lg,
    fontFamily: fonts.poppinsMedium
  },
  title_lg_semibold:{
    ...base.title_lg,
    fontFamily: fonts.poppinsSemiBold
  },
  title_lg_bold:{
    ...base.title_lg,
    fontFamily: fonts.poppinsBold
  },

  title_md_regular:{
    ...base.title_md,
    fontFamily: fonts.poppinsRegular
  },
  title_md_medium:{
    ...base.title_md,
    fontFamily: fonts.poppinsMedium
  },
  title_md_semibold:{
    ...base.title_md,
    fontFamily: fonts.poppinsSemiBold
  },
  title_md_bold:{
    ...base.title_md,
    fontFamily: fonts.poppinsBold
  },

  title_sm_regular:{
    ...base.title_sm,
    fontFamily: fonts.poppinsRegular
  },
  title_sm_medium:{
    ...base.title_sm,
    fontFamily: fonts.poppinsMedium
  },
  title_sm_semibold:{
    ...base.title_sm,
    fontFamily: fonts.poppinsSemiBold
  },
  title_sm_bold:{
    ...base.title_sm,
    fontFamily: fonts.poppinsBold
  },

  title_xs_regular:{
    ...base.title_xs,
    fontFamily: fonts.poppinsRegular
  },
  title_xs_medium:{
    ...base.title_xs,
    fontFamily: fonts.poppinsMedium
  },
  title_xs_semibold:{
    ...base.title_xs,
    fontFamily: fonts.poppinsSemiBold
  },
  title_xs_bold:{
    ...base.title_xs,
    fontFamily: fonts.poppinsBold
  },

  text_xl_regular:{
    ...base.text_xl,
    fontFamily: fonts.poppinsRegular
  },
  text_xl_medium:{
    ...base.text_xl,
    fontFamily: fonts.poppinsMedium
  },
  text_xl_semibold:{
    ...base.text_xl,
    fontFamily: fonts.poppinsSemiBold
  },
  text_xl_bold:{
    ...base.text_xl,
    fontFamily: fonts.poppinsBold
  },

  text_lg_regular:{
    ...base.text_lg,
    fontFamily: fonts.poppinsRegular
  },
  text_lg_medium:{
    ...base.text_lg,
    fontFamily: fonts.poppinsMedium
  },
  text_lg_semibold:{
    ...base.text_lg,
    fontFamily: fonts.poppinsSemiBold
  },
  text_lg_bold:{
    ...base.text_lg,
    fontFamily: fonts.poppinsBold
  },

  text_md_regular:{
    ...base.text_md,
    fontFamily: fonts.poppinsRegular
  },
  text_md_medium:{
    ...base.text_md,
    fontFamily: fonts.poppinsMedium
  },
  text_md_semibold:{
    ...base.text_md,
    fontFamily: fonts.poppinsSemiBold
  },
  text_md_bold:{
    ...base.text_md,
    fontFamily: fonts.poppinsBold
  },

  text_sm_regular:{
    ...base.text_sm,
    fontFamily: fonts.poppinsRegular
  },
  text_sm_medium:{
    ...base.text_sm,
    fontFamily: fonts.poppinsMedium
  },
  text_sm_semibold:{
    ...base.text_sm,
    fontFamily: fonts.poppinsSemiBold
  },
  text_sm_bold:{
    ...base.text_sm,
    fontFamily: fonts.poppinsBold
  },

  text_xs_regular:{
    ...base.text_xs,
    fontFamily: fonts.poppinsRegular
  },
  text_xs_medium:{
    ...base.text_xs,
    fontFamily: fonts.poppinsMedium
  },
  text_xs_semibold:{
    ...base.text_xs,
    fontFamily: fonts.poppinsSemiBold
  },
  text_xs_bold:{
    ...base.text_xs,
    fontFamily: fonts.poppinsBold
  },
})

import { StyleSheet } from "react-native";
import { colors } from "./colors";

const style = StyleSheet.create({
  // Alinhamento
  alignCenter: { alignItems: "center" },
  itemsCenter: { alignItems: "center" },
  itemsStretch: { alignItems: "stretch" },
  justifyCenter: { justifyContent: "center" },
  selfCenter: { alignSelf: "center" },
  selfStart: { alignSelf: "flex-start" },
  textCenter: { textAlign: "center" },

  // Background
  bgBlack: { backgroundColor: colors.black },
  bgBlue500: { backgroundColor: colors.blue[500] },
  bgBlue600: { backgroundColor: colors.blue[600] },
  bgRed500: { backgroundColor: colors.red[500] },
  bgZinc800: { backgroundColor: colors.zinc[800] },
  bgZinc900: { backgroundColor: colors.zinc[900] },
  bgZinc950: { backgroundColor: colors.zinc[950] },

  // Borda
  border: { borderWidth: 1 },
  borderZinc800: { borderColor: colors.zinc[800] },

  // Flexbox
  flex1: { flex: 1 },
  flexRow: { flexDirection: "row" },

  // Fonte
  fontBlack: { fontWeight: "900" },
  fontBold: { fontWeight: "bold" },
  text2Xl: { fontSize: 24 },
  text3Xl: { fontSize: 32 },
  textBlue500: { color: colors.blue[500] },
  textXs: { fontSize: 12 },
  textSm: { fontSize: 14 },
  textLg: { fontSize: 18 },
  textRed500: { color: colors.red[500] },
  textWhite: { color: colors.white },
  textXl: { fontSize: 20 },
  textZinc400: { color: colors.zinc[400] },

  // Espaçamento
  gapX1: { columnGap: 4 },
  gapX2: { columnGap: 8 },
  gapX4: { columnGap: 16 },
  gapY1: { rowGap: 4 },
  gapY2: { rowGap: 8 },
  gapY4: { rowGap: 16 },
  mt1: { marginTop: 4 },
  mt3: { marginTop: 12 },
  p2: { padding: 8 },
  p4: { padding: 16 },
  px4: { paddingHorizontal: 16 },
  py1: { paddingVertical: 4 },
  py2: { paddingVertical: 8 },
  py4: { paddingVertical: 16 },
  py8: { paddingVertical: 32 },

  // Bordas arredondadas
  roundedFull: { borderRadius: 9999 },
  roundedLg: { borderRadius: 8 },
  roundedMd: { borderRadius: 4 },

  // Largura
  w4_5: { width: "80%" },
  w9_10: { width: "90%" },
  wFull: { width: "100%" },
});

// Alinhamento
export const alignCenter = style.alignCenter;
export const itemsCenter = style.itemsCenter;
export const itemsStretch = style.itemsStretch;
export const justifyCenter = style.justifyCenter;
export const selfCenter = style.selfCenter;
export const selfStart = style.selfStart;
export const textCenter = style.textCenter;

// Background
export const bgBlack = style.bgBlack;
export const bgBlue500 = style.bgBlue500;
export const bgBlue600 = style.bgBlue600;
export const bgRed500 = style.bgRed500;
export const bgZinc800 = style.bgZinc800;
export const bgZinc900 = style.bgZinc900;
export const bgZinc950 = style.bgZinc950;

// Borda
export const border = style.border;
export const borderZinc800 = style.borderZinc800;

// Flexbox
export const flex1 = style.flex1;
export const flexRow = style.flexRow;

// Fonte
export const fontBlack = style.fontBlack;
export const fontBold = style.fontBold;
export const text2Xl = style.text2Xl;
export const text3Xl = style.text3Xl;
export const textBlue500 = style.textBlue500;
export const textXs = style.textXs;
export const textSm = style.textSm;
export const textLg = style.textLg;
export const textRed500 = style.textRed500;
export const textWhite = style.textWhite;
export const textXl = style.textXl;
export const textZinc400 = style.textZinc400;

// Espaçamento
export const gapX1 = style.gapX1;
export const gapX2 = style.gapX2;
export const gapX4 = style.gapX4;
export const gapY1 = style.gapY1;
export const gapY2 = style.gapY2;
export const gapY4 = style.gapY4;
export const mt1 = style.mt1;
export const mt3 = style.mt3;
export const p2 = style.p2;
export const p4 = style.p4;
export const px4 = style.px4;
export const py1 = style.py1;
export const py2 = style.py2;
export const py4 = style.py4;
export const py8 = style.py8;

// Bordas arredondadas
export const roundedFull = style.roundedFull;
export const roundedLg = style.roundedLg;
export const roundedMd = style.roundedMd;

// Largura
export const w4_5 = style.w4_5;
export const w9_10 = style.w9_10;
export const wFull = style.wFull;

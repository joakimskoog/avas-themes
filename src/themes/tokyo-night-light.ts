import { compileTokyoNightTheme, type TokyoNightPalette } from "./_helpers/tokyo-night";

const tokyoNightLightPalette: TokyoNightPalette = {
  background: "rgb(230, 231, 237)",
  backgroundSubtle: "rgb(214, 216, 223)",
  backgroundLowest: "rgb(193, 194, 199)",
  elevated: "rgb(214, 216, 223)",
  elevatedHover: "rgb(220, 222, 227)",
  border: "rgb(112, 114, 128)",
  borderSubtle: "rgb(193, 194, 199)",
  selected: "rgb(172, 176, 191)",
  shadow: "rgb(52, 59, 88)",
  text: "rgb(52, 59, 88)",
  textDiscreet: "rgb(112, 114, 128)",
  textDisabled: "rgb(157, 160, 171)",
  onAccent: "rgb(230, 231, 237)",
  primary: "rgb(41, 89, 170)",
  primaryHover: "rgb(80, 111, 202)",
  buy: "rgb(41, 89, 170)",
  buyHover: "rgb(80, 111, 202)",
  sell: "rgb(140, 67, 81)",
  warning: "rgb(143, 94, 21)",
  success: "rgb(51, 99, 92)",
  info: "rgb(0, 108, 134)",
  privateBanking: "rgb(123, 67, 186)",
  graph: {
    a: "rgb(150, 80, 39)",
    b: "rgb(41, 89, 170)",
    c: "rgb(143, 94, 21)",
    d: "rgb(0, 108, 134)",
    e: "rgb(80, 111, 202)",
    f: "rgb(123, 67, 186)",
    g: "rgb(140, 67, 81)",
    h: "rgb(51, 99, 92)",
    i: "rgb(90, 62, 142)",
    j: "rgb(112, 114, 128)",
    k: "rgb(52, 59, 88)",
  },
};

const tokyoNightLightTheme = compileTokyoNightTheme(
  "tokyo-night-light",
  "Tokyo Night Light",
  tokyoNightLightPalette,
);

export default tokyoNightLightTheme;

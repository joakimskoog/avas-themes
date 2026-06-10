import { compileTokyoNightTheme, type TokyoNightPalette } from "./_helpers/tokyo-night";

const tokyoNightStormPalette: TokyoNightPalette = {
  background: "rgb(36, 40, 59)",
  backgroundSubtle: "rgb(31, 35, 53)",
  backgroundLowest: "rgb(27, 30, 46)",
  elevated: "rgb(31, 35, 53)",
  elevatedHover: "rgb(44, 50, 74)",
  border: "rgb(84, 92, 126)",
  borderSubtle: "rgb(59, 66, 97)",
  selected: "rgb(111, 123, 182)",
  shadow: "rgb(0, 0, 0)",
  text: "rgb(192, 202, 245)",
  textDiscreet: "rgb(169, 177, 214)",
  textDisabled: "rgb(84, 92, 126)",
  onAccent: "rgb(36, 40, 59)",
  primary: "rgb(122, 162, 247)",
  primaryHover: "rgb(125, 207, 255)",
  buy: "rgb(122, 162, 247)",
  buyHover: "rgb(125, 207, 255)",
  sell: "rgb(247, 118, 142)",
  warning: "rgb(224, 175, 104)",
  success: "rgb(158, 206, 106)",
  info: "rgb(125, 207, 255)",
  privateBanking: "rgb(187, 154, 247)",
  graph: {
    a: "rgb(255, 158, 100)",
    b: "rgb(122, 162, 247)",
    c: "rgb(224, 175, 104)",
    d: "rgb(125, 207, 255)",
    e: "rgb(42, 195, 222)",
    f: "rgb(187, 154, 247)",
    g: "rgb(247, 118, 142)",
    h: "rgb(158, 206, 106)",
    i: "rgb(157, 124, 216)",
    j: "rgb(169, 177, 214)",
    k: "rgb(192, 202, 245)",
  },
};

const tokyoNightStormTheme = compileTokyoNightTheme(
  "tokyo-night-storm",
  "Tokyo Night Storm",
  tokyoNightStormPalette,
);

export default tokyoNightStormTheme;

import { compileCatppuccinTheme, type CatppuccinPalette } from "./_compile";

const macchiatoPalette: CatppuccinPalette = {
  rosewater: "rgb(244, 219, 214)",
  flamingo: "rgb(240, 198, 198)",
  pink: "rgb(245, 189, 230)",
  mauve: "rgb(198, 160, 246)",
  red: "rgb(237, 135, 150)",
  maroon: "rgb(238, 153, 160)",
  peach: "rgb(245, 169, 127)",
  yellow: "rgb(238, 212, 159)",
  green: "rgb(166, 218, 149)",
  teal: "rgb(139, 213, 202)",
  sky: "rgb(145, 215, 227)",
  sapphire: "rgb(125, 196, 228)",
  blue: "rgb(138, 173, 244)",
  lavender: "rgb(183, 189, 248)",
  text: "rgb(202, 211, 245)",
  subtext1: "rgb(184, 192, 224)",
  subtext0: "rgb(165, 173, 203)",
  overlay2: "rgb(147, 154, 183)",
  overlay1: "rgb(128, 135, 162)",
  overlay0: "rgb(110, 115, 141)",
  surface2: "rgb(91, 96, 120)",
  surface1: "rgb(73, 77, 100)",
  surface0: "rgb(54, 58, 79)",
  base: "rgb(36, 39, 58)",
  mantle: "rgb(30, 32, 48)",
  crust: "rgb(24, 25, 38)",
};

const catppuccinMacchiatoTheme = compileCatppuccinTheme(
  "catppuccin-macchiato",
  "Catppuccin Macchiato",
  macchiatoPalette,
);

export default catppuccinMacchiatoTheme;

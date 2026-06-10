import { compileGruvboxTheme, type GruvboxPalette } from "./_helpers/gruvbox";

const gruvboxLightPalette: GruvboxPalette = {
  bg0: "rgb(251, 241, 199)",
  bg1: "rgb(235, 219, 178)",
  bg2: "rgb(213, 196, 161)",
  bg3: "rgb(189, 174, 147)",
  bg4: "rgb(168, 153, 132)",
  fg0: "rgb(40, 40, 40)",
  fg1: "rgb(60, 56, 54)",
  fg2: "rgb(80, 73, 69)",
  fg3: "rgb(102, 92, 84)",
  fg4: "rgb(124, 111, 100)",
  gray: "rgb(146, 131, 116)",
  red: "rgb(157, 0, 6)",
  green: "rgb(121, 116, 14)",
  yellow: "rgb(181, 118, 20)",
  blue: "rgb(7, 102, 120)",
  purple: "rgb(143, 63, 113)",
  aqua: "rgb(66, 123, 88)",
  orange: "rgb(175, 58, 3)",
};

const gruvboxLightTheme = compileGruvboxTheme(
  "gruvbox-light",
  "Gruvbox Light",
  gruvboxLightPalette,
);

export default gruvboxLightTheme;

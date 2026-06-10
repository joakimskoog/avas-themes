import { compileGruvboxTheme, type GruvboxPalette } from "./_helpers/gruvbox";

const gruvboxDarkPalette: GruvboxPalette = {
  bg0: "rgb(40, 40, 40)",
  bg1: "rgb(60, 56, 54)",
  bg2: "rgb(80, 73, 69)",
  bg3: "rgb(102, 92, 84)",
  bg4: "rgb(124, 111, 100)",
  fg0: "rgb(251, 241, 199)",
  fg1: "rgb(235, 219, 178)",
  fg2: "rgb(213, 196, 161)",
  fg3: "rgb(189, 174, 147)",
  fg4: "rgb(168, 153, 132)",
  gray: "rgb(146, 131, 116)",
  red: "rgb(251, 73, 52)",
  green: "rgb(184, 187, 38)",
  yellow: "rgb(250, 189, 47)",
  blue: "rgb(131, 165, 152)",
  purple: "rgb(211, 134, 155)",
  aqua: "rgb(142, 192, 124)",
  orange: "rgb(254, 128, 25)",
};

const gruvboxDarkTheme = compileGruvboxTheme("gruvbox-dark", "Gruvbox Dark", gruvboxDarkPalette);

export default gruvboxDarkTheme;

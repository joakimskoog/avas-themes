import { compileRosePineTheme, type RosePinePalette } from "./_helpers/rose-pine";

const rosePinePalette: RosePinePalette = {
  base: "rgb(25, 23, 36)",
  surface: "rgb(31, 29, 46)",
  overlay: "rgb(38, 35, 58)",
  muted: "rgb(110, 106, 134)",
  subtle: "rgb(144, 140, 170)",
  text: "rgb(224, 222, 244)",
  love: "rgb(235, 111, 146)",
  gold: "rgb(246, 193, 119)",
  rose: "rgb(235, 188, 186)",
  pine: "rgb(49, 116, 143)",
  foam: "rgb(156, 207, 216)",
  iris: "rgb(196, 167, 231)",
  highlightLow: "rgb(33, 32, 46)",
  highlightMed: "rgb(64, 61, 82)",
  highlightHigh: "rgb(82, 79, 103)",
};

const rosePineTheme = compileRosePineTheme("rose-pine", "Rose Pine", rosePinePalette);

export default rosePineTheme;

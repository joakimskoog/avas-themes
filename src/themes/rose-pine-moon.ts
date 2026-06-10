import { compileRosePineTheme, type RosePinePalette } from "./_helpers/rose-pine";

const moonPalette: RosePinePalette = {
  base: "rgb(35, 33, 54)",
  surface: "rgb(42, 39, 63)",
  overlay: "rgb(57, 53, 82)",
  muted: "rgb(110, 106, 134)",
  subtle: "rgb(144, 140, 170)",
  text: "rgb(224, 222, 244)",
  love: "rgb(235, 111, 146)",
  gold: "rgb(246, 193, 119)",
  rose: "rgb(234, 154, 151)",
  pine: "rgb(62, 143, 176)",
  foam: "rgb(156, 207, 216)",
  iris: "rgb(196, 167, 231)",
  highlightLow: "rgb(42, 40, 62)",
  highlightMed: "rgb(68, 65, 90)",
  highlightHigh: "rgb(86, 82, 110)",
};

const rosePineMoonTheme = compileRosePineTheme("rose-pine-moon", "Rose Pine Moon", moonPalette);

export default rosePineMoonTheme;

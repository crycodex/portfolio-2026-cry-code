import { Color } from "three";

type Theme = "light" | "dark";

const palette = {
  light: {
    bgPrimary: "#fafafa",
    bgSecondary: "#efefef",
    shadowRoom: "#d4d4d4",
    shadowContact: "#c8c8c8",
  },
  dark: {
    bgPrimary: "#101013",
    bgSecondary: "#18181c",
    shadowRoom: "#000000",
    shadowContact: "#000000",
  },
} as const;

export const colors = {
  bgPrimary: new Color(palette.light.bgPrimary),
  bgSecondary: new Color(palette.light.bgSecondary),
  shadowRoomColor: new Color(palette.light.shadowRoom),
  shadowContactColor: new Color(palette.light.shadowContact),
  // sRGB-converted versions shared with the shadow-catcher uniforms
  shadowRoomBg: new Color(palette.light.bgPrimary).convertLinearToSRGB(),
  shadowContactBg: new Color(palette.light.bgSecondary).convertLinearToSRGB(),
};

export const setThreeTheme = (theme: Theme) => {
  const p = palette[theme];
  colors.bgPrimary.set(p.bgPrimary);
  colors.bgSecondary.set(p.bgSecondary);
  colors.shadowRoomColor.set(p.shadowRoom);
  colors.shadowContactColor.set(p.shadowContact);
  colors.shadowRoomBg.copy(colors.bgPrimary).convertLinearToSRGB();
  colors.shadowContactBg.copy(colors.bgSecondary).convertLinearToSRGB();
};

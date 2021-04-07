import { darken, lighten } from "polished";

export const white = "#fff";
export const black = "#000";

const gray = "#c4c4c4";
export const gray100 = lighten(0.2, gray);
export const gray200 = lighten(0.1, gray);
export const gray300 = gray;
export const gray400 = darken(0.1, gray);
export const gray500 = darken(0.2, gray);

const red = "#ee0055";
export const red100 = lighten(0.2, red);
export const red200 = lighten(0.1, red);
export const red300 = red;
export const red400 = darken(0.1, red);
export const red500 = darken(0.2, red);

const blue = "#1a71f3";
export const blue100 = lighten(0.35, blue);
export const blue200 = lighten(0.1, blue);
export const blue300 = blue;
export const blue400 = darken(0.1, blue);
export const blue500 = darken(0.2, blue);

const orange = "#FF5733";
export const orange100 = lighten(0.3, orange);
export const orange200 = lighten(0.1, orange);
export const orange300 = orange;
export const orange400 = darken(0.1, orange);
export const orange500 = darken(0.2, orange);

const green = "#25BA54";
export const green300 = green;

export const textColor = darken(0.75, gray);

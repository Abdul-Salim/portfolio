import plugin from "tailwindcss/plugin";
import { fontFamily } from "tailwindcss/defaultTheme";

type ShadcnTheme = "zinc" | "slate" | "stone" | "gray" | "neutral";
type ShadcnRadius = "none" | "sm" | "md" | "lg" | "full";
type ShadcnStyle = "default" | "new-york";

export type ShadcnOptions = {
  theme?: ShadcnTheme;
  radius?: ShadcnRadius;
  style?: ShadcnStyle;
  base?: {
    colors?: {
      background?: string;
      foreground?: string;
      card?: string;
      popover?: string;
      primary?: string;
      secondary?: string;
      muted?: string;
      accent?: string;
      destructive?: string;
      border?: string;
      input?: string;
      ring?: string;
    };
  };
};

export const shadcnPlugin = (options: ShadcnOptions = {}) => {
  const theme = options.theme || "zinc";
  const radius = options.radius || "md";
  const style = options.style || "default";
  const baseColors = options.base?.colors || {};

  // Define radius values
  let radiusValue = 0.5; // Default is md = 0.5rem
  switch (radius) {
    case "none":
      radiusValue = 0;
      break;
    case "sm":
      radiusValue = 0.3;
      break;
    case "lg":
      radiusValue = 0.75;
      break;
    case "full":
      radiusValue = 9999;
      break;
  }

  // Determine color based on theme
  const colors = {
    background: baseColors.background || "",
    foreground: baseColors.foreground || "",
    card: baseColors.card || "",
    popover: baseColors.popover || "",
    primary: baseColors.primary || "",
    secondary: baseColors.secondary || "",
    muted: baseColors.muted || "",
    accent: baseColors.accent || "",
    destructive: baseColors.destructive || "",
    border: baseColors.border || "",
    input: baseColors.input || "",
    ring: baseColors.ring || "",
  };

  return plugin(({ addBase }) => {
    addBase({
      ":root": {
        "--background": colors.background || "0 0% 100%", // white
        "--foreground": colors.foreground || `${theme === "zinc" ? "240" : "222"} 47% 11%`, // zinc-950 or similar
        "--card": colors.card || "0 0% 100%", // white
        "--card-foreground": colors.foreground || `${theme === "zinc" ? "240" : "222"} 47% 11%`, // zinc-950 or similar
        "--popover": colors.popover || "0 0% 100%", // white
        "--popover-foreground": colors.foreground || `${theme === "zinc" ? "240" : "222"} 47% 11%`, // zinc-950 or similar
        "--primary": colors.primary ? hexToHsl(colors.primary) : "262 80% 53%", // purple
        "--primary-foreground": "210 40% 98%", // white for primary bg
        "--secondary": colors.secondary || `${theme === "zinc" ? "240" : "222"} 4.9% 93.9%`, // zinc-100 or similar
        "--secondary-foreground": colors.foreground || `${theme === "zinc" ? "240" : "222"} 47% 11%`, // zinc-950 or similar
        "--muted": colors.muted || `${theme === "zinc" ? "240" : "222"} 4.9% 93.9%`, // zinc-100 or similar
        "--muted-foreground": "215.4 16.3% 46.9%", // zinc-500 or similar
        "--accent": colors.accent || `${theme === "zinc" ? "240" : "222"} 4.9% 93.9%`, // zinc-100 or similar
        "--accent-foreground": colors.foreground || `${theme === "zinc" ? "240" : "222"} 47% 11%`, // zinc-950 or similar
        "--destructive": colors.destructive || "0 84.2% 60.2%", // red-500
        "--destructive-foreground": "210 40% 98%", // white for destructive bg
        "--border": colors.border || `${theme === "zinc" ? "240" : "222"} 5.9% 90%`, // zinc-200 or similar
        "--input": colors.input || `${theme === "zinc" ? "240" : "222"} 5.9% 90%`, // zinc-200 or similar
        "--ring": colors.ring || "262 80% 53%", // same as primary
        "--radius": `${radiusValue}rem`,
      },
      ".dark": {
        "--background": colors.background || `${theme === "zinc" ? "240" : "222"} 10% 10%`, // zinc-950 or similar
        "--foreground": "210 40% 98%", // white
        "--card": colors.card || `${theme === "zinc" ? "240" : "222"} 10% 10%`, // zinc-950 or similar
        "--card-foreground": "210 40% 98%", // white
        "--popover": colors.popover || `${theme === "zinc" ? "240" : "222"} 10% 10%`, // zinc-950 or similar
        "--popover-foreground": "210 40% 98%", // white
        "--primary": colors.primary ? hexToHsl(colors.primary) : "262 80% 53%",
        "--primary-foreground": "210 40% 98%", // white
        "--secondary": colors.secondary || `${theme === "zinc" ? "240" : "222"} 3.7% 15.9%`, // zinc-800 or similar
        "--secondary-foreground": "210 40% 98%", // white
        "--muted": colors.muted || `${theme === "zinc" ? "240" : "222"} 3.7% 15.9%`, // zinc-800 or similar
        "--muted-foreground": "215 20.2% 65.1%", // zinc-400 or similar
        "--accent": colors.accent || `${theme === "zinc" ? "240" : "222"} 3.7% 15.9%`, // zinc-800 or similar
        "--accent-foreground": "210 40% 98%", // white
        "--destructive": colors.destructive || "0 62.8% 30.6%", // red-900
        "--destructive-foreground": "210 40% 98%", // white
        "--border": colors.border || `${theme === "zinc" ? "240" : "222"} 3.7% 15.9%`, // zinc-800 or similar
        "--input": colors.input || `${theme === "zinc" ? "240" : "222"} 3.7% 15.9%`, // zinc-800 or similar
        "--ring": colors.ring || "262 80% 53%", // same as primary
      },
    });

    addBase({
      "*": { "@apply border-border": {} },
      body: { "@apply bg-background text-foreground": {} },
      html: {
        "@apply antialiased": {},
        "font-feature-settings": '"rlig" 1, "calt" 1',
      },
    });
  });
};

// Helper to convert hex to HSL for CSS variables
function hexToHsl(hex: string): string {
  // Remove the # if it exists
  hex = hex.replace(/^#/, '');

  // Parse the r, g, b values
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  // Find the min and max values
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }

    h = h / 6;
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return `${h} ${s}% ${l}%`;
}

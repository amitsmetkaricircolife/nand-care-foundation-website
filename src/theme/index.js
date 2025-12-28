import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        // Primary Red
        primary: {
          50: { value: "#FFF5F5" },
          100: { value: "#FFE0E0" },
          200: { value: "#FFBABA" },
          300: { value: "#FF8A8A" },
          400: { value: "#FF5757" },
          500: { value: "#E94B4B" },
          600: { value: "#D63333" },
          700: { value: "#B82828" },
          800: { value: "#A11F1F" },
          900: { value: "#8B1414" },
        },

        // Secondary Green
        secondary: {
          50: { value: "#F5FFF9" },
          100: { value: "#B8F4E4" },
          200: { value: "#7FEFD0" },
          300: { value: "#4AE9BD" },
          400: { value: "#22E3AB" },
          500: { value: "#16A75C" },
          600: { value: "#138F4E" },
          700: { value: "#107840" },
          800: { value: "#0D6133" },
          900: { value: "#0A4A26" },
        },

        // Tertiary Beige
        tertiary: {
          50: { value: "#FAF8F5" },
          100: { value: "#F5F0E8" },
          200: { value: "#EBE2D1" },
          300: { value: "#E0D4BA" },
          400: { value: "#D6C6A3" },
          500: { value: "#D4C5A0" },
          600: { value: "#B8A37D" },
          700: { value: "#9C825A" },
          800: { value: "#7D6745" },
          900: { value: "#5E4C32" },
        },

        // Coral
        coral: {
          50: { value: "#FFF5F5" },
          100: { value: "#FFE5E5" },
          200: { value: "#FFB8B8" },
          300: { value: "#FF9B9B" },
          400: { value: "#FF7575" },
          500: { value: "#F44336" },
          600: { value: "#E33C2E" },
          700: { value: "#D32F2F" },
          800: { value: "#C62828" },
          900: { value: "#B71C1C" },
        },

        // Green
        green: {
          50: { value: "#E8F9F1" },
          100: { value: "#C5F2DD" },
          200: { value: "#8EE9C0" },
          300: { value: "#58E0A3" },
          400: { value: "#2DD88A" },
          500: { value: "#10B981" },
          600: { value: "#0FA872" },
          700: { value: "#0D9360" },
          800: { value: "#0B7A4F" },
          900: { value: "#09623F" },
        },

        // Beige
        beige: {
          50: { value: "#FAF8F5" },
          100: { value: "#F5F0E8" },
          200: { value: "#EBE2D1" },
          300: { value: "#E0D4BA" },
          400: { value: "#D1BC9A" },
          500: { value: "#BFA57A" },
          600: { value: "#A58E5F" },
          700: { value: "#FFDA58" },
        },

        // Gray
        gray: {
          50: { value: "#F9FAFB" },
          100: { value: "#F3F4F6" },
          200: { value: "#E5E7EB" },
          300: { value: "#D1D5DB" },
          400: { value: "#9CA3AF" },
          500: { value: "#6B7280" },
          600: { value: "#4B5563" },
          700: { value: "#374151" },
          800: { value: "#1F2937" },
          900: { value: "#111827" },
          950: { value: "#000000" },
        },

        // Blue
        blue: {
          50: { value: "#EFF6FF" },
          100: { value: "#DBEAFE" },
          200: { value: "#60A5FA" },
          300: { value: "#3B82F6" },
          400: { value: "#2563EB" },
          500: { value: "#1E40AF" },
        },
      },

      fonts: {
        heading: {
          value: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
        },
        body: {
          value: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
        },
      },

      fontSizes: {
        xs: { value: "0.75rem" },
        sm: { value: "0.875rem" },
        md: { value: "1rem" },
        lg: { value: "1.125rem" },
        xl: { value: "1.25rem" },
        "2xl": { value: "1.5rem" },
        "3xl": { value: "1.875rem" },
        "4xl": { value: "2.25rem" },
        "5xl": { value: "3rem" },
        "6xl": { value: "3.75rem" },
      },

      fontWeights: {
        normal: { value: 400 },
        medium: { value: 500 },
        semibold: { value: 600 },
        bold: { value: 700 },
      },
    },

    breakpoints: {
      sm: "30em",
      md: "48em",
      lg: "62em",
      xl: "80em",
      "2xl": "96em",
    },

    semanticTokens: {
      colors: {
        "bg.primary": { value: "white" },
        "bg.secondary": { value: "{colors.gray.50}" },
        "bg.tertiary": { value: "{colors.tertiary.50}" },
        "text.primary": { value: "{colors.gray.900}" },
        "text.secondary": { value: "{colors.gray.600}" },
        "text.tertiary": { value: "{colors.gray.500}" },
        "border.primary": { value: "{colors.gray.200}" },
        "border.secondary": { value: "{colors.gray.300}" },
        "brand.primary": { value: "{colors.primary.500}" },
        "brand.secondary": { value: "{colors.secondary.500}" },
        "brand.tertiary": { value: "{colors.tertiary.500}" },
      },
    },
  },

  globalCss: {
    ":root": {
      "--header-height": "80px",
      "--footer-height": "auto",
      "--content-max-width": "1400px",
    },
    "*": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
    },
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      bg: "white",
      color: "gray.900",
      lineHeight: "1.6",
      fontFamily: "body",
    },
    ".chakra-container": {
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);

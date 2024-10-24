import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "576px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "neutral-80": "#181c32",
        "neutral-40": "#444f8e",
        "neutral-5": "#d6d9eb",
        "neutral-2": "#eceef6",
        "neutral-1": "#f8f8fb",
        "gray-5": "#eaedf2",
        "blue-50": "#0961ed",
        "blue-60": "#074dbc",
        "purple-50": "#6f32bb",
        "purple-5": "#dac9f0",
        "purple-2": "#f4effb",
        "neutral-20": "#9099ca",
      },
      backgroundImage: {
        "gradient-purple-lining":
          "linear-gradient(90deg,#6f32bb,#7230ff 33.33%,#b377fe 55.5%,#7331fe 76%,#6f32bd)",
        "gradients-purple-blue":
          "linear-gradient(31deg,#8043cc 14.58%,#94bcfb 49.75%,#8043cc 81.57%)",
      },
      minHeight: {
        "login-form-md": "42.5rem",
      },
      maxHeight: {
        maxHeightAvoidNavBar: "calc(100vh - 3.75rem - 24px - 24px)",
      },
      maxWidth: {
        app: "1366px",
        "content-article": "48rem",
        "content-setting": "944px",
        group: "1440px",
        "layout-admin-panel-content": "1040px",
        "layout-admin-panel-expansion": "320px",
        "layout-community-row-pane": "416px",
        "layout-group-pane": "1128px",
        "layout-group-row-content-discover": "976px",
        "layout-main-pane": "672px",
        "layout-side-pane": "320px",
        "layout-wide-pane": "1040px",
        "login-form": "27.25rem",
        "max-layout-side-pane": "320px",
        "sidebar-admin": "20rem",
      },
      minWidth: {
        "layout-side-pane": "288px",
      },
      width: {
        "content-article": "48rem",
      },
      height: {
        navbar: "3.75rem",
        "main-layout": "calc(100vh - 3.75rem)",
      },
      textDecorationColor: {
        "neutral-60": "#2e3660",
      },
    },
  },

  plugins: [],
};
export default config;

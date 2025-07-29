module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        basewhite: "var(--basewhite)",
        black: "var(--black)",
        "gray-100": "var(--gray-100)",
        "gray-200": "var(--gray-200)",
        "gray-300": "var(--gray-300)",
        "gray-400": "var(--gray-400)",
        "gray-500": "var(--gray-500)",
        "gray-600": "var(--gray-600)",
        "gray-700": "var(--gray-700)",
        "gray-800": "var(--gray-800)",
        "gray-900": "var(--gray-900)",
        previewthemeforestnetalto: "var(--previewthemeforestnetalto)",
        previewthemeforestnetcharade: "var(--previewthemeforestnetcharade)",
        previewthemeforestnetgoldenrod: "var(--previewthemeforestnetgoldenrod)",
        previewthemeforestnetgray: "var(--previewthemeforestnetgray)",
        previewthemeforestnetmercury: "var(--previewthemeforestnetmercury)",
        previewthemeforestnetscorpion: "var(--previewthemeforestnetscorpion)",
        previewthemeforestnetshark: "var(--previewthemeforestnetshark)",
        "previewthemeforestnettree-poppy":
          "var(--previewthemeforestnettree-poppy)",
        "previewthemeforestnettulip-tree":
          "var(--previewthemeforestnettulip-tree)",
        previewthemeforestnetwhite: "var(--previewthemeforestnetwhite)",
        "previewthemeforestnetwhite-15": "var(--previewthemeforestnetwhite-15)",
        "previewthemeforestnetyellow-orange":
          "var(--previewthemeforestnetyellow-orange)",
        "primary-700": "var(--primary-700)",
        "success-200": "var(--success-200)",
        "success-50": "var(--success-50)",
        "success-700": "var(--success-700)",
        white: "var(--white)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "display-sm-semibold": "var(--display-sm-semibold-font-family)",
        "display-xl-semibold": "var(--display-xl-semibold-font-family)",
        "preview-themeforest-net-semantic-button-title":
          "var(--preview-themeforest-net-semantic-button-title-font-family)",
        "preview-themeforest-net-semantic-heading-1-title":
          "var(--preview-themeforest-net-semantic-heading-1-title-font-family)",
        "preview-themeforest-net-semantic-heading-2-title":
          "var(--preview-themeforest-net-semantic-heading-2-title-font-family)",
        "preview-themeforest-net-semantic-heading-4-title":
          "var(--preview-themeforest-net-semantic-heading-4-title-font-family)",
        "preview-themeforest-net-semantic-heading-6-title":
          "var(--preview-themeforest-net-semantic-heading-6-title-font-family)",
        "preview-themeforest-net-semantic-item":
          "var(--preview-themeforest-net-semantic-item-font-family)",
        "preview-themeforest-net-semantic-link":
          "var(--preview-themeforest-net-semantic-link-font-family)",
        "preview-themeforest-net-semantic-link-title":
          "var(--preview-themeforest-net-semantic-link-title-font-family)",
        "preview-themeforest-net-urbanist-bold":
          "var(--preview-themeforest-net-urbanist-bold-font-family)",
        "preview-themeforest-net-urbanist-bold-upper":
          "var(--preview-themeforest-net-urbanist-bold-upper-font-family)",
        "preview-themeforest-net-urbanist-light":
          "var(--preview-themeforest-net-urbanist-light-font-family)",
        "preview-themeforest-net-urbanist-medium":
          "var(--preview-themeforest-net-urbanist-medium-font-family)",
        "preview-themeforest-net-urbanist-regular":
          "var(--preview-themeforest-net-urbanist-regular-font-family)",
        "text-lg-semibold": "var(--text-lg-semibold-font-family)",
        "text-md-medium": "var(--text-md-medium-font-family)",
        "text-md-regular": "var(--text-md-regular-font-family)",
        "text-md-semibold": "var(--text-md-semibold-font-family)",
        "text-sm-medium": "var(--text-sm-medium-font-family)",
        "text-sm-regular": "var(--text-sm-regular-font-family)",
        "text-sm-semibold": "var(--text-sm-semibold-font-family)",
        "text-xl-regular": "var(--text-xl-regular-font-family)",
        "text-xl-semibold": "var(--text-xl-semibold-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "background-blur-lg": "var(--background-blur-lg)",
        "background-blur-sm": "var(--background-blur-sm)",
        "shadow-lg": "var(--shadow-lg)",
        "shadow-xs": "var(--shadow-xs)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};

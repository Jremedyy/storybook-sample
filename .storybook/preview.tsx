import React from "react";
import type { Preview } from "@storybook/react";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/components/GlobalStyles";

const customViewports = {
  tablet: {
    name: "Tablet",
    styles: {
      width: "787px",
      height: "100vh",
    },
  },
  desktop: {
    name: "Desktop",
    styles: {
      width: "1024px",
      height: "100vh",
    },
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...customViewports,
      },
    },
  },
};

export default preview;

const GlobalStyles = () => <Global styles={globalStyles} />

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles, // Adds your GlobalStyle component to all stories
  }),
];

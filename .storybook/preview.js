const customViewports = {
  small: {
    name: 'Small',
    styles: {
      width: '576px',
      height: '600px',
    }
  },
  medium: {
    name: 'Medium',
    styles: {
      width: '768px',
      height: '1200px',
    }
  },
  large: {
    name: 'Large',
    styles: {
      width: '992px',
      height: '1400px',
    }
  },
  xlarge: {
    name: 'XLarge',
    styles: {
      width: '1200px',
      height: '1400px',
    }
  }
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: { viewports: customViewports},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
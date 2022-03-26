module.exports = {
  stories: [{ directory: "../src", files: "**/*.stories.*" }],
  features: { previewCsfV3: true },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
};

const { getDefaultConfig } = require("expo/metro-config");
const { withNativewind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = withNativewind(config, {
  inlineVariables: {
    exclude: [
      "--color-background",
      "--color-card",
      "--color-foreground",
      "--color-muted",
      "--color-border",
      "--color-primary",
    ],
  },
});

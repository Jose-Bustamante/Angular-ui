const path = require('path');

module.exports = {
  "stories": [
    "../projects/staples-ui/src/lib/**/stories/*.stories.@(js|ts|mdx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/preset-scss'
  ],
}
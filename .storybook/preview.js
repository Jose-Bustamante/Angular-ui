
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

// Build and load the Theme SCSS into StoryBook
import '!style-loader!css-loader!sass-loader!../projects/staples-ui/src/theme.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
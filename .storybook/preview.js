
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

// import '../projects/staples-ui/src/staples-ui.theme.scss';

// Build and load the Theme SCSS into StoryBook
import '!style-loader!css-loader!sass-loader!../projects/staples-ui/src/staples-ui.theme.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
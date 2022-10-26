import theme from "../src/style/customTheme.ts";
import { Box } from "@chakra-ui/react";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    chakra: {
        theme,
    },
    // TODO: Sort stories once we have more stories
    // https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy
};
export const decorators = [
    (Story) => (
        <Box p="8px">
            <Story />
        </Box>
    ),
];

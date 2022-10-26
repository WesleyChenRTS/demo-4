import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, ButtonGroup, HStack } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Foundation/Button",
    component: Button,
    // Usage: https://chakra-ui.com/docs/components/button/usage
    argTypes: {
        variant: {
            control: {
                type: "radio",
                options: ["solid", "outline", "ghost", "link", "unstyled"],
            },
        },
        textDecoration: {
            control: {
                type: "radio",
                options: ["none", "underline", "line-through", "overline"],
            },
        },
        colorScheme: {
            control: {
                type: "select",
                options: [
                    "whiteAlpha",
                    "blackAlpha",
                    "gray",
                    "red",
                    "orange",
                    "yellow",
                    "green",
                    "teal",
                    "blue",
                    "cyan",
                    "purple",
                    "pink",
                    "linkedin",
                    "facebook",
                    "messenger",
                    "whatsapp",
                    "twitter",
                    "telegram",
                ],
            },
        },
        onClick: {
            control: "function",
            description: "onClick handler",
        },
        onMouseEnter: {
            control: "function",
            description: "onMouseEnter handler",
        },
        onMouseLeave: {
            control: "function",
            description: "onMouseLeave handler",
        },
        isLoading: {
            control: {
                type: "boolean",
            },
        },
        loadingText: {
            control: {
                type: "text",
            },
        },
        spinnerPlacement: {
            control: {
                type: "select",
                options: ["start", "end"],
            },
        },
    },
    parameters: {
        actions: {
            handles: ["click", "mouseenter", "mouseleave"],
        },
    },
} as ComponentMeta<typeof Button>;

const Sizes = ["lg", "md", "sm", "xs"];
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => {
    return (
        <ButtonGroup spacing="6">
            {Sizes.map((size) => (
                <Button size={size} {...args} />
            ))}
        </ButtonGroup>
    );
};

export const Solid = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Solid.args = {
    colorScheme: "teal",
    variant: "solid",
    children: "Button",
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
    colorScheme: "teal",
    variant: "solid",
    children: "Email",
    leftIcon: <EmailIcon />,
};

export const withRightIcon = Template.bind({});
withRightIcon.args = {
    colorScheme: "teal",
    variant: "solid",
    children: "Email",
    rightIcon: <EmailIcon />,
};

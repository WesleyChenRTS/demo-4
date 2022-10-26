import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/CButton",
    component: Button,
    // Usage: https://chakra-ui.com/docs/components/button/usage
    argTypes: {
        size: {
            control: { type: "select", options: ["xs", "sm", "md", "lg"] },
        },
        variant: {
            control: {
                type: "select",
                options: ["solid", "outline", "ghost", "link", "unstyled"],
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
    },
} as ComponentMeta<typeof Button>;

const Sizes = ["lg", "md", "sm", "xs"];
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => {
    return (
        <div>
            {Sizes.map((size) => (
                <Button size={size} {...args} />
            ))}
        </div>
    );
};

export const Solid = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Solid.args = {
    colorScheme: "teal",
    variant: "solid",
    children: "Button",
};

export const Custom_WithShadow = Template.bind({});
Custom_WithShadow.args = {
    colorScheme: "teal",
    variant: "with-shadow",
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

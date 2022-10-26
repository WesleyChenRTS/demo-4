import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
    components: {
        Button: {
            // 1. We can update the base styles
            baseStyle: {
                fontWeight: "bold", // Normally, it is "semibold"
            },
            "with-shadow": {
                bg: "red.400",
                boxShadow: "0 0 2px 2px #efdfde",
            },
            variants: {
                "with-shadow": {
                    bg: "red.400",
                    boxShadow: "0 0 2px 2px #efdfde",
                },
                // 4. We can override existing variants
                solid: (props: StyleFunctionProps) => ({
                    bg: props.colorMode === "dark" ? "red.300" : "red.500",
                }),
                // 5. We can add responsive variants
                sm: {
                    bg: "teal.500",
                    fontSize: "md",
                },
            },
            // 6. We can overwrite defaultProps
            defaultProps: {
                size: "lg", // default is md
                variant: "sm", // default is solid
                colorScheme: "green", // default is gray
            },
        },
    },
});

export default theme;

module.exports = {
    mode: "jit",
    content: ["./*.html"],
    theme: {
        fontFamily: {
            "display": ["Montserrat", "ui-sans-serif", "system-ui"],
            "body": ["Inter", "ui-sans-serif", "system-ui"]
        },
        extend: {
            container: {
                center: true,
            },
            fontSize: {
                "brand": "1.375rem",
                "h1": ["2.75rem", {
                    letterSpacing: "-0.016em",
                    lineHeight: "3.75rem"
                }],
                "h1-responsive": ["2.25rem", {
                    letterSpacing: "-0.016em",
                    lineHeight: "3.25rem"
                }],
                "h2": ["2.125rem", {
                    letterSpacing: "-0.016em",
                }],
                "h2-responsive": ["1.875rem", {
                    letterSpacing: "-0.016em",
                }],
            },
            letterSpacing: {
                "tight": "-0.008em"
            },
            lineHeight: {
                "relaxed": "1.8"
            },
            colors: {
                "main-black": {
                    "50": "#D6E6FA",
                    "100": "#AECEF4",
                    "200": "#619FEA",
                    "300": "#1C6FD4",
                    "400": "#114483",
                    "500": "#071C35",
                    "600": "#051529",
                    "700": "#041020",
                    "800": "#030C17",
                    "900": "#010509"
                },
                "primary": {
                    "50": "#FCD9DA",
                    "100": "#F9B3B4",
                    "200": "#F46C6F",
                    "300": "#EE2124",
                    "400": "#AF0E10",
                    "500": "#660809",
                    "600": "#500608",
                    "700": "#3D0506",
                    "800": "#2B0304",
                    "900": "#130102"
                },
                "secondary": "#F48C07",
                "main-gray": "#737373"
            }
        },
    },
    plugins: [],
}
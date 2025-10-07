/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-tailwindcss",
    "stylelint-config-html",
  ],
  customSyntax: "postcss-scss",
  overrides: [
    {
      files: ["*.html", "**/*.html"],
      customSyntax: "postcss-html",
    },
    {
      files: ["*.css", "**/*.css"],
      customSyntax: "postcss-scss",
    },
  ],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
    "no-descending-specificity": null,
  },
};

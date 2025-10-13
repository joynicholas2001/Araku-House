/** @type {import('stylelint').Config} */
export default {
  extends: [
    "stylelint-config-tailwindcss",
    "stylelint-config-html",
  ],
  overrides: [
    {
      files: ["*.css", "**/*.css"],
      customSyntax: "postcss",
    },
    {
      files: ["*.html", "**/*.html"],
      customSyntax: "postcss-html",
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

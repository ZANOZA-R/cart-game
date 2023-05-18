module.exports = {
    extends: [
        "stylelint-config-standard",
        "stylelint-config-prettier",
        "stylelint-prettier/recommended",
    ],
    customSyntax: "postcss-scss",
    plugins: ["stylelint-scss"],
};
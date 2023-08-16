module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-clean-order"],
  plugins: ["stylelint-order", "stylelint-scss"],
  rules: {
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "no-empty-source": null,
    "declaration-empty-line-before": null,
    "no-missing-end-of-source-newline": null,
    "selector-class-pattern": null,
    "selector-id-pattern": null,
    "declaration-property-value-no-unknown": true,
    // исправить на предупреждение
    "block-no-empty": null,
  },
};

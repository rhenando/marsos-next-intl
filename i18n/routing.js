// i18n/routing.js
const { defineRouting } = require("next-intl/routing");

module.exports = defineRouting({
  locales: ["en", "ar"],
  defaultLocale: "en",
});

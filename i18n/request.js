// i18n/request.js
const { getRequestConfig } = require("next-intl/server");
const routing = require("./routing");
const { hasLocale } = require("next-intl");

module.exports = getRequestConfig(async ({ requestLocale }) => {
  const locale = hasLocale(routing.locales, await requestLocale)
    ? await requestLocale
    : routing.defaultLocale;

  return {
    locale,
    messages: require(`../messages/${locale}.json`),
  };
});

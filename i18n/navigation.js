// i18n/navigation.js
const { createNavigation } = require("next-intl/navigation");
const routing = require("./routing");

module.exports = createNavigation(routing);

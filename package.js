Package.describe({
  name: "gwendall:meteoric-styles-extra",
  summary: "Refined styles for Meteoric",
  version: "0.1.0",
  git: "https://github.com/gwendall/meteoric-styles-extra.git"
});

Package.onUse(function(api) {

  api.versionsFrom("1.0");

  api.use([
    "less"
  ], "client");

  api.addFiles([
    "_variables.less",
    "platform.less",
    "popover.less",
    "popup.less",
  ], "client");

});

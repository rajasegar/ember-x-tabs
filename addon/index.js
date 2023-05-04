/* eslint-env node */
"use strict";

module.exports = {
  name: require("./package.json").name,

  included(app, parentAddon) {
    var target = parentAddon || app;

    // necessary for nested usage
    // parent addon should call `this._super.included.apply(this, arguments);`
    if (target.app) {
      target = target.app;
    }

    this.app = target;

    // Use configuration  to decide which theme css files
    // to import, thus not populating the user's app
    this.importThemes(target);
    this._super.included.apply(this, arguments);
  },

  importThemes(app) {
    var projectConfig = this.project.config(app.env);
    var config = projectConfig["ember-x-tabs"] || {};
    var themes = [];
    var excludedBaseStyles = false;

    if (config) {
      var allThemes = [
        "bar",
        "circle",
        "circlefill",
        "fillup",
        "flip",
        "iconbox",
        "iconfall",
        "line",
        "linebox",
        "linemove",
        "linetriangle",
        "shape",
        "topline",
        "tzoid",
        "underline",
      ];
      var included = config.includedThemes;
      var excluded = config.excludedThemes;

      excludedBaseStyles = config.excludeBaseStyles || false;

      if (included && Array.isArray(included)) {
        themes = themes.concat(included);
      } else {
        themes = allThemes;
      }

      if (excluded && Array.isArray(excluded)) {
        themes = themes.filter(function (theme) {
          return excluded.indexOf(theme) === -1;
        });
      }

      themes = themes.filter(function (theme) {
        return theme && allThemes.indexOf(theme) !== -1;
      });
    }

    if (!excludedBaseStyles) {
      app.import("vendor/ember-x-tabs/base.css");
    }

    themes = themes.length ? themes : ["bar"];

    themes.forEach(function (theme) {
      app.import("vendor/ember-x-tabs/themes/" + theme + ".css");
    });
  },
};

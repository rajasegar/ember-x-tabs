import { getOwnConfig } from "@ember/macros";

export default class {
    configure(requests) {
        // console.log("requests", requests);
        const config = getOwnConfig();
        // console.log("ownConfig", config);
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
            import("vendor/ember-x-tabs/base.css");
        }

        themes = themes.length ? themes : ["bar"];

        themes.forEach(function (theme) {
            import("vendor/ember-x-tabs/themes/" + theme + ".css");
        });
    }
}

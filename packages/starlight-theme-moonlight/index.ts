import type { StarlightPlugin } from "@astrojs/starlight/types";

import { overrideComponents } from "./libs/starlight";

export default function starlightThememoonlightPlugin(): StarlightPlugin {
  return {
    name: "starlight-theme-moonlight",
    hooks: {
      "config:setup"({ config, logger, updateConfig }) {
        const userExpressiveCodeConfig =
          !config.expressiveCode || config.expressiveCode === true
            ? {}
            : config.expressiveCode;

        updateConfig({
          components: overrideComponents(
            config,
            ["LanguageSelect", "Pagination", "ThemeSelect"],
            logger
          ),
          customCss: [
            ...(config.customCss ?? []),
            "starlight-theme-moonlight/styles/layers",
            "starlight-theme-moonlight/styles/theme",
            "starlight-theme-moonlight/styles/base",
            ...(config.markdown?.headingLinks === false
              ? []
              : ["starlight-theme-moonlight/styles/anchors"])
          ],
          expressiveCode:
            config.expressiveCode === false
              ? false
              : {
                  themes: ["vitesse-dark", "vitesse-light"],
                  ...userExpressiveCodeConfig,
                  styleOverrides: {
                    borderColor: "var(--sl-moonlight-ui-border-color)",
                    borderRadius: "0.5rem",
                    ...userExpressiveCodeConfig.styleOverrides,
                    frames: {
                      editorActiveTabIndicatorTopColor: "unset",
                      editorActiveTabIndicatorBottomColor:
                        "var(--sl-color-gray-3)",
                      editorTabBarBorderBottomColor:
                        "var(--sl-moonlight-ui-border-color)",
                      frameBoxShadowCssValue: "unset",
                      ...userExpressiveCodeConfig.styleOverrides?.frames
                    },
                    textMarkers: {
                      backgroundOpacity: "40%",
                      markBackground: "var(--sl-moonlight-ec-marker-bg-color)",
                      markBorderColor:
                        "var(--sl-moonlight-ec-marker-border-color)",
                      ...userExpressiveCodeConfig.styleOverrides?.textMarkers
                    }
                  }
                }
        });
      }
    }
  };
}

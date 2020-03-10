using FS.Abp.Themes.Localization;
using Volo.Abp.Localization;
using Volo.Abp.Settings;

namespace FS.Abp.Themes.Settings
{
    public class ThemesSettingDefinitionProvider : SettingDefinitionProvider
    {
        public override void Define(ISettingDefinitionContext context)
        {
            /* Define module settings here.
             * Use names from ThemesSettings class.
             */
            context.Add(
                    new SettingDefinition(
                        ThemesSettings.Website.Title,
                        "ThemesSettings.Website.Title",
                        L("DisplayName:FS.Themes.Website.Title_DsiplayName"),
                        L("Description:FS.Themes.Website.Title_Description"),
                        isVisibleToClients: true),

                    new SettingDefinition(ThemesSettings.Website.Description,
                        "ThemesSettings.Website.Description",
                        L("DisplayName:FS.Themes.Website.Description_DsiplayName"),
                        L("Description:FS.Themes.Website.Description_Description"),
                        isVisibleToClients: true),

                    new SettingDefinition(ThemesSettings.LoginPage.Title,
                        "ThemesSettings.LoginPage.Title",
                        L("DisplayName:FS.Themes.LoginPage.Title_DsiplayName"),
                        L("Description:FS.Themes.LoginPage.Title_Description")
                        , isVisibleToClients: true),
                    new SettingDefinition(ThemesSettings.LoginPage.Description,
                        "ThemesSettings.Website.Description",
                        L("DisplayName:FS.Themes.LoginPage.Description_DsiplayName"),
                        L("Description:FS.Themes.LoginPage.Description_Description"),
                        isVisibleToClients: true
                        ),

                    new SettingDefinition(ThemesSettings.LoginPage.Footer,
                        "ThemesSettings.Website.Footer",
                        L("DisplayName:FS.Themes.LoginPage.Footer_DsiplayName"),
                        L("Description:FS.Themes.LoginPage.Footer_Description"),
                        isVisibleToClients: true)
            );


        }
        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<ThemesResource>(name);
        }
    }
}
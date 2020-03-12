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
        }
        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<ThemesResource>(name);
        }
    }
}
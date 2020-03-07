using FS.Abp.Themes.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace FS.Abp.Themes
{
    public abstract class ThemesController : AbpController
    {
        protected ThemesController()
        {
            LocalizationResource = typeof(ThemesResource);
        }
    }
}

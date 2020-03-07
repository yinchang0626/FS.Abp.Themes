using FS.Abp.Themes.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Abp.Themes.Pages
{
    public abstract class ThemesPageModel : AbpPageModel
    {
        protected ThemesPageModel()
        {
            LocalizationResourceType = typeof(ThemesResource);
        }
    }
}
using FS.Abp.Themes.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Abp.Themes.Web.Pages
{
    /* Inherit your PageModel classes from this class.
     */
    public abstract class ThemesPageModel : AbpPageModel
    {
        protected ThemesPageModel()
        {
            LocalizationResourceType = typeof(ThemesResource);
            ObjectMapperContext = typeof(ThemesWebModule);
        }
    }
}
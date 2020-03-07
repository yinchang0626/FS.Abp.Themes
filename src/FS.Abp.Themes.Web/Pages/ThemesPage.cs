using Microsoft.AspNetCore.Mvc.Localization;
using Microsoft.AspNetCore.Mvc.Razor.Internal;
using FS.Abp.Themes.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Abp.Themes.Web.Pages
{
    /* Inherit your UI Pages from this class. To do that, add this line to your Pages (.cshtml files under the Page folder):
     * @inherits FS.Abp.Themes.Web.Pages.ThemesPage
     */
    public abstract class ThemesPage : AbpPage
    {
        [RazorInject]
        public IHtmlLocalizer<ThemesResource> L { get; set; }
    }
}

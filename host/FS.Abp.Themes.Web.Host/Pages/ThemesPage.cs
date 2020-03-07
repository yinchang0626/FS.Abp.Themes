using Microsoft.AspNetCore.Mvc.Localization;
using Microsoft.AspNetCore.Mvc.Razor.Internal;
using FS.Abp.Themes.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace FS.Abp.Themes.Pages
{
    public abstract class ThemesPage : AbpPage
    {
        [RazorInject]
        public IHtmlLocalizer<ThemesResource> L { get; set; }
    }
}

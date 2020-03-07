using Volo.Abp.AspNetCore.Mvc.UI.Theme.Shared.Components;
using Volo.Abp.DependencyInjection;

namespace FS.Abp.Themes
{
    [Dependency(ReplaceServices = true)]
    public class ThemesBrandingProvider : DefaultBrandingProvider
    {
        public override string AppName => "Themes";
    }
}

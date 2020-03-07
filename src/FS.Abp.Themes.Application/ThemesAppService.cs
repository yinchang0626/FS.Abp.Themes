using FS.Abp.Themes.Localization;
using Volo.Abp.Application.Services;

namespace FS.Abp.Themes
{
    public abstract class ThemesAppService : ApplicationService
    {
        protected ThemesAppService()
        {
            LocalizationResource = typeof(ThemesResource);
            ObjectMapperContext = typeof(ThemesApplicationModule);
        }
    }
}

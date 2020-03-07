using Localization.Resources.AbpUi;
using FS.Abp.Themes.Localization;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Microsoft.Extensions.DependencyInjection;

namespace FS.Abp.Themes
{
    [DependsOn(
        typeof(ThemesApplicationContractsModule),
        typeof(AbpAspNetCoreMvcModule))]
    public class ThemesHttpApiModule : AbpModule
    {
        public override void PreConfigureServices(ServiceConfigurationContext context)
        {
            PreConfigure<IMvcBuilder>(mvcBuilder =>
            {
                mvcBuilder.AddApplicationPartIfNotExists(typeof(ThemesHttpApiModule).Assembly);
            });
        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Get<ThemesResource>()
                    .AddBaseTypes(typeof(AbpUiResource));
            });
        }
    }
}

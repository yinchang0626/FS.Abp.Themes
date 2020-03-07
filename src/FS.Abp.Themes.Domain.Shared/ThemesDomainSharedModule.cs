using Volo.Abp.Modularity;
using Volo.Abp.Localization;
using FS.Abp.Themes.Localization;
using Volo.Abp.Localization.ExceptionHandling;
using Volo.Abp.Validation;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace FS.Abp.Themes
{
    [DependsOn(
        typeof(AbpValidationModule)
    )]
    public class ThemesDomainSharedModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<ThemesDomainSharedModule>("FS.Abp.Themes");
            });

            Configure<AbpLocalizationOptions>(options =>
            {
                options.Resources
                    .Add<ThemesResource>("en")
                    .AddBaseTypes(typeof(AbpValidationResource))
                    .AddVirtualJson("/Localization/Themes");
            });

            Configure<AbpExceptionLocalizationOptions>(options =>
            {
                options.MapCodeNamespace("Themes", typeof(ThemesResource));
            });
        }
    }
}

using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.AutoMapper;
using Volo.Abp.Modularity;
using Volo.Abp.Application;

namespace FS.Abp.Themes
{
    [DependsOn(
        typeof(ThemesDomainModule),
        typeof(ThemesApplicationContractsModule),
        typeof(AbpDddApplicationModule),
        typeof(AbpAutoMapperModule)
        )]
    public class ThemesApplicationModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAutoMapperObjectMapper<ThemesApplicationModule>();
            Configure<AbpAutoMapperOptions>(options =>
            {
                options.AddMaps<ThemesApplicationModule>(validate: true);
            });
        }
    }
}

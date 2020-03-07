using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;
using Volo.Abp.Authorization;

namespace FS.Abp.Themes
{
    [DependsOn(
        typeof(ThemesDomainSharedModule),
        typeof(AbpDddApplicationContractsModule),
        typeof(AbpAuthorizationModule)
        )]
    public class ThemesApplicationContractsModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpVirtualFileSystemOptions>(options =>
            {
                options.FileSets.AddEmbedded<ThemesApplicationContractsModule>("FS.Abp.Themes");
            });
        }
    }
}

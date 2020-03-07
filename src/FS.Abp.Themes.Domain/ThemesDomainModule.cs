using Volo.Abp.Modularity;

namespace FS.Abp.Themes
{
    [DependsOn(
        typeof(ThemesDomainSharedModule)
        )]
    public class ThemesDomainModule : AbpModule
    {

    }
}

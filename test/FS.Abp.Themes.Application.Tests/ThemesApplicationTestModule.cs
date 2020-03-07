using Volo.Abp.Modularity;

namespace FS.Abp.Themes
{
    [DependsOn(
        typeof(ThemesApplicationModule),
        typeof(ThemesDomainTestModule)
        )]
    public class ThemesApplicationTestModule : AbpModule
    {

    }
}

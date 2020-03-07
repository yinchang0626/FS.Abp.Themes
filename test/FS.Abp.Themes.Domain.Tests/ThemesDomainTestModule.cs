using FS.Abp.Themes.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Abp.Themes
{
    /* Domain tests are configured to use the EF Core provider.
     * You can switch to MongoDB, however your domain tests should be
     * database independent anyway.
     */
    [DependsOn(
        typeof(ThemesEntityFrameworkCoreTestModule)
        )]
    public class ThemesDomainTestModule : AbpModule
    {
        
    }
}

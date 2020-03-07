using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace FS.Abp.Themes
{
    [DependsOn(
        typeof(ThemesHttpApiClientModule),
        typeof(AbpHttpClientIdentityModelModule)
        )]
    public class ThemesConsoleApiClientModule : AbpModule
    {
        
    }
}

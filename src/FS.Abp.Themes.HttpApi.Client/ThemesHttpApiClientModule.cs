using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;

namespace FS.Abp.Themes
{
    [DependsOn(
        typeof(ThemesApplicationContractsModule),
        typeof(AbpHttpClientModule))]
    public class ThemesHttpApiClientModule : AbpModule
    {
        public const string RemoteServiceName = "Themes";

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddHttpClientProxies(
                typeof(ThemesApplicationContractsModule).Assembly,
                RemoteServiceName
            );
        }
    }
}

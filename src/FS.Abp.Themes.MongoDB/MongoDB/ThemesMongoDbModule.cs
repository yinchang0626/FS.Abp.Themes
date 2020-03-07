using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Modularity;
using Volo.Abp.MongoDB;

namespace FS.Abp.Themes.MongoDB
{
    [DependsOn(
        typeof(ThemesDomainModule),
        typeof(AbpMongoDbModule)
        )]
    public class ThemesMongoDbModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddMongoDbContext<ThemesMongoDbContext>(options =>
            {
                /* Add custom repositories here. Example:
                 * options.AddRepository<Question, MongoQuestionRepository>();
                 */
            });
        }
    }
}

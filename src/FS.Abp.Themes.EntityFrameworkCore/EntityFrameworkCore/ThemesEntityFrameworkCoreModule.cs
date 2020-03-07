using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace FS.Abp.Themes.EntityFrameworkCore
{
    [DependsOn(
        typeof(ThemesDomainModule),
        typeof(AbpEntityFrameworkCoreModule)
    )]
    public class ThemesEntityFrameworkCoreModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddAbpDbContext<ThemesDbContext>(options =>
            {
                /* Add custom repositories here. Example:
                 * options.AddRepository<Question, EfCoreQuestionRepository>();
                 */
            });
        }
    }
}
using System;
using Mongo2Go;
using Volo.Abp;
using Volo.Abp.Data;
using Volo.Abp.Modularity;

namespace FS.Abp.Themes.MongoDB
{
    [DependsOn(
        typeof(ThemesTestBaseModule),
        typeof(ThemesMongoDbModule)
        )]
    public class ThemesMongoDbTestModule : AbpModule
    {
        private static readonly MongoDbRunner MongoDbRunner = MongoDbRunner.Start();

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            var connectionString = MongoDbRunner.ConnectionString.EnsureEndsWith('/') +
                                   "Db_" +
                                    Guid.NewGuid().ToString("N");

            Configure<AbpDbConnectionOptions>(options =>
            {
                options.ConnectionStrings.Default = connectionString;
            });
        }
    }
}
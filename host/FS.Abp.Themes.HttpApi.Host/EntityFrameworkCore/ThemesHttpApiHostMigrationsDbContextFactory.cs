using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace FS.Abp.Themes.EntityFrameworkCore
{
    public class ThemesHttpApiHostMigrationsDbContextFactory : IDesignTimeDbContextFactory<ThemesHttpApiHostMigrationsDbContext>
    {
        public ThemesHttpApiHostMigrationsDbContext CreateDbContext(string[] args)
        {
            var configuration = BuildConfiguration();

            var builder = new DbContextOptionsBuilder<ThemesHttpApiHostMigrationsDbContext>()
                .UseSqlServer(configuration.GetConnectionString("Themes"));

            return new ThemesHttpApiHostMigrationsDbContext(builder.Options);
        }

        private static IConfigurationRoot BuildConfiguration()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: false);

            return builder.Build();
        }
    }
}

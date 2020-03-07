using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Abp.Themes.EntityFrameworkCore
{
    public class ThemesHttpApiHostMigrationsDbContext : AbpDbContext<ThemesHttpApiHostMigrationsDbContext>
    {
        public ThemesHttpApiHostMigrationsDbContext(DbContextOptions<ThemesHttpApiHostMigrationsDbContext> options)
            : base(options)
        {
        
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ConfigureThemes();
        }
    }
}

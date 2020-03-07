using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Abp.Themes.EntityFrameworkCore
{
    [ConnectionStringName(ThemesDbProperties.ConnectionStringName)]
    public class ThemesDbContext : AbpDbContext<ThemesDbContext>, IThemesDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * public DbSet<Question> Questions { get; set; }
         */

        public ThemesDbContext(DbContextOptions<ThemesDbContext> options) 
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ConfigureThemes();
        }
    }
}
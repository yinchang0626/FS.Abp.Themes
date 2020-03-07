using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;

namespace FS.Abp.Themes.EntityFrameworkCore
{
    [ConnectionStringName(ThemesDbProperties.ConnectionStringName)]
    public interface IThemesDbContext : IEfCoreDbContext
    {
        /* Add DbSet for each Aggregate Root here. Example:
         * DbSet<Question> Questions { get; }
         */
    }
}
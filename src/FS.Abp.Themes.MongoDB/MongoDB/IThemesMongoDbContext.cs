using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Abp.Themes.MongoDB
{
    [ConnectionStringName(ThemesDbProperties.ConnectionStringName)]
    public interface IThemesMongoDbContext : IAbpMongoDbContext
    {
        /* Define mongo collections here. Example:
         * IMongoCollection<Question> Questions { get; }
         */
    }
}

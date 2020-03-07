using Volo.Abp.Data;
using Volo.Abp.MongoDB;

namespace FS.Abp.Themes.MongoDB
{
    [ConnectionStringName(ThemesDbProperties.ConnectionStringName)]
    public class ThemesMongoDbContext : AbpMongoDbContext, IThemesMongoDbContext
    {
        /* Add mongo collections here. Example:
         * public IMongoCollection<Question> Questions => Collection<Question>();
         */

        protected override void CreateModel(IMongoModelBuilder modelBuilder)
        {
            base.CreateModel(modelBuilder);

            modelBuilder.ConfigureThemes();
        }
    }
}
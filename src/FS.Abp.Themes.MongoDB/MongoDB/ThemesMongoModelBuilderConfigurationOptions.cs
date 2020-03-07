using JetBrains.Annotations;
using Volo.Abp.MongoDB;

namespace FS.Abp.Themes.MongoDB
{
    public class ThemesMongoModelBuilderConfigurationOptions : AbpMongoModelBuilderConfigurationOptions
    {
        public ThemesMongoModelBuilderConfigurationOptions(
            [NotNull] string collectionPrefix = "")
            : base(collectionPrefix)
        {
        }
    }
}
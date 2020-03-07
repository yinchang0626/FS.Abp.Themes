using System;
using Volo.Abp;
using Volo.Abp.MongoDB;

namespace FS.Abp.Themes.MongoDB
{
    public static class ThemesMongoDbContextExtensions
    {
        public static void ConfigureThemes(
            this IMongoModelBuilder builder,
            Action<AbpMongoModelBuilderConfigurationOptions> optionsAction = null)
        {
            Check.NotNull(builder, nameof(builder));

            var options = new ThemesMongoModelBuilderConfigurationOptions(
                ThemesDbProperties.DbTablePrefix
            );

            optionsAction?.Invoke(options);
        }
    }
}
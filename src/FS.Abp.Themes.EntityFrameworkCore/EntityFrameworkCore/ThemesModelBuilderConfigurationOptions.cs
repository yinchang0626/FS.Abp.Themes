using JetBrains.Annotations;
using Volo.Abp.EntityFrameworkCore.Modeling;

namespace FS.Abp.Themes.EntityFrameworkCore
{
    public class ThemesModelBuilderConfigurationOptions : AbpModelBuilderConfigurationOptions
    {
        public ThemesModelBuilderConfigurationOptions(
            [NotNull] string tablePrefix = "",
            [CanBeNull] string schema = null)
            : base(
                tablePrefix,
                schema)
        {

        }
    }
}
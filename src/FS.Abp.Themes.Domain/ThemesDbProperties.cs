namespace FS.Abp.Themes
{
    public static class ThemesDbProperties
    {
        public static string DbTablePrefix { get; set; } = "Themes";

        public static string DbSchema { get; set; } = null;

        public const string ConnectionStringName = "Themes";
    }
}

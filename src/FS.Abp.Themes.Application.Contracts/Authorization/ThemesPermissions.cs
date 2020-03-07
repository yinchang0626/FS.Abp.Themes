using Volo.Abp.Reflection;

namespace FS.Abp.Themes.Authorization
{
    public class ThemesPermissions
    {
        public const string GroupName = "Themes";

        public static string[] GetAll()
        {
            return ReflectionHelper.GetPublicConstantsRecursively(typeof(ThemesPermissions));
        }
    }
}
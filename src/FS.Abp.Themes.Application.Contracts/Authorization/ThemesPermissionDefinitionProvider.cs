using FS.Abp.Themes.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace FS.Abp.Themes.Authorization
{
    public class ThemesPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            //var moduleGroup = context.AddGroup(ThemesPermissions.GroupName, L("Permission:Themes"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<ThemesResource>(name);
        }
    }
}
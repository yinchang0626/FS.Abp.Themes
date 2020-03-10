namespace FS.Abp.Themes.Settings
{
    public static class ThemesSettings
    {
        public const string GroupName = "Themes";

        /* Add constants for setting names. Example:
         * public const string MySettingName = GroupName + ".MySettingName";
         */


        /// <summary>
        /// Website releated settings: like html title,description...
        /// </summary>
        public static class Website
        {
            /// <summary>
            /// Themes.WebSite.Title(HtmlTitle)
            /// </summary>
            public const string Title = GroupName + ".Website.Title";
            /// <summary>
            /// Themes.WebSite.Description
            /// </summary>
            public const string Description = GroupName + ".Website.Description";
        }

        /// <summary>
        /// Login Page related settings
        /// </summary>
        public static class LoginPage
        {
            public const string Title = GroupName + ".LoginPage.Title";

            /// <summary>
            /// Themes.LoginPage.Description
            /// </summary>
            public const string Description = GroupName + ".LoginPage.Description";

            /// <summary>
            /// Themes.LoginPage.Footer
            /// </summary>
            public const string Footer = GroupName + ".LoginPage.Footer";
        }
    }
}
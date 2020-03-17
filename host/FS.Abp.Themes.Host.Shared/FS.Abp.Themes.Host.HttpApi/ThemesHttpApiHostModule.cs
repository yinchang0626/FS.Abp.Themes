using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Modularity;

namespace FS.Abp.Themes.Host.HttpApi
{
    [DependsOn(
        typeof(FS.Abp.Themes.ThemesApplicationModule),
        typeof(FS.Abp.Themes.ThemesHttpApiModule),
        typeof(FS.Abp.Themes.EntityFrameworkCore.ThemesEntityFrameworkCoreModule)
        )]
    public class ThemesHttpApiHostModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpAspNetCoreMvcOptions>(options =>
            {
                options.ConventionalControllers.Create(typeof(FS.Abp.Themes.ThemesApplicationModule).Assembly, action => action.RootPath = "Themes");
            });
        }
    }
}

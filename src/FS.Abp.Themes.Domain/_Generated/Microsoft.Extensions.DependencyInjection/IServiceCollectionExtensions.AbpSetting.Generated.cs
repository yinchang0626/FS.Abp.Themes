﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using the template for generating AbpSettings.
// 1.102.0.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Text;

namespace Microsoft.Extensions.DependencyInjection
{
    public static partial class IServiceCollectionExtensions
    {
        public static void AddThemesSettings(this IServiceCollection services)
        {
            services.Replace(ServiceDescriptor.Transient<IOptionsFactory<FS.Abp.Themes.Core.WebsiteOptions>, FS.Abp.Themes.Core.WebsiteOptionsFactory>());
            services.Replace(ServiceDescriptor.Scoped<IOptions<FS.Abp.Themes.Core.WebsiteOptions>, OptionsManager<FS.Abp.Themes.Core.WebsiteOptions>>());
            services.Replace(ServiceDescriptor.Transient<IOptionsFactory<FS.Abp.Themes.Core.LoginPageOptions>, FS.Abp.Themes.Core.LoginPageOptionsFactory>());
            services.Replace(ServiceDescriptor.Scoped<IOptions<FS.Abp.Themes.Core.LoginPageOptions>, OptionsManager<FS.Abp.Themes.Core.LoginPageOptions>>());
        }
    }
}
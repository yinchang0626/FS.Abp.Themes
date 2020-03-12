﻿//------------------------------------------------------------------------------
// This is auto-generated code.
//------------------------------------------------------------------------------
// This code was generated by Entity Developer tool using EF Core template.
// 1.102.0.0
//
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
//------------------------------------------------------------------------------

using System;
using System.Data;
using System.Linq;
using System.Linq.Expressions;
using System.ComponentModel;
using System.Reflection;
using System.Data.Common;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.Data;
using Volo.Abp.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Internal;
using Microsoft.EntityFrameworkCore.Metadata;
namespace FS.Abp.Themes.EntityFrameworkCore
{
    [ConnectionStringName(ThemesDbProperties.ConnectionStringName)]
    public partial class ThemesDbContext : AbpDbContext<ThemesDbContext>, IThemesDbContext
    {
        public ThemesDbContext(DbContextOptions<ThemesDbContext> options) :
            base(options)
        {
            OnCreated();
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ConfigureThemes();

            CustomizeMapping(ref builder);

            base.OnModelCreating(builder);
        }

        partial void CustomizeMapping(ref ModelBuilder modelBuilder);

        partial void OnCreated();
    }
}

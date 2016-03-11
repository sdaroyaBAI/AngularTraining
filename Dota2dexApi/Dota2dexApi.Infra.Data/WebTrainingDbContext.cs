using Dota2dexApi.Domain.Entities;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Dota2dexApi.Infra.Data
{
    public class WebApiTrainingDbContext : IdentityDbContext<IdentityUser>
                    , IWebApiTrainingDbContext
    {
        public WebApiTrainingDbContext()
            : base("DefaultConnection")
        {

        }
        public DbSet<User> Users { get; set; }
    }
}
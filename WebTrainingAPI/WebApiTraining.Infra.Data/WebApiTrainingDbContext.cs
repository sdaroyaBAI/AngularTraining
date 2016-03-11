using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebApiTraining.Domain.Entities;

namespace WebApiTraining.Infra.Data
{
    public class WebApiTrainingDbContext : IdentityDbContext<IdentityUser>
                    , IWebApiTrainingDbContext
    {
        public WebApiTrainingDbContext()
            : base("DefaultConnection")
        {
            
        }

        public DbSet<User> Users { get; set; }
        public DbSet<UserDetail> UserDetails { get; set; }


    }
}
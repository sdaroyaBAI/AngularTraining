namespace WebApiTraining.Infra.Data.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using WebApiTraining.Domain.Entities;

    internal sealed class Configuration : DbMigrationsConfiguration<WebApiTraining.Infra.Data.WebApiTrainingDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(WebApiTraining.Infra.Data.WebApiTrainingDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            context.Users.AddOrUpdate(x => x.Id,
                new User { Name = "herwin", Gender = "M", UserDetail = new UserDetail { Age = 12, Likes = "bag" } },
                new User { Name = "Samuel", Gender = "M", UserDetail = new UserDetail { Age = 22, Likes = "mugs" } },
                new User { Name = "Cindy", Gender = "F", UserDetail = new UserDetail { Age = 42, Likes = "flowers" } },
                new User { Name = "Nate", Gender = "M", UserDetail = new UserDetail { Age = 22, Likes = "Hotels" } });
            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
        }
    }
}

using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using Dota2dexApi.Domain.Entities;



namespace Dota2dexApi.Infra.Data
{
    public interface IWebApiTrainingDbContext
    {
        DbSet<User> Users { get; set; }
        //DbSet<UserDetail> UserDetails { get; set; }
        int SaveChanges();
        DbSet<TEntity> Set<TEntity>() where TEntity : class;
        DbEntityEntry<TEntity> Entry<TEntity>(TEntity entity) where TEntity : class;
    }
}
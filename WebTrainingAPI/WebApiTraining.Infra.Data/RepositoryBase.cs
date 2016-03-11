using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebApiTraining.Domain;

namespace WebApiTraining.Infra.Data
{
    public abstract class RepositoryBase<TEntity> : IRepository<TEntity> where TEntity : class
    {
        protected IWebApiTrainingDbContext Context { get; private set; }
        public RepositoryBase(IWebApiTrainingDbContext context)
        {
            this.Context = context;
        }

        public TEntity Find(int id)
        {
            return this.Context.Set<TEntity>().Find(id);
        }

        public IEnumerable<TEntity> Find()
        {
            return this.Context.Set<TEntity>().ToList();
        }

        public IEnumerable<TEntity> Find(Func<TEntity, bool> filter)
        {
            return this.Context.Set<TEntity>()
                       .Where(filter);
        }

        public TEntity Create(TEntity newEntity)
        {
            this.Context.Set<TEntity>().Add(newEntity);
            this.Context.SaveChanges();
            return newEntity;
        }

        public TEntity Update(int id, TEntity entity)
        {
            this.Context.Entry<TEntity>(entity).State = EntityState.Modified;
            this.Context.SaveChanges();
            return entity;
        }

        public void Delete(int id)
        {
            var entityToDelete = this.Find(id);
            this.Context.Set<TEntity>().Remove(entityToDelete);
            this.Context.SaveChanges();
        }
    }
}
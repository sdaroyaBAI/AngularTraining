using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApiTraining.Domain
{
    public interface IRepository<TEntity>
       where TEntity : class
    {
        TEntity Find(int id);

        IEnumerable<TEntity> Find();
        IEnumerable<TEntity> Find(Func<TEntity, bool> filter);

        TEntity Create(TEntity newEntity);

        TEntity Update(int id, TEntity entity);

        void Delete(int id);

    }
}
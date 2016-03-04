using ServiceStack.Data;
using ServiceStack.OrmLite;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace SampleRestAPI.Data.Base
{

    public class Repository<T, TId> : IRepository<T, TId>
    {
        public IDbConnectionFactory dbFactory { get; set; }

        protected static void EnsureTableExists(IDbConnection dbConnection)
        {
            if (!dbConnection.TableExists(typeof(T).Name))
            {
                dbConnection.CreateTable<T>(true);
            }
        }

        public void Delete(TId id)
        {
            using (var db = dbFactory.OpenDbConnection())
            {
                EnsureTableExists(db);
                db.DeleteById<T>(id);
            }
        }

        public void Delete(T entity)
        {
            using (var db = dbFactory.OpenDbConnection())
            {
                EnsureTableExists(db);
                db.Delete<T>(entity);
            }
        }

        public void DeleteAll()
        {
            using (var db = dbFactory.OpenDbConnection())
            {
                EnsureTableExists(db);
                db.DeleteAll<T>();
            }
        }

        public T Insert(T entity)
        {
            using (var db = dbFactory.OpenDbConnection())
            {
                EnsureTableExists(db);
                var id = db.Insert<T>(entity, true);
                return db.LoadSingleById<T>(id);
            }
        }

        public T Update(T entity)
        {
            using (var db = dbFactory.OpenDbConnection())
            {
                EnsureTableExists(db);
                // If no rows were inserted then return the default of that entity
                return db.Update<T>(entity) == 0 ? default(T) : entity;
            }
        }

        public T FindOne(TId id)
        {
            using (var db = dbFactory.OpenDbConnection())
            {
                EnsureTableExists(db);
                return db.LoadSingleById<T>(id);
            }
        }

        public IEnumerable<T> FindAll()
        {
            using (var db = dbFactory.OpenDbConnection())
            {
                EnsureTableExists(db); 
                return db.Select<T>();
            }
        }

        public long Count(Func<T, bool> where = null)
        {
            using (var db = dbFactory.OpenDbConnection())
            {
                return where == null ? db.Count<T>() : db.Count<T>(where as Expression<Func<T, bool>>);
            }
        }

        public bool Exists(TId id)
        {
            using (var db = dbFactory.OpenDbConnection())
            {
                EnsureTableExists(db);
                return db.SingleById<T>(id) != null;
            }
        }

        public IEnumerable<T> Query(Func<T, bool> where)
        {
            using (var db = dbFactory.OpenDbConnection())
            {
                EnsureTableExists(db); 
                return db.LoadSelect<T>(where as Expression<Func<T,bool>>);  
            }
        }
    }
}

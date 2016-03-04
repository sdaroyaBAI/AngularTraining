using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SampleRestAPI.Data.Base
{
    public interface IRepository<T,TId>
    { 
        void Delete(TId id);
         
        void Delete(T entity); 
        
        void DeleteAll(); 
       
        T Insert(T entity); 
      
        T Update(T entity); 
     
        T FindOne(TId id); 
        
        IEnumerable<T> FindAll(); 
        
        long Count(Func<T, bool> where = null); 
        
        bool Exists(TId id); 
         
        IEnumerable<T> Query(Func<T, bool>where);
    }
}

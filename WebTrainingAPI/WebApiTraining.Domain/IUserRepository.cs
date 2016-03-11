using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApiTraining.Domain.Entities;

namespace WebApiTraining.Domain
{
    public interface IUserRepository : IRepository<User>
    {
    }
}

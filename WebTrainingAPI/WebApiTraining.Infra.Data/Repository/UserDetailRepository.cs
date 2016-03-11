using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApiTraining.Domain;
using WebApiTraining.Domain.Entities;

namespace WebApiTraining.Infra.Data
{
    public class UserDetailRepository : RepositoryBase<UserDetail>, IUserDetailRepository
    {
        public UserDetailRepository(IWebApiTrainingDbContext context)
            : base(context)
        {

        }

    }
}
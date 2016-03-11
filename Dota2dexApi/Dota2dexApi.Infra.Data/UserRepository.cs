using Dota2dexApi.Domain;
using Dota2dexApi.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Dota2dexApi.Infra.Data
{
    public class UserRepository : RepositoryBase<User>, IUserRepository
    {
        public UserRepository(IWebApiTrainingDbContext context)
            : base(context)
        {

        }

    }
}
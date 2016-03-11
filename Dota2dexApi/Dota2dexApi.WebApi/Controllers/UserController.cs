using Dota2dexApi.Domain;
using Dota2dexApi.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Dota2dexApi.WebApi.Controllers
{
    public class UserController : ApiController
    {
        private IUserRepository _userRepo;

        public UserController(IUserRepository userRepo)
        {
            _userRepo = userRepo;
        }
        // GET api/<controller>
        public IEnumerable<User> Get()
        {
            var users = _userRepo.Find();
            return users;
        }

        // GET api/<controller>/5
        public User Get(int id)
        {
            var users = _userRepo.Find(id);
            return users;
        }

        // POST api/<controller>
        [ActionName("register")]
        public IHttpActionResult Post([FromBody]User value)
        {
            _userRepo.Create(value);
            return Ok();
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]User value)
        {
            _userRepo.Update(id, value);
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
            _userRepo.Delete(id);
        }
    }
}

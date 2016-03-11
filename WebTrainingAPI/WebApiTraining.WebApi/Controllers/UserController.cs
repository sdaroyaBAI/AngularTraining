using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiTraining.Domain;
using WebApiTraining.Domain.Entities;

namespace WebApiTraining.WebApi.Controllers
{
    public class UserDetailViewModel
    {
        [Required]
        public int Age { get; set; }
        [Required]
        public string Likes { get; set; }
    }

    public class UserViewModel
    {
        [Required]
        public int Id { get; set; }
        [Required, RegularExpression("[a-zA-Z]+")]
        public string Name { get; set; }
        [Required]
        public string Gender { get; set; }
        [Required]
        public UserDetailViewModel UserDetailViewModel { get; set; }
    }
    public class UserController : ApiController
    {
        private IUserRepository _userRepo;

        public UserController(IUserRepository userRepo)
        {
            _userRepo = userRepo;
        }
        // GET api/<controller>

        //   api/user/1/detail


        public IHttpActionResult Get()
        {
            var users = _userRepo.Find().Select(x => new UserViewModel
            {
                Id = x.Id,
                Name = x.Name,
                UserDetailViewModel = new UserDetailViewModel
                {
                    Likes = x.UserDetail.Likes,
                    Age = x.UserDetail.Age
                }
            });

            return Ok(users);
   
        }




        // GET api/<controller>
        [Authorize]
        public UserViewModel Get(int id)
        {
            var user = _userRepo.Find(id);
            var userViewModel = new UserViewModel
            {
                Id = user.Id,
                Gender = user.Gender,
                Name = user.Name,
                UserDetailViewModel = new UserDetailViewModel
                {
                    Age = user.UserDetail.Age
                }
            };
            return userViewModel;
        }

    }
}
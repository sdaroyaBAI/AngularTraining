using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApiTraining.Domain.Entities
{
    public class UserDetail
    {
        [Required, ForeignKey("User")]
        public int Id { get; set; }
        [Required]
        public int Age { get; set; }
        [Required]
        public string Likes { get; set; }

        public virtual User User { get; set; }
    }
}
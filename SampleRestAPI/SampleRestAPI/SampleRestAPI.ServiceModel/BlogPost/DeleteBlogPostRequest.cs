using ServiceStack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SampleRestAPI.ServiceModel.BlogPost
{
    [Route("/posts/{Id}", "DELETE")]
    public class DeleteBlogPostRequest
    {
        public int Id { get; set; }
    }
}

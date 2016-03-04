using ServiceStack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SampleRestAPI.ServiceModel.BlogPost
{
    [Route("/posts/{Id}", "PUT")]
    public class UpdateBlogPostRequest
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; } 
    }
}

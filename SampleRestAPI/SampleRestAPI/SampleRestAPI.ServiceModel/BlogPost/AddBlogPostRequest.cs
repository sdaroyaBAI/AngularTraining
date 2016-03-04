using ServiceStack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SampleRestAPI.ServiceModel.BlogPost
{ 
    [Route("/posts", "POST")]
    public class AddBlogPostRequest 
    {  
        public string Title { get; set; }
        public string Body { get; set; }  
        public long AuthorId { get; set; }
    }
}

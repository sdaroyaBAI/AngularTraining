using ServiceStack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SampleRestAPI.ServiceModel.BlogPost
{
    [Route("/posts/{Id}","GET")]
    public class SingleBlogPostRequest
    {
        public long Id { get; set; }
    }
}

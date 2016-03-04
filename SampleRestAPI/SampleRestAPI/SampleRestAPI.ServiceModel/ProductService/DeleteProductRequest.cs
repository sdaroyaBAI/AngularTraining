using ServiceStack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SampleRestAPI.ServiceModel.BlogPost
{
    [Route("/products/{Id}", "DELETE")]
    public class DeleteProductRequest
    {
        public int Id { get; set; }
    }
}

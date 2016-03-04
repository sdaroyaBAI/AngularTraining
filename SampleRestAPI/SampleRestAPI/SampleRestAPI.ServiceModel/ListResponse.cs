using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SampleRestAPI.ServiceModel.BlogPost
{
    public class ListResponse <T>
    {
        public List<T> Content { get; set; }
    }
}

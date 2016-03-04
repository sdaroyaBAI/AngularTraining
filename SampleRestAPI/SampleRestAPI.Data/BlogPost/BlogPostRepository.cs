using SampleRestAPI.Data.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SampleRestAPI.Data.BlogPost
{
    public class BlogPostRepository : Repository<BlogPost,long>, IBlogPostRepository
    {
    }
}

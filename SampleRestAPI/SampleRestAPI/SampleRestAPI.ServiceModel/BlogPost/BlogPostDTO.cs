using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SampleRestAPI.ServiceModel.BlogPost
{
    public class BlogPostDto
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime LastUpdated { get; set; }
        public string AuthorName { get; set; }
        public long AuthorId{ get; set; }
    }
}

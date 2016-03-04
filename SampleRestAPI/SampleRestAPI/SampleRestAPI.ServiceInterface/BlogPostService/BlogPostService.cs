using SampleRestAPI.Data.BlogPost;
using SampleRestAPI.ServiceModel.BlogPost;
using ServiceStack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SampleRestAPI.ServiceInterface.BlogPostService
{
    public class BlogPostService : Service
    {
        public IBlogPostRepository _blogPostRepo { get; set; }


        public BlogPostListResponse Get(AllBlogPostRequest request)
        {
            var content = _blogPostRepo.FindAll().ToList().Select(itm =>
                new BlogPostResponse()
                {
                    Id = itm.Id,
                    Title = itm.Title,
                    Body = itm.Body,
                    DateCreated = itm.DateCreated,
                    LastUpdated = itm.LastUpdated,
                    AuthorName = "",
                    AuthorId = itm.AuthorId
                }).ToList();
            var response = new BlogPostListResponse()
            {
                Content = content
            };
            return response;
        }
        public BlogPostResponse Get(SingleBlogPostRequest request)
        {
            var itm = _blogPostRepo.FindOne(request.Id);
            var response =  new BlogPostResponse();
            if (itm != null)
            {
                response = new BlogPostResponse()
                   {
                       Id = itm.Id,
                       Title = itm.Title,
                       Body = itm.Body,
                       DateCreated = itm.DateCreated,
                       LastUpdated = itm.LastUpdated,
                       AuthorName = "",
                       AuthorId = itm.AuthorId
                   };
            }
            else
            {
                throw new HttpError(404, "Not Found");
            }
            return response;
        }

        public BlogPostResponse Post(AddBlogPostRequest request)
        {
            var post = _blogPostRepo.Insert(new BlogPost()
            { 
                Title = request.Title,
                Body = request.Body,
                DateCreated = DateTime.Now,
                LastUpdated =DateTime.Now,
                AuthorId = request.AuthorId
            });
            return new BlogPostResponse()
            {
                Id = post.Id,
                Title = post.Title,
                Body = post.Body,
                DateCreated = post.DateCreated,
                LastUpdated = post.LastUpdated,
                AuthorName = "",
                AuthorId = post.AuthorId
            };
        }

        public void Delete(DeleteBlogPostRequest request)
        {
            var post = _blogPostRepo.FindOne(request.Id);
            if (post == null)
                throw new HttpError(404, "No Found");
            _blogPostRepo.Delete(request.Id);
        }

        public void Put(UpdateBlogPostRequest request)
        {
            var post = _blogPostRepo.FindOne(request.Id);
            if (post == null)
                throw new HttpError(404, "No Found");
            post.Body = request.Body;
            post.Title = request.Title;
            _blogPostRepo.Update(post);
        }
    }
}

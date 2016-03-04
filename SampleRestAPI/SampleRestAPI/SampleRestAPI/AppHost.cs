using Funq;
using ServiceStack;
using SampleRestAPI.ServiceInterface;
using ServiceStack.OrmLite;
using ServiceStack.Data;
using ServiceStack.Caching;
using ServiceStack.OrmLite.SqlServer;
using ServiceStack.Text;
using SampleRestAPI.Data.BlogPost;
using ServiceStack.Auth;
using System;
using System.Collections.Generic;
using System.Configuration;
using SampleRestAPI.ServiceModel.BlogPost;

namespace SampleRestAPI
{
    public class AppHost : AppHostBase
    {
        /// <summary>
        /// Default constructor.
        /// Base constructor requires a name and assembly to locate web service classes. 
        /// </summary>
        public AppHost()
            : base("SampleRestAPI", typeof(MyServices).Assembly)
        {

        }

        /// <summary>
        /// Application specific configuration
        /// This method should initialize any IoC resources utilized by your web service classes.
        /// </summary>
        /// <param name="container"></param>
        public override void Configure(Container container)
        {
            //Config examples
            //this.Plugins.Add(new PostmanFeature());
            //this.Plugins.Add(new CorsFeature());
            SetConfig(new HostConfig()
            {
                //Allow cookies be accessed by the client. Session cookies are not allowed
                AllowNonHttpOnlyCookies = true,
                AllowSessionCookies = true,
                DefaultContentType = MimeTypes.Json
            });

            if (Convert.ToBoolean(ConfigurationManager.AppSettings["CorsEnabled"]))
            {
                Plugins.Add(new CorsFeature(
                    allowedHeaders: "Content-Type, Authorization, X-Requested-With, Accept",
                    allowedMethods: "GET, POST, PUT, DELETE, OPTIONS, PATCH",
                    allowCredentials: true,
                    allowOriginWhitelist: new List<string>() { ConfigurationManager.AppSettings["Authorized_WebAppUrl"] }
                ));
            }

            Plugins.Add(new PostmanFeature());
            Plugins.Add(new SessionFeature()); 
            Plugins.Add(new RegistrationFeature()); 
            Plugins.Add(new RequestLogsFeature());

            //Assume UTC format on our date responses to format it properly
            JsConfig.AssumeUtc = true;
            JsConfig.DateHandler = DateHandler.ISO8601;

            // add dependencies and registrations.
            container.Register<ICacheClient>(new MemoryCacheClient());
            container.Register<IDbConnectionFactory>(
                new OrmLiteConnectionFactory(Properties.Settings.Default.LocalSqlConnectionString, SqlServerOrmLiteDialectProvider.Instance));
            container.Register<IAuthRepository>(new OrmLiteAuthRepository(container.Resolve<IDbConnectionFactory>()) { UseDistinctRoleTables = true });


            #region Setup RepositoriesOrmLiteAuthRepository
            container.RegisterAutoWiredAs<BlogPostRepository, IBlogPostRepository>();
            #endregion


            #region Auth Plugin

             
            Plugins.Add(new AuthFeature(() => new AuthUserSession(),
                new IAuthProvider[] { 
                    new BasicAuthProvider(),
                    new CredentialsAuthProvider()
                    
                }));


            #endregion

            ConfigureRoutes();
            container.Resolve<IAuthRepository>().InitSchema();
        }

        private void ConfigureRoutes()
        {
            //Routes.Add<AddBlogPostRequest>("/posts", ApplyTo.Post);
            //Routes.Add<AllBlogPostRequest>("/posts", ApplyTo.Get);
        }
    }
}
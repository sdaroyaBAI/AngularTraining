using Ninject;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using WebApiTraining.Domain;
using WebApiTraining.Infra.Data;

namespace WebApiTraining.WebApi
{
    public static class NinjectConfig
    {
        public static Lazy<IKernel> CreateKernel = new Lazy<IKernel>(() =>
        {
            var kernel = new StandardKernel();
            kernel.Load(Assembly.GetExecutingAssembly());

            RegisterServices(kernel);

            return kernel;
        });

        private static void RegisterServices(KernelBase kernel)
        {
            kernel.Bind<IWebApiTrainingDbContext>().To<WebApiTrainingDbContext>();
            kernel.Bind<IUserRepository>().To<UserRepository>();

        }
    }
}
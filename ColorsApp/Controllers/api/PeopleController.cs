using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ColorsApp.Dtos;
using AutoMapper;

namespace ColorsApp.Controllers.api
{
    public class PeopleController : ApiController
    {
        private TechTestDbContext _context;

        public PeopleController()
        {
            _context = new TechTestDbContext();
        }

        public IEnumerable<PersonDto> GetPeople()
        {
            return _context.People.ToList().Select(Mapper.Map<Person,PersonDto>);

           
        }

    }
}

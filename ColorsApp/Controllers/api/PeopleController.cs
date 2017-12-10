using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ColorsApp.Dtos;
using AutoMapper;
using System.Data.Entity;

namespace ColorsApp.Controllers.api
{
    public class PeopleController : ApiController
    {
        private TechTestDbContext _context;

        public PeopleController()
        {
            _context = new TechTestDbContext();
        }

        public IHttpActionResult GetPeople()
        {
             var personQuery=_context.People.Include(c => c.Colours);

            var personDtos = personQuery
                .ToList().Select(Mapper.Map<Person, PersonDto>);

            return Ok(personDtos);
        }

        public IHttpActionResult GetPerson(int id)
        {
           var person = _context.People.SingleOrDefault(c=>c.PersonId==id);

            if (person == null)
                return NotFound();

            return Ok(Mapper.Map<Person, PersonDto>(person));
        }

        [HttpPut]
        public IHttpActionResult UpdatePerson (int id, PersonDto personDto)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var personInDb = _context.People.SingleOrDefault(c => c.PersonId == id);

            if (personInDb == null)
                return NotFound();

            Mapper.Map(personDto, personInDb);

            _context.SaveChanges();

            return Ok();

        }

    }
}

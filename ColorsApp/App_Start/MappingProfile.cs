using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;
using ColorsApp.Dtos;

namespace ColorsApp.App_Start
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            Mapper.CreateMap<Person, PersonDto>().
                ForMember(dto => dto.Colours, opt => opt.MapFrom(x => x.Colours));

            Mapper.CreateMap<PersonDto, Person>().
                ForMember(x => x.Colours, opt => opt.Ignore());

            Mapper.CreateMap<Colour, ColourDto>();
            Mapper.CreateMap<ColourDto, Colour>();
        }
    }
}
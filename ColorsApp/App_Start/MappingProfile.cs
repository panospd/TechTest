﻿using System;
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
            Mapper.CreateMap<PersonDto, Person>();

            Mapper.CreateMap<Colour, ColourDto>();
            Mapper.CreateMap<ColourDto, Colour>();
        }
    }
}
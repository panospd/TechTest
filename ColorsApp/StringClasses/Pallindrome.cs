using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ColorsApp.StringClasses
{
    public static class Pallindrome
    {
        public static bool isPallindrome (this string text)
        {
            return text.SequenceEqual(text.Reverse());
        }

    }
}
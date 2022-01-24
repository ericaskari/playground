using System;
using System.Collections.Generic;

namespace DotNetPlayground
{
    public class BookRepo
    {
        public IEnumerable<Book> GetBooks()
        {
            return new List<Book>
            {
                new Book() {Title = "Porn Book", Price = 15},
                new Book() {Title = "WhatEver", Price = 8},
                new Book() {Title = "Google", Price = 4},
                new Book() {Title = "Edison", Price = 1}
            };
        }
        public DateTime Time { get; set; }

    }
}
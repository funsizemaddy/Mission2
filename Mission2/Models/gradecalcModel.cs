using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2.Models
{
    public class GradecalcModel
    {
        // Inside the curlley braces allows for the get and set to be coded for us. We just need the name=""
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a value between 0 and 100")]
        public byte Assignment { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a value between 0 and 100")]
        public byte Project { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a value between 0 and 100")]
        public byte Quiz { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a value between 0 and 100")]
        public byte Exam { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Please enter a value between 0 and 100")]
        public byte Intex { get; set; }

    }
}

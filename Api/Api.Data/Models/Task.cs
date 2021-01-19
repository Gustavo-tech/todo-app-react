using Api.Data.Models.Enums;

namespace Api.Data.Models
{
    public class Todo
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Priority Priority { get; set; }
    }
}

using Api.Data.Models.Enums;
using Newtonsoft.Json;

namespace Api.Data.Models
{
    public class Todo
    {
        public int Id { get; set; }
        public string TaskName { get; set; }
        public Priority Priority { get; set; }

        [JsonConstructor]
        public Todo(string taskName, Priority priority)
        {
            TaskName = taskName;
            Priority = priority;
        }

        public Todo(int id, string taskName, Priority priority)
        {
            Id = id;
            TaskName = taskName;
            Priority = priority;
        }
    }
}

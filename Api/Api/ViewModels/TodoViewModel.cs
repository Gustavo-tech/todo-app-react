using System.Text.Json.Serialization;

namespace Api.ViewModels
{
    public class TodoViewModel
    {
        public int Id { get; set; }
        public string TaskName { get; set; }
        public string Priority { get; set; }

        [JsonConstructor]
        public TodoViewModel(string taskName, string priority)
        {
            TaskName = taskName;
            Priority = priority;
        }

        public TodoViewModel(int id, string taskName, string priority)
        {
            Id = id;
            TaskName = taskName;
            Priority = priority;
        }
    }
}

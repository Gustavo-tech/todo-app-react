using Api.Data.Models;

namespace Api.Converters
{
    public class TaskPropertiesConverter
    {
        public static string ConvertPriorityToString(Todo todo)
        {
           switch (todo.Priority)
            {
                case Data.Models.Enums.Priority.High:
                    return "High";
                case Data.Models.Enums.Priority.Medium:
                    return "Medium";
                case Data.Models.Enums.Priority.Low:
                    return "Low";
                default:
                    return "Undefined";
            }
        }
    }
}

using Api.Converters;
using Api.Data.Models;
using NUnit.Framework;

namespace Api.Tests.ConverterTests
{
    class ConvertTest
    {
        [Test]
        public void TestConvertPriorityToString()
        {
            Todo todo = new Todo("Test this method", Data.Models.Enums.Priority.High);

            string todoPriority = TaskPropertiesConverter.ConvertPriorityToString(todo);

            Assert.AreEqual("High", todoPriority);
        }
    }
}

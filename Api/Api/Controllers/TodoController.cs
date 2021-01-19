using Api.Data.Models;
using Api.Data.Queries;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        [Route("todos")]
        public IActionResult GetTodos()
        {
            try
            {
                return Ok(TaskQuery.GetTodos());
            }
            catch (Exception exception)
            {
                return Problem(exception.Message);
            }
        }

        [HttpPost]
        [Route("add")]
        public IActionResult InsertTodo([FromBody] Todo todo)
        {
            try
            {
                TaskQuery.SaveTodo(todo);
                return Ok("Task saved succesfully");
            }
            catch (Exception exception)
            {
                return Problem(exception.Message);
            }
        }
    }
}

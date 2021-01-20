﻿using Api.Converters;
using Api.Data.Models;
using Api.Data.Queries;
using Api.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

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
                List<Todo> todos = TaskQuery.GetTodos();
                List<TodoViewModel> todoViews = new List<TodoViewModel>();
                foreach (Todo todo in todos)
                {
                    TodoViewModel todoViewModel = new TodoViewModel(todo.Id, todo.TaskName, TaskPropertiesConverter.ConvertPriorityToString(todo));
                    todoViews.Add(todoViewModel);
                }

                return Ok(todoViews);
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
            TaskQuery.SaveTodo(todo);
            return Ok("Task saved succesfully");
            //try
            //{
            //    TaskQuery.SaveTodo(todo);
            //    return Ok("Task saved succesfully");
            //}
            //catch (Exception exception)
            //{
            //    return Problem(exception.Message);
            //}
        }
    }
}

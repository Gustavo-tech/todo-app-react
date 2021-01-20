using Api.Data.Models;
using Dapper;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace Api.Data.Queries
{
    public class TaskQuery
    {
        public static List<Todo> GetTodos()
        {
            using(SqlConnection connection = new SqlConnection(DatabaseConnectionFactory.GetToDoConnection()))
            {
                string query = "SELECT * FROM Todos ORDER BY Priority ASC";
                return connection.Query<Todo>(query).ToList();
            }
        }

        public static void SaveTodo(Todo todo)
        {
            using (SqlConnection connection = new SqlConnection(DatabaseConnectionFactory.GetToDoConnection()))
            {
                string getLastId = "SELECT Id FROM Todos ORDER BY Id DESC";
                int id = connection.ExecuteScalar<int>(getLastId) + 1;

                string query = "INSERT INTO Todos VALUES (@Id, @TaskName, @Priority)";
                connection.Query<Todo>(query, new {Id = id, TaskName = todo.TaskName, Priority = todo.Priority });
            }
        }
    }
}

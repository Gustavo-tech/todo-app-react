namespace Api.Data
{
    public static class DatabaseConnectionFactory
    {
        public static string GetToDoConnection()
        {
            return "Data Source=DESKTOP-CLEANDE;Initial Catalog=todos;Integrated Security=True";
        }
    }
}

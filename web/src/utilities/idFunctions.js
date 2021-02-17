export function getLastId(tasks) {
  var maxId = 0;

  tasks.forEach(task => {
      if (task.id > maxId) {
          maxId = task.id;
      }
  })

  return maxId;
}
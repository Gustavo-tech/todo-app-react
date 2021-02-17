export function filterTasks(tasks) {
  tasks.sort((a, b) => {
    const aLevel = getTaskPriority(a.priority);
    const bLevel = getTaskPriority(b.priority);

    if (aLevel < bLevel) {
      return -1;
    }

    else if (aLevel > bLevel) {
      return 1;
    }

    return 0;
  })
}

function getTaskPriority(priority) {
  switch(priority) {
    case "High":
      return 1;
    case "Medium":
      return 2;
    case "Low":
      return "3";
    default:
      return 99;
  }
}
export function convertPriorityToNumber(priority) {
  switch (priority) {
      case "High":
          return 0;
      case "Medium":
          return 1;
      case "Low":
          return 2;
      default:
          return 2;
  }
}

export function convertPriorityToString(priority) {
  switch (priority) {
      case 0:
          return "High";
      case 1:
          return "Medium";
      case 2:
          return "Low";
      default:
          return "Low";
  }
}
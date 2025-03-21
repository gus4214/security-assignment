export interface Task {
  taskType: string;
  taskName: string;
  taskDescription: string;
  assignee: string;
  reporter: string;
  status: string;
  dueDate: string;
  createdAt: string;
  completedAt: string;
}

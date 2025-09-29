export type Priority = 'high' | 'medium' | 'low';
export type TaskStatus = 'todo' | 'in-progress' | 'done';

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  status: TaskStatus;
  deadline?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Column {
  id: TaskStatus;
  title: string;
  taskIds: string[];
}

export interface Board {
  tasks: Record<string, Task>;
  columns: Record<TaskStatus, Column>;
  columnOrder: TaskStatus[];
}

export interface AppState {
  board: Board;
  isDarkMode: boolean;
  isModalOpen: boolean;
  editingTask: Task | null;
  filters: {
    priority: Priority | 'all';
    search: string;
  };
}
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AppState, Task, Priority, TaskStatus } from '../types';
import { generateId } from '../utils';

interface TaskActions {
  addTask: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  moveTask: (taskId: string, newStatus: TaskStatus, newIndex: number) => void;
  setModalOpen: (isOpen: boolean) => void;
  setEditingTask: (task: Task | null) => void;
  toggleDarkMode: () => void;
  setFilter: (key: 'priority' | 'search', value: Priority | 'all' | string) => void;
  resetFilters: () => void;
}

type TaskStore = AppState & TaskActions;

const initialTasks: Record<string, Task> = {
  '1': {
    id: '1',
    title: 'Design new landing page',
    description: 'Create a modern and responsive landing page for the product',
    priority: 'high',
    status: 'todo',
    deadline: new Date('2024-01-15'),
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
  '2': {
    id: '2',
    title: 'Implement user authentication',
    description: 'Add login and signup functionality with JWT tokens',
    priority: 'high',
    status: 'in-progress',
    deadline: new Date('2024-01-20'),
    createdAt: new Date('2024-01-02'),
    updatedAt: new Date('2024-01-02'),
  },
  '3': {
    id: '3',
    title: 'Write unit tests',
    description: 'Add comprehensive test coverage for all components',
    priority: 'medium',
    status: 'todo',
    createdAt: new Date('2024-01-03'),
    updatedAt: new Date('2024-01-03'),
  },
  '4': {
    id: '4',
    title: 'Setup CI/CD pipeline',
    description: 'Configure automated testing and deployment',
    priority: 'low',
    status: 'done',
    createdAt: new Date('2023-12-28'),
    updatedAt: new Date('2024-01-01'),
  },
};

const initialColumns = {
  todo: {
    id: 'todo' as TaskStatus,
    title: 'To Do',
    taskIds: ['1', '3'],
  },
  'in-progress': {
    id: 'in-progress' as TaskStatus,
    title: 'In Progress',
    taskIds: ['2'],
  },
  done: {
    id: 'done' as TaskStatus,
    title: 'Done',
    taskIds: ['4'],
  },
};

export const useTaskStore = create<TaskStore>()(
  persist(
    (set, get) => ({
      board: {
        tasks: initialTasks,
        columns: initialColumns,
        columnOrder: ['todo', 'in-progress', 'done'],
      },
      isDarkMode: false,
      isModalOpen: false,
      editingTask: null,
      filters: {
        priority: 'all',
        search: '',
      },

      addTask: (taskData) => {
        const id = generateId();
        const now = new Date();
        const newTask: Task = {
          ...taskData,
          id,
          createdAt: now,
          updatedAt: now,
        };

        set((state) => ({
          board: {
            ...state.board,
            tasks: {
              ...state.board.tasks,
              [id]: newTask,
            },
            columns: {
              ...state.board.columns,
              [newTask.status]: {
                ...state.board.columns[newTask.status],
                taskIds: [...state.board.columns[newTask.status].taskIds, id],
              },
            },
          },
        }));
      },

      updateTask: (id, updates) => {
        const state = get();
        const currentTask = state.board.tasks[id];
        if (!currentTask) return;

        const updatedTask = {
          ...currentTask,
          ...updates,
          updatedAt: new Date(),
        };

        // If status changed, move task between columns
        if (updates.status && updates.status !== currentTask.status) {
          const oldColumn = state.board.columns[currentTask.status];
          const newColumn = state.board.columns[updates.status];

          set({
            board: {
              ...state.board,
              tasks: {
                ...state.board.tasks,
                [id]: updatedTask,
              },
              columns: {
                ...state.board.columns,
                [currentTask.status]: {
                  ...oldColumn,
                  taskIds: oldColumn.taskIds.filter((taskId) => taskId !== id),
                },
                [updates.status]: {
                  ...newColumn,
                  taskIds: [...newColumn.taskIds, id],
                },
              },
            },
          });
        } else {
          set((state) => ({
            board: {
              ...state.board,
              tasks: {
                ...state.board.tasks,
                [id]: updatedTask,
              },
            },
          }));
        }
      },

      deleteTask: (id) => {
        const state = get();
        const task = state.board.tasks[id];
        if (!task) return;

        const { [id]: deletedTask, ...remainingTasks } = state.board.tasks;
        const column = state.board.columns[task.status];

        set({
          board: {
            ...state.board,
            tasks: remainingTasks,
            columns: {
              ...state.board.columns,
              [task.status]: {
                ...column,
                taskIds: column.taskIds.filter((taskId) => taskId !== id),
              },
            },
          },
        });
      },

      moveTask: (taskId, newStatus, newIndex) => {
        const state = get();
        const task = state.board.tasks[taskId];
        if (!task) return;

        const oldColumn = state.board.columns[task.status];
        const newColumn = state.board.columns[newStatus];

        // Remove from old column
        const oldTaskIds = oldColumn.taskIds.filter((id) => id !== taskId);
        
        // Add to new column at specific index
        const newTaskIds = [...newColumn.taskIds];
        if (newStatus === task.status) {
          // Same column, just reorder
          const oldIndex = newColumn.taskIds.indexOf(taskId);
          newTaskIds.splice(oldIndex, 1);
        }
        newTaskIds.splice(newIndex, 0, taskId);

        set({
          board: {
            ...state.board,
            tasks: {
              ...state.board.tasks,
              [taskId]: {
                ...task,
                status: newStatus,
                updatedAt: new Date(),
              },
            },
            columns: {
              ...state.board.columns,
              [task.status]: {
                ...oldColumn,
                taskIds: oldTaskIds,
              },
              [newStatus]: {
                ...newColumn,
                taskIds: newTaskIds,
              },
            },
          },
        });
      },

      setModalOpen: (isOpen) => set({ isModalOpen: isOpen }),
      setEditingTask: (task) => set({ editingTask: task }),
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      setFilter: (key, value) =>
        set((state) => ({
          filters: {
            ...state.filters,
            [key]: value,
          },
        })),
      resetFilters: () =>
        set({
          filters: {
            priority: 'all',
            search: '',
          },
        }),
    }),
    {
      name: 'neontasks-storage',
      partialize: (state) => ({
        board: state.board,
        isDarkMode: state.isDarkMode,
        filters: state.filters,
      }),
    }
  )
);
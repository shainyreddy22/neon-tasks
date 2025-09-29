import React from 'react';
import { Calendar, Clock, MoreHorizontal, Edit, Trash2 } from 'lucide-react';
import { Task } from '../../types';
import { useTaskStore } from '../../store';
import { formatDate, isOverdue } from '../../utils';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { setEditingTask, setModalOpen, deleteTask } = useTaskStore();
  const [showActions, setShowActions] = React.useState(false);

  const handleEdit = () => {
    setEditingTask(task);
    setModalOpen(true);
    setShowActions(false);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(task.id);
    }
    setShowActions(false);
  };

  const isTaskOverdue = task.deadline && isOverdue(task.deadline);

  return (
    <Card 
      className="p-4 cursor-pointer transition-all duration-200 hover:shadow-lg"
      hover
      onClick={() => handleEdit()}
    >
      <div className="space-y-3">
        {/* Header */}
        <div className="flex items-start justify-between">
          <h4 className="font-medium text-gray-900 dark:text-white line-clamp-2 flex-1">
            {task.title}
          </h4>
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowActions(!showActions);
              }}
              className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <MoreHorizontal className="w-4 h-4 text-gray-500" />
            </button>
            
            {showActions && (
              <div className="absolute right-0 top-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10 py-1 min-w-32">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEdit();
                  }}
                  className="w-full px-3 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2"
                >
                  <Edit className="w-3 h-3" />
                  <span>Edit</span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete();
                  }}
                  className="w-full px-3 py-2 text-left text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Delete</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        {task.description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
            {task.description}
          </p>
        )}

        {/* Priority Badge */}
        <div className="flex items-center justify-between">
          <Badge variant={task.priority} size="sm">
            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
          </Badge>

          {/* Deadline */}
          {task.deadline && (
            <div className={`flex items-center space-x-1 text-xs ${
              isTaskOverdue 
                ? 'text-red-600 dark:text-red-400' 
                : 'text-gray-500 dark:text-gray-400'
            }`}>
              {isTaskOverdue ? (
                <Clock className="w-3 h-3" />
              ) : (
                <Calendar className="w-3 h-3" />
              )}
              <span>{formatDate(task.deadline)}</span>
            </div>
          )}
        </div>

        {/* Overdue indicator */}
        {isTaskOverdue && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-2">
            <p className="text-xs text-red-600 dark:text-red-400 font-medium">
              Overdue
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default TaskCard;
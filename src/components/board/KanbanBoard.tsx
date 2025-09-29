import React from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { useTaskStore } from '../../store';
import TaskCard from './TaskCard';
import { Plus } from 'lucide-react';

const KanbanBoard: React.FC = () => {
  const { board, moveTask, setModalOpen, setEditingTask, filters } = useTaskStore();

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    moveTask(draggableId, destination.droppableId as any, destination.index);
  };

  const handleAddTask = () => {
    setEditingTask(null);
    setModalOpen(true);
  };

  const getFilteredTasks = (taskIds: string[]) => {
    return taskIds.filter(taskId => {
      const task = board.tasks[taskId];
      if (!task) return false;

      // Filter by priority
      if (filters.priority !== 'all' && task.priority !== filters.priority) {
        return false;
      }

      // Filter by search
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        return (
          task.title.toLowerCase().includes(searchLower) ||
          task.description.toLowerCase().includes(searchLower)
        );
      }

      return true;
    });
  };

  return (
    <div className="h-full">
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {board.columnOrder.map((columnId) => {
            const column = board.columns[columnId];
            const filteredTaskIds = getFilteredTasks(column.taskIds);

            return (
              <div key={columnId} className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                    {column.title}
                    <span className="ml-2 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm px-2 py-1 rounded-full">
                      {filteredTaskIds.length}
                    </span>
                  </h3>
                  <button
                    onClick={() => handleAddTask()}
                    className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    title="Add task"
                  >
                    <Plus className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>

                <Droppable droppableId={columnId}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={`min-h-96 space-y-3 transition-colors duration-200 ${
                        snapshot.isDraggingOver ? 'bg-gray-50 dark:bg-gray-700 rounded-lg' : ''
                      }`}
                    >
                      {filteredTaskIds.map((taskId, index) => {
                        const task = board.tasks[taskId];
                        if (!task) return null;

                        return (
                          <Draggable key={taskId} draggableId={taskId} index={index}>
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className={`transition-transform duration-200 ${
                                  snapshot.isDragging ? 'rotate-2 scale-105' : ''
                                }`}
                              >
                                <TaskCard task={task} />
                              </div>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}

                      {filteredTaskIds.length === 0 && (
                        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                          <p className="text-sm">No tasks</p>
                        </div>
                      )}
                    </div>
                  )}
                </Droppable>
              </div>
            );
          })}
        </div>
      </DragDropContext>
    </div>
  );
};

export default KanbanBoard;
import React from 'react';
import Layout from '../components/layout/Layout';
import KanbanBoard from '../components/board/KanbanBoard';
import TaskModal from '../components/modals/TaskModal';

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to <span className="text-neon-500">NeonTasks</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Organize your work and life with our beautiful, intuitive task management platform.
            Drag, drop, and prioritize your way to productivity.
          </p>
        </div>

        {/* Kanban Board */}
        <KanbanBoard />

        {/* Task Modal */}
        <TaskModal />
      </div>
    </Layout>
  );
};

export default Dashboard;
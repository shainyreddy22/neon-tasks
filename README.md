# 🌟 NeonTasks - Modern Task Management

A vibrant and interactive task management web application built with React, TypeScript, and TailwindCSS. Organize your work and life with beautiful Kanban boards, drag-and-drop functionality, and a sleek modern interface.

![NeonTasks Preview](https://neon-tasks.vercel.app/)

## ✨ Features

### 🎯 Core Functionality
- **Kanban Board Layout** - Three customizable columns (To Do, In Progress, Done)
- **Drag & Drop** - Intuitive task management with smooth animations
- **Task Management** - Create, edit, delete, and organize tasks
- **Priority System** - High, Medium, Low priority levels with color coding
- **Search & Filter** - Find tasks quickly by text or priority
- **Deadlines** - Set and track task deadlines with overdue indicators

### 🎨 UI/UX Excellence
- **Dark/Light Mode** - Toggle between themes with smooth transitions
- **Mobile-First Design** - Fully responsive across all devices
- **Modern Animations** - Smooth hover effects and transitions
- **Beautiful Typography** - Clean, readable fonts and layouts
- **Neon Theme** - Vibrant accent colors and modern design language

### 💾 Data Persistence
- **Local Storage** - Tasks persist between browser sessions
- **State Management** - Powered by Zustand for optimal performance
- **Real-time Updates** - Instant feedback on all actions

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/neontasks.git
   cd neontasks
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:3000
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## 🏗️ Project Structure

```
neontasks/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Badge.tsx
│   │   ├── layout/         # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Layout.tsx
│   │   ├── board/          # Kanban board components
│   │   │   ├── KanbanBoard.tsx
│   │   │   └── TaskCard.tsx
│   │   └── modals/         # Modal components
│   │       └── TaskModal.tsx
│   ├── store/              # State management
│   │   └── index.ts        # Zustand store
│   ├── pages/              # Page components
│   │   └── Dashboard.tsx
│   ├── types/              # TypeScript definitions
│   │   └── index.ts
│   ├── utils/              # Helper functions
│   │   └── index.ts
│   ├── hooks/              # Custom React hooks
│   │   └── useDarkMode.ts
│   ├── App.tsx             # Main App component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── public/                 # Static assets
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # TailwindCSS configuration
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## 🛠️ Built With

### Frontend Framework
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server

### Styling & UI
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **Framer Motion** - Smooth animations and transitions

### State Management
- **Zustand** - Lightweight, flexible state management
- **Persist Middleware** - Automatic localStorage persistence

### Drag & Drop
- **React Beautiful DnD** - Accessible drag and drop lists

### Development Tools
- **ESLint** - Code linting and quality checks
- **Prettier** - Code formatting
- **PostCSS** - CSS processing and optimization

## 🎮 Usage Guide

### Creating Tasks
1. Click the **"Add Task"** button in the header
2. Or click the **"+"** icon on any column
3. Fill in task details (title, description, priority, deadline)
4. Click **"Create Task"** to save

### Managing Tasks
- **Edit**: Click on any task card to open the edit modal
- **Delete**: Use the menu (⋯) on task cards
- **Move**: Drag and drop tasks between columns
- **Priority**: Color-coded badges (Red=High, Yellow=Medium, Green=Low)

### Filtering & Search
- **Search**: Use the search bar in the header
- **Filter**: Select priority level from the dropdown
- **Clear**: Remove all filters with the "Clear" button

### Theme Toggle
- Click the **moon/sun icon** in the header to switch themes
- Preference is automatically saved

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Add TypeScript types for new features
- Test your changes thoroughly
- Update documentation as needed

## 📱 Browser Support

NeonTasks supports all modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for custom configuration:
```env
VITE_APP_TITLE=NeonTasks
VITE_APP_VERSION=1.0.0
```

### TailwindCSS Customization
Modify `tailwind.config.js` to customize the theme:
```javascript
// Custom colors, animations, and breakpoints
theme: {
  extend: {
    colors: {
      neon: {
        // Your custom color palette
      }
    }
  }
}
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **TailwindCSS** - For the utility-first CSS approach
- **Lucide** - For the beautiful icon set
- **Vercel** - For inspiration on modern web design

## 📞 Support

If you have any questions or need help:
- 📧 Email: karnatishainyreddy@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/shainyreddy22/neon-tasks/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/shainyreddy22/neon-tasks/discussions)

---

<p align="center">
  Made with ❤️ by the NeonTasks Team
</p>

<p align="center">
  <a href="#quick-start">Quick Start</a> •
  <a href="#features">Features</a> •
  <a href="#built-with">Built With</a> •
  <a href="#contributing">Contributing</a>
</p>

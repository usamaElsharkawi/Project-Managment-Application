# Project Management Application

A modern, responsive project management tool built with React and Tailwind CSS. This application helps you organize your projects, manage tasks, and keep track of deadlines effortlessly.

## 🚀 Features

- **Project Creation**: Create new projects with a title, detailed description, and due date.
- **Task Management**: Add specific tasks to each project and delete them as they are completed.
- **Project Sidebar**: Tailored sidebar for easy navigation between your active projects.
- **Details View**: View project details and tasks in a dedicated panel.
- **Project Deletion**: Remove projects you no longer need.
- **Empty State Handling**: Graceful handling of "No Project Selected" and "Create New Project" states.

## 🛠️ Technologies Used

- **Frontend Framework**: [React](https://react.dev/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: React Context API

## 📂 Project Structure

- `src/store/`: Contains `projects-context.jsx` which manages the global state for projects and tasks.
- `src/components/`: Reusable UI components including:
  - `NewProject`: Form for creating projects.
  - `SelectedProject`: Displays project details and tasks.
  - `Tasks`: Manages the list of tasks for the selected project.
  - `ProjectSidebar`: Navigation menu for projects.
  - `NoProjectSelected`: Placeholder view.

## 💻 Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/project-management-app.git
    cd project-management-app
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

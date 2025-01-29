# Todo App with React, Redux & TypeScript

[![Live Demo](https://img.shields.io/badge/demo-netlify-success?style=flat&logo=netlify)](https://todo-redux-srihari.netlify.app/)
[![React](https://img.shields.io/badge/react-18.2.0-blue?logo=react)](https://react.dev/)
[![Redux](https://img.shields.io/badge/redux-4.2.1-purple?logo=redux)](https://redux-toolkit.js.org/)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](LICENSE)

A modern task management application built with TypeScript and modern web technologies.

![Todo App Preview](https://via.placeholder.com/800x500.png?text=Todo+App+Screenshot) <!-- Add real screenshot later -->

## Features ✨

- **CRUD Operations**: Add, toggle, and delete todos
- **Persistent Storage**: Todos saved in localStorage
- **Dark Mode**: Elegant dark theme with Tailwind CSS
- **Responsive Design**: Works on mobile & desktop
- **Type Safety**: Full TypeScript integration
- **State Management**: Redux Toolkit for predictable state
- **Modern Styling**: Tailwind CSS utility classes

## Technologies 🛠️

- **Frontend**: React 18
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Type Checking**: TypeScript
- **Build Tool**: Vite
- **Deployment**: Netlify

## Installation ⚙️

1. Clone repository:
```bash
git clone https://github.com/SriHariPokkimgari/Todo-redux.git
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

## Usage 📖

1. **Add Todo**:
   - Type task in input field
   - Press Enter or click Add button

2. **Complete Todo**:
   - Click checkbox to toggle status

3. **Delete Todo**:
   - Click trash icon to remove task

4. **Dark Mode**:
   - Automatically adapts to system preferences

## Folder Structure 📂

```
src/
├── app/            # Redux store configuration
├── features/       # Redux slices (todos logic)
├── components/     # React components
├── utils/          # Helper functions (localStorage)
├── types/          # TypeScript type definitions
└── main.tsx        # App entry point
```

## Contributing 🤝

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add awesome feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

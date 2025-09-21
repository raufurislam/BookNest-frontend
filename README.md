# 📚 BookNest - Modern Library Management System

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge&logo=vercel)](https://booknest-peach.vercel.app)
[![Backend API](https://img.shields.io/badge/Backend%20API-View%20Docs-green?style=for-the-badge&logo=github)](https://library-management-application-beta.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

A full-stack library management system built with React, TypeScript, and Redux Toolkit. BookNest provides an intuitive interface for managing books, tracking borrows, and monitoring library statistics. It's a small task project built to practice and demonstrate modern frontend development techniques.

## ✨ Features

### 📖 Book Management

- **Add Books**: Comprehensive form with validation for adding new books
- **View All Books**: Paginated table with sorting and filtering capabilities
- **Book Details**: Detailed view with full book information
- **Edit Books**: Update book information with real-time validation
- **Delete Books**: Secure deletion with confirmation dialogs

### 🔄 Borrow Management

- **Borrow Books**: Easy borrowing system with quantity and due date selection
- **Borrow Summary**: Track all active borrows with aggregated data
- **Return Management**: Handle book returns and availability updates

### 📊 Analytics & Statistics

- **Real-time Stats**: Live statistics dashboard showing library metrics
- **Book Analytics**: Track book availability, popular genres, and usage patterns
- **Borrow Tracking**: Monitor borrowing trends and overdue books

### 🎨 User Experience

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Theme**: Theme switching with system preference detection
- **Modern UI**: Clean, professional interface with Radix UI components
- **Real-time Updates**: Live data synchronization across all components

## 🚀 Tech Stack

### Frontend

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Redux Toolkit** - State management with RTK Query
- **React Router v7** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

### Backend Integration

- **RESTful API** - Clean API design
- **Axios** - HTTP client with interceptors
- **RTK Query** - Data fetching and caching
- **TypeScript** - End-to-end type safety

### Development Tools

- **ESLint** - Code linting and formatting
- **TypeScript** - Static type checking
- **Vite** - Fast development and building
- **PNPM** - Fast, disk space efficient package manager

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── layout/          # Layout components (Navbar, Footer)
│   ├── modules/         # Feature-specific components
│   │   ├── books/       # Book-related components
│   │   └── shared/      # Shared components (Dialogs, Pagination)
│   └── ui/              # Base UI components (Button, Card, etc.)
├── pages/               # Page components
│   ├── home/            # Homepage components
│   ├── all-books/       # Books listing page
│   ├── add-books/       # Add book page
│   └── borrow-summary/  # Borrow management page
├── redux/               # State management
│   ├── api/             # RTK Query API definitions
│   ├── features/        # Redux slices
│   └── hooks/           # Custom Redux hooks
├── types/               # TypeScript type definitions
├── lib/                 # Utility functions
├── config/              # Configuration files
└── routes/              # Routing configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PNPM (recommended) or npm
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/BookNest-frontend.git
   cd BookNest-frontend
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:

   ```env
   VITE_BASE_URL=https://library-management-application-beta.vercel.app
   VITE_FRONTEND_URL=https://booknest-peach.vercel.app
   ```

4. **Start development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm preview          # Preview production build

# Code Quality
pnpm lint             # Run ESLint
pnpm type-check       # Run TypeScript compiler

# Package Management
pnpm install          # Install dependencies
pnpm update           # Update dependencies
```

## 🔧 Configuration

### Environment Variables

| Variable            | Description     | Default  |
| ------------------- | --------------- | -------- |
| `VITE_BASE_URL`     | Backend API URL | Required |
| `VITE_FRONTEND_URL` | Frontend URL    | Required |

### Build Configuration

The project uses Vite for building with the following configuration:

- **Port**: 3000 (development)
- **Build Output**: `dist/` directory
- **TypeScript**: Strict mode enabled
- **Aliases**: `@` points to `src/` directory

## 📱 Features in Detail

### Book Management System

- **CRUD Operations**: Complete Create, Read, Update, Delete functionality
- **Search & Filter**: Real-time search and filtering capabilities
- **Pagination**: Efficient data loading with pagination
- **Sorting**: Multi-column sorting with visual indicators
- **Validation**: Client-side and server-side validation

### State Management

- **Redux Toolkit**: Centralized state management
- **RTK Query**: Efficient data fetching and caching
- **UI State**: Local UI state management with Redux slices
- **Type Safety**: Full TypeScript integration

### User Interface

- **Responsive Design**: Mobile-first responsive layout
- **Accessibility**: WCAG compliant components
- **Theme Support**: Dark and light theme switching
- **Loading States**: Skeleton loaders and loading indicators
- **Error Handling**: Comprehensive error boundaries and user feedback

## 🔗 API Integration

The frontend integrates with a RESTful API providing:

### Book Endpoints

- `GET /books` - Fetch all books with pagination and filtering
- `POST /books` - Create new book
- `GET /books/:id` - Get book details
- `PUT /books/:id` - Update book
- `DELETE /books/:id` - Delete book

### Borrow Endpoints

- `POST /borrow` - Borrow a book
- `GET /borrow` - Get borrow summary
- `PUT /borrow/:id` - Update borrow status

### Statistics Endpoints

- `GET /stats` - Get library statistics

## 🎨 Design System

### Color Palette

- **Primary**: Custom yellow (#F9C265)
- **Secondary**: Tailwind CSS color system
- **Neutral**: Gray scale for text and backgrounds

### Typography

- **Font Family**: System fonts with fallbacks
- **Font Sizes**: Responsive typography scale
- **Font Weights**: 400, 500, 600, 700

### Components

- **Buttons**: Multiple variants and sizes
- **Cards**: Consistent card layouts
- **Forms**: Accessible form components
- **Tables**: Responsive data tables
- **Modals**: Accessible dialog components

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
# Build the project
pnpm build

# The dist/ folder contains the production build
# Deploy the contents to your hosting provider
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run tests and linting**
   ```bash
   pnpm lint
   pnpm type-check
   ```
5. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use meaningful commit messages
- Write clean, readable code
- Add proper error handling
- Test your changes thoroughly

## 📄 License

This project is licensed under the MIT License.

<!-- ## 👥 Team

- **Frontend Development**: [Your Name](https://github.com/your-username)
- **Backend Development**: [Raufur Islam](https://github.com/raufurislam) -->

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Radix UI](https://www.radix-ui.com/) - Component primitives
- [Vercel](https://vercel.com/) - Hosting platform
- [Vite](https://vitejs.dev/) - Build tool

<!-- ## 📞 Support

If you have any questions or need help:

- **Issues**: [GitHub Issues](https://github.com/your-username/BookNest-frontend/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/BookNest-frontend/discussions)
- **Email**: your-email@example.com -->

---

<div align="center">
  <p>Made with ❤️ by the BookNest Team</p>
  <p>
    <a href="https://booknest-peach.vercel.app">Live Demo</a> •
    <a href="https://github.com/raufurislam/BookNest-server">Backend Repo</a> •
    <a href="https://library-management-application-beta.vercel.app">API Docs</a>
  </p>
</div>

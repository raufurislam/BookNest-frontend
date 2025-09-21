# Contributing to BookNest

Thank you for your interest in contributing to BookNest! This document provides guidelines and information for contributors.

## 🚀 Quick Start

1. Fork the repository
2. Clone your fork: `git clone https://github.com/your-username/BookNest-frontend.git`
3. Install dependencies: `pnpm install`
4. Create a feature branch: `git checkout -b feature/your-feature-name`
5. Make your changes and test them
6. Commit your changes: `git commit -m "Add your feature"`
7. Push to your fork: `git push origin feature/your-feature-name`
8. Create a Pull Request

## 📋 Development Setup

### Prerequisites

- Node.js 18 or higher
- PNPM (recommended) or npm
- Git

### Environment Setup

1. Copy `.env.example` to `.env`
2. Fill in the required environment variables
3. Start the development server: `pnpm dev`

### Code Style

- Use TypeScript for all new code
- Follow ESLint rules (run `pnpm lint` to check)
- Use Prettier for code formatting
- Write meaningful commit messages
- Add JSDoc comments for complex functions

## 🧪 Testing

Before submitting a PR, please ensure:

- [ ] All existing tests pass
- [ ] New features have appropriate tests
- [ ] Code follows the project's style guidelines
- [ ] No TypeScript errors
- [ ] No ESLint warnings

## 📝 Pull Request Guidelines

### Before Submitting

- [ ] Update documentation if needed
- [ ] Add tests for new functionality
- [ ] Ensure all tests pass
- [ ] Update CHANGELOG.md if applicable

### PR Description

Please include:

- A clear description of what the PR does
- Screenshots for UI changes
- Any breaking changes
- Related issues

### Code Review Process

1. All PRs require at least one review
2. Address feedback promptly
3. Keep PRs focused and small when possible
4. Respond to review comments

## 🐛 Bug Reports

When reporting bugs, please include:

- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots if applicable
- Browser/OS information

## ✨ Feature Requests

For feature requests, please:

- Check existing issues first
- Provide a clear description
- Explain the use case
- Consider implementation complexity

## 📚 Code Organization

### File Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── redux/         # State management
├── types/         # TypeScript definitions
├── lib/           # Utility functions
└── config/        # Configuration
```

### Naming Conventions

- Components: PascalCase (e.g., `BookCard.tsx`)
- Hooks: camelCase starting with 'use' (e.g., `useBooks.ts`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Types: PascalCase with 'I' prefix for interfaces (e.g., `IBook`)

## 🔧 Development Guidelines

### TypeScript

- Use strict mode
- Define proper types for all functions
- Use interfaces for object shapes
- Avoid `any` type when possible

### React Best Practices

- Use functional components with hooks
- Implement proper error boundaries
- Use React.memo for performance optimization
- Follow the single responsibility principle

### State Management

- Use Redux Toolkit for global state
- Use local state for component-specific data
- Implement proper loading and error states
- Use RTK Query for API calls

### Styling

- Use Tailwind CSS classes
- Follow mobile-first approach
- Ensure responsive design
- Maintain consistent spacing

## 📖 Documentation

### Code Documentation

- Add JSDoc comments for complex functions
- Document component props with TypeScript
- Include usage examples in component files
- Update README.md for new features

### API Documentation

- Document all API endpoints
- Include request/response examples
- Document error codes and messages
- Keep API documentation up to date

## 🚀 Release Process

1. Update version in `package.json`
2. Update CHANGELOG.md
3. Create a release tag
4. Deploy to production
5. Announce the release

## 🤝 Community Guidelines

### Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Provide constructive feedback
- Help others learn and grow

### Communication

- Use clear and concise language
- Be patient with questions
- Provide context in discussions
- Use appropriate channels for different topics

## 📞 Getting Help

- **GitHub Issues**: For bug reports and feature requests
- **GitHub Discussions**: For general questions and discussions
- **Email**: For private or sensitive matters

## 🎯 Areas for Contribution

### High Priority

- Performance optimizations
- Accessibility improvements
- Mobile responsiveness
- Error handling enhancements

### Medium Priority

- New features
- UI/UX improvements
- Documentation updates
- Test coverage

### Low Priority

- Code refactoring
- Dependency updates
- Minor bug fixes
- Style improvements

## 📊 Contribution Recognition

Contributors will be recognized in:

- README.md contributors section
- Release notes
- Project documentation
- Community acknowledgments

Thank you for contributing to BookNest! 🎉

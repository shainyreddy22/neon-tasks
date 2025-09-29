# Contributing to NeonTasks

Thank you for your interest in contributing to NeonTasks! We welcome contributions from the community and are pleased to have you aboard.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Guidelines](#development-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting](#issue-reporting)

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please treat everyone with respect and create a welcoming environment for all contributors.

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/yourusername/neontasks.git
   cd neontasks
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## How to Contribute

### Types of Contributions

- **Bug fixes** - Help us squash bugs
- **Feature enhancements** - Add new functionality
- **Documentation** - Improve our docs
- **UI/UX improvements** - Make the app more beautiful and usable
- **Performance optimizations** - Make the app faster
- **Tests** - Help us improve test coverage

### Development Workflow

1. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes
3. Test your changes thoroughly
4. Commit with a clear message:
   ```bash
   git commit -m "feat: add new task filtering feature"
   ```
5. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
6. Create a Pull Request

## Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow the existing code style and patterns
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### Component Guidelines

- Use functional components with hooks
- Create reusable components in the `components/ui/` directory
- Follow the established folder structure
- Use proper TypeScript types for all props

### Styling Guidelines

- Use TailwindCSS utility classes
- Follow mobile-first responsive design
- Maintain consistency with the existing design system
- Use the established color palette and spacing

### State Management

- Use Zustand for global state
- Keep state minimal and normalized
- Use proper TypeScript types for state

## Pull Request Process

1. **Update documentation** - Update README.md if needed
2. **Add tests** - Include tests for new features
3. **Check your code** - Run linting and formatting:
   ```bash
   npm run lint
   npm run format
   ```
4. **Test thoroughly** - Ensure all features work as expected
5. **Write a clear PR description** - Explain what changes you made and why

### PR Title Format

Use conventional commit format:
- `feat: add new feature`
- `fix: resolve bug issue`
- `docs: update documentation`
- `style: formatting changes`
- `refactor: code refactoring`
- `test: add or update tests`

## Issue Reporting

### Bug Reports

When reporting bugs, please include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Browser and OS information
- Screenshots if applicable

### Feature Requests

For feature requests, please include:
- Clear description of the proposed feature
- Use case and benefits
- Possible implementation approach
- Any relevant mockups or examples

## Questions?

If you have questions about contributing, feel free to:
- Open an issue with the "question" label
- Start a discussion in GitHub Discussions
- Contact the maintainers

Thank you for contributing to NeonTasks! 🌟
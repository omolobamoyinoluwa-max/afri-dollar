# Contributing to AfriDollar

Thank you for your interest in contributing to AfriDollar! This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for all contributors.

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git

### Setup

1. Fork the repository
2. Clone your fork:

   ```bash
   git clone https://github.com/YOUR_USERNAME/afri-dollar.git
   cd afri-dollar
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up git hooks:

   ```bash
   npm run prepare
   ```

5. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Branch Naming Convention

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `refactor/` - Code refactoring
- `test/` - Test additions or modifications
- `chore/` - Maintenance tasks

Example: `feature/wallet-integration`

### Local Development

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Run type checking:

   ```bash
   npm run type-check
   ```

3. Run linting:

   ```bash
   npm run lint
   ```

4. Run tests:
   ```bash
   npm test
   ```

## Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Commit Message Format

```
<type>: <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `build`: Build system changes
- `ci`: CI/CD changes
- `chore`: Other changes
- `revert`: Revert a previous commit

### Examples

```bash
feat: Add USDC wallet integration

Implement wallet creation and USDC balance checking using Stellar SDK.

Closes #123
```

```bash
fix: Resolve transaction timeout issue

Increase timeout duration for Stellar network calls to prevent premature failures.
```

### Pre-commit Checks

Before each commit, the following checks run automatically:

1. **Format Check** - Ensures code is properly formatted
2. **Linting** - Checks for code quality issues
3. **Type Check** - Validates TypeScript types

If any check fails, the commit will be blocked. Fix the issues and try again.

### Pre-push Checks

Before pushing to remote, these checks run:

1. **Type Check** - Full TypeScript validation
2. **Linting** - Complete codebase linting
3. **Build** - Ensures the project builds successfully

**You cannot push code that fails these checks.**

## Pull Request Process

### Before Submitting

1. Ensure all tests pass
2. Update documentation if needed
3. Add tests for new features
4. Ensure your branch is up to date with `main`

### PR Title Format

Follow the same convention as commit messages:

```
feat: Add wallet dashboard
fix: Resolve login issue
docs: Update API documentation
```

### PR Description

Use the provided PR template and fill in all relevant sections:

- Description of changes
- Type of change
- Related issues
- Testing performed
- Screenshots (if applicable)
- Checklist completion

### Review Process

1. At least one maintainer must approve the PR
2. All CI checks must pass
3. No merge conflicts
4. Code follows project standards

### Merging

- PRs are merged using **squash and merge**
- The PR title becomes the commit message
- Delete the branch after merging

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Enable strict mode
- Avoid `any` types
- Provide explicit return types for functions
- Use interfaces for object shapes

### Code Style

- Use Prettier for formatting (automatic)
- Follow ESLint rules (enforced)
- Use meaningful variable names
- Keep functions small and focused
- Add comments for complex logic

### File Organization

```
apps/
  ├── frontend/          # Next.js frontend
  ├── backend/           # Express.js backend
packages/
  ├── shared/            # Shared utilities
  ├── stellar-sdk/       # Stellar integration
  ├── database/          # Prisma client
```

### Naming Conventions

- **Files**: `kebab-case.ts`
- **Components**: `PascalCase.tsx`
- **Functions**: `camelCase`
- **Constants**: `UPPER_SNAKE_CASE`
- **Interfaces**: `PascalCase` (prefix with `I` if needed)
- **Types**: `PascalCase`

## Testing Guidelines

### Test Structure

```typescript
describe('Feature Name', () => {
  it('should do something specific', () => {
    // Arrange
    const input = 'test';

    // Act
    const result = functionUnderTest(input);

    // Assert
    expect(result).toBe('expected');
  });
});
```

### Test Coverage

- Aim for >80% code coverage
- Test edge cases and error conditions
- Mock external dependencies
- Use integration tests for critical paths

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## Documentation

### Code Documentation

- Add JSDoc comments for public APIs
- Document complex algorithms
- Explain non-obvious decisions
- Keep comments up to date

### README Updates

Update relevant README files when:

- Adding new features
- Changing setup instructions
- Modifying configuration
- Adding dependencies

## Questions?

- Open a [Discussion](https://github.com/afridollar/afri-dollar/discussions)
- Check existing [Issues](https://github.com/afridollar/afri-dollar/issues)
- Review the [Documentation](https://docs.afridollar.com)

## License

By contributing, you agree that your contributions will be licensed under the project's license.

---

Thank you for contributing to AfriDollar! 🚀

# Saapless Fullstack Monorepo Starter

Everything you need to get started building your next big project.

## Features

- **TypeScript**: Enjoy static type checking and improved code quality.
- **Task runner by Turborepo**: Efficient task execution for monorepos.
- **REST API on AWS via Serverless Framework**: Deploy and manage serverless applications.
- **Next.js App Client**: Build modern web applications with React and server-side rendering.
- **Unit testing with Jest & E2E testing with Playwright**: Ensure your code works as expected.

## Table of Contents

- [What's Inside?](#whats-inside)
- [Getting Started](#getting-started)
- [Local Development](#local-development)
- [Tests](#tests)
- [Deployment](#deployment)
  - [Deploy from Local](#deploy-from-local)
  - [Deploy via Github Actions](#deploy-via-github-actions)
- [Resources](#resources)
- [License](#license)

## What's Inside?

### Folder Structure

- `/apps` - Front-end clients reside here.
- `/apis` - APIs and backend services.
- `/packages` - Shared libraries, configuration files, and scripts.
- `/e2e` - End-to-end tests setup and configurations.

### Utilities

- **Turborepo**: For orchestrating tasks across multiple packages and apps.
- **TypeScript**: Ensures static type safety across the project.
- **ESLint & Prettier**: Maintain clean and consistent code formatting.
- **Husky & Commitlint**: Pre-commit hooks and git message linting for standardized commits.
- **Jest & Playwright**: Provides unit and end-to-end testing support.
- **Serverless Framework**: Deploy and manage AWS infrastructure for serverless applications.

## Getting Started

1. Click on `Use this template` in the top right corner.
2. Select `Create a new repository`.
3. Create your repository.
4. Clone the repository locally for development:

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

## Local Development

1. Install the project dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Your app should now be running locally!

## Tests

This project supports both unit tests and end-to-end tests:

- **Unit tests** are written using `Jest`.
- **End-to-end tests** are written using `Playwright`.

### Running Tests

- To run unit tests:

  ```bash
  npm run test
  ```

- To run end-to-end tests:

  ```bash
  npm run test:e2e
  ```

## Deployment

### Deploy from Local

Before deploying, ensure your AWS & Serverless Framework credentials are configured locally.

To deploy the infrastructure locally, run:

```bash
npm run deploy
```

**Note:** Your front-end app is hosted via Amplify Hosting. Deploying the infrastructure will only create the resources, in order to deploy the code you need to push your changes to the branch you provided via `BRANCH` env var.

### Deploy via Github Actions

The repository includes a CI/CD setup via GitHub Actions, allowing for:

- Manual deployment triggers.
- Running end-to-end tests as part of the deployment pipeline.

## Resources

Here are some helpful links to documentation and tools used in this monorepo starter:

- [Saapless](https://www.saapless.com) - Learn more about the Saapless platform and its offerings.
- [Turborepo Documentation](https://turbo.build/repo/docs) - Comprehensive guide on using Turborepo for managing tasks in monorepos.
- [Serverless Framework Documentation](https://www.serverless.com/framework/docs) - Official docs on how to build and deploy serverless applications.
- [Next.js Documentation](https://nextjs.org/docs) - Everything you need to know to build modern web applications using Next.js.
- [Playwright Documentation](https://playwright.dev/docs/intro) - Explore how to write reliable end-to-end tests using Playwright.
- [Jest Documentation](https://jestjs.io/docs/getting-started) - A guide to writing unit tests with Jest.

## License

Copyright (c) 2024 Saapless

This software is licensed under the **MIT License**. For more details, refer to the full [LICENSE](./LICENSE) file.

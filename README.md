# Test Automation Suite with CI/CD Pipeline

A comprehensive test automation suite for ParaBank application using Playwright with advanced CI/CD capabilities.

## 🚀 Features

- **Multi-browser testing** (Chromium, Firefox, WebKit)
- **Cross-platform CI/CD** (GitHub Actions)
- **Automated test reporting** with HTML reports and charts
- **Security scanning** with Trivy
- **Parallel test execution**
- **GitHub Pages deployment** for test reports
- **Slack notifications** (configurable)
- **Automated issue creation** on failures

## 📋 Test Coverage

### Current Test Cases
- **TC 001**: Customer registration with valid data
- **TC 002**: Registration validation with invalid data
- **TC 003**: Password mismatch validation

## 🛠️ Setup and Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Local Setup
```bash
# Clone repository
git clone https://github.com/srikantharuban3/test1234.git
cd test1234

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

### Running Tests Locally
```bash
# Run all tests
npm test

# Run tests in headed mode
npm run test:headed

# Run tests for specific browser
npm run test:chromium
npm run test:firefox
npm run test:webkit

# Run tests in debug mode
npm run test:debug

# View test report
npm run report
```

## 🔄 CI/CD Pipeline

### Workflows

#### 1. Main CI/CD Pipeline (`ci-cd.yml`)
**Triggers:**
- Push to `main` or `develop` branches
- Pull requests to `main`
- Daily schedule (2 AM UTC)
- Manual workflow dispatch

**Jobs:**
- **Lint and Validate**: Code quality checks
- **Test Automation**: Multi-browser testing
- **Security Scan**: Trivy vulnerability scanning
- **Generate Report**: Consolidated HTML reports with charts
- **Notification**: Slack notifications and GitHub issue creation

#### 2. Nightly Test Suite (`nightly-tests.yml`)
**Triggers:**
- Daily at 1 AM UTC
- Manual dispatch

**Features:**
- Comprehensive testing across all browsers and environments
- Extended test coverage
- Weekly artifact retention

#### 3. Release Pipeline (`release.yml`)
**Triggers:**
- New releases
- Version tags (`v*`)

**Features:**
- Release validation
- Automated release notes
- Artifact packaging

### Manual Workflow Execution

You can manually trigger workflows with custom parameters:

1. Go to **Actions** tab in GitHub
2. Select **CI/CD Pipeline**
3. Click **Run workflow**
4. Choose:
   - Environment: `staging` or `production`
   - Browser: `chromium`, `firefox`, `webkit`, or `all`

## 📊 Test Reporting

### Automated Reports
- **HTML Reports**: Interactive Playwright reports
- **JUnit XML**: For CI/CD integration
- **JSON Results**: For custom processing
- **Consolidated Report**: Multi-browser summary with charts

### GitHub Pages
Test reports are automatically deployed to GitHub Pages at:
`https://srikantharuban3.github.io/test1234/`

## 🔧 Configuration

### Environment Variables
Set these in GitHub repository secrets:

```bash
# Optional: Slack webhook for notifications
SLACK_WEBHOOK_URL=your_slack_webhook_url
```

### Playwright Configuration
Main configuration in `playwright.config.js`:
- Base URL: `https://parabank.parasoft.com`
- Multiple browser projects
- Test timeouts and retries
- Screenshot and video on failure

## 📁 Project Structure

```
test1234/
├── .github/
│   └── workflows/
│       ├── ci-cd.yml           # Main CI/CD pipeline
│       ├── nightly-tests.yml   # Nightly test execution
│       └── release.yml         # Release pipeline
├── tests/
│   └── customer-registration.spec.js  # Test specifications
├── test-results/               # Test execution results
├── test-reports/               # Generated reports
├── playwright.config.js       # Playwright configuration
├── package.json               # Node.js dependencies
├── .eslintrc.json            # Code quality rules
├── .gitignore                # Git ignore patterns
├── TestSuite.md              # Test case documentation
└── README.md                 # This file
```

## 🚨 Troubleshooting

### Common Issues

1. **Browser installation fails**
   ```bash
   npx playwright install --with-deps
   ```

2. **Tests timeout**
   - Check network connectivity
   - Increase timeout in `playwright.config.js`

3. **CI/CD pipeline fails**
   - Check GitHub Actions logs
   - Verify all required secrets are set

### Getting Help
- Check GitHub Issues
- Review Playwright documentation
- Examine CI/CD workflow logs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add tests for new functionality
4. Ensure all tests pass
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

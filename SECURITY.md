# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability in AfriDollar, please report it to us responsibly.

### How to Report

**Please do NOT report security vulnerabilities through public GitHub issues.**

Instead, please send an email to our security team at:

- **Email**: security@afridollar.com

### What to Include

Please include the following information in your report:

- A description of the vulnerability
- Steps to reproduce the vulnerability
- Potential impact of the vulnerability
- Any suggested mitigation or fix (if available)
- Your contact information for follow-up

### Response Timeline

We will acknowledge receipt of your vulnerability report within **48 hours** and provide a detailed response within **7 days** indicating the next steps in handling your report.

### Security Best Practices

While we work to resolve the vulnerability, please:

- **Do NOT** exploit the vulnerability in any way
- **Do NOT** disclose the vulnerability publicly until we have addressed it
- **Do NOT** use the vulnerability to access data that is not yours

## Security Features

AfriDollar implements several security measures:

### Encryption

- All API communications are encrypted using TLS 1.2+
- Sensitive data is encrypted at rest
- Wallet private keys are encrypted using industry-standard encryption

### Authentication & Authorization

- Multi-factor authentication support
- Role-based access control (RBAC)
- JWT-based authentication with short-lived tokens

### Compliance

- KYC/AML verification procedures
- FATF-aligned controls
- Transaction monitoring
- Asset authorization controls
- Clawback functionality where required

### Audit & Monitoring

- Comprehensive audit logging
- Real-time transaction monitoring
- Infrastructure monitoring
- Automated security scanning

## Security Guidelines for Contributors

When contributing to AfriDollar, please follow these security guidelines:

### Code Review

- All code changes must go through pull request review
- Security-sensitive changes require approval from at least two maintainers
- Never commit secrets, API keys, or sensitive data

### Dependencies

- Regularly update dependencies to address security vulnerabilities
- Run `npm audit` before committing changes
- Report any security issues in dependencies

### Testing

- Write security tests for authentication and authorization
- Test for common vulnerabilities (SQL injection, XSS, etc.)
- Use environment variables for configuration, never hardcode secrets

### Stellar Security

- Never expose private keys in code or logs
- Use Stellar's built-in security features (multisig, authorization flags)
- Validate all Stellar transactions before submission
- Implement proper error handling for network operations

## Security Resources

- [Stellar Security Best Practices](https://developers.stellar.org/docs/security/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Node.js Security Best Practices](https://github.com/lirantal/nodejs-security-best-practices)

## Security Updates

We will announce security updates through:

- GitHub Security Advisories
- Release notes
- Official communication channels

## License

By reporting a security vulnerability, you agree that your report will be used to improve the security of AfriDollar and that we may disclose the vulnerability after it has been fixed.

---

Thank you for helping keep AfriDollar secure! 🔒

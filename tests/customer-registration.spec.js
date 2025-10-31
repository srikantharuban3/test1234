const { test, expect } = require('@playwright/test');

test.describe('ParaBank Customer Registration', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to ParaBank homepage before each test
    await page.goto('/parabank/index.htm');
  });

  test('TC 001 - Verify that user can register a new customer', async ({ page }) => {
    // Generate unique username (10 characters)
    const timestamp = Date.now().toString();
    const username = `user${timestamp.slice(-6)}`;
    const password = 'TestPass123!';
    
    console.log(`Generated username: ${username}`);
    
    // Step 1: Click on Register link
    await page.click('a[href="register.htm"]');
    await expect(page).toHaveURL(/.*register\.htm/);
    
    // Step 2: Fill the registration form with unique data
    await page.fill('input[name="customer.firstName"]', 'Test');
    await page.fill('input[name="customer.lastName"]', 'User');
    await page.fill('input[name="customer.address.street"]', '123 Test Street');
    await page.fill('input[name="customer.address.city"]', 'Test City');
    await page.fill('input[name="customer.address.state"]', 'Test State');
    await page.fill('input[name="customer.address.zipCode"]', '12345');
    await page.fill('input[name="customer.phoneNumber"]', '555-123-4567');
    await page.fill('input[name="customer.ssn"]', '123-45-6789');
    
    // Fill username and password
    await page.fill('input[name="customer.username"]', username);
    await page.fill('input[name="customer.password"]', password);
    await page.fill('input[name="repeatedPassword"]', password);
    
    // Step 3: Submit the registration form
    await page.click('input[value="Register"]');
    
    // Step 4: Verify welcome message with the new username
    await expect(page.locator('h1.title')).toContainText('Welcome');
    await expect(page.locator('p')).toContainText(username);
    
    // Additional verification: Check if account was created successfully
    await expect(page.locator('.smallText')).toContainText('Your account was created successfully');
    
    console.log(`✅ Test passed: User ${username} registered successfully`);
  });

  test('TC 002 - Verify registration with invalid data shows error', async ({ page }) => {
    // Click on Register link
    await page.click('a[href="register.htm"]');
    
    // Try to register with empty required fields
    await page.click('input[value="Register"]');
    
    // Verify error messages appear
    const errors = page.locator('.error');
    await expect(errors.first()).toBeVisible();
    
    console.log('✅ Test passed: Validation errors displayed correctly');
  });

  test('TC 003 - Verify password mismatch shows error', async ({ page }) => {
    const username = `testuser${Date.now()}`;
    
    // Click on Register link
    await page.click('a[href="register.htm"]');
    
    // Fill form with mismatched passwords
    await page.fill('input[name="customer.firstName"]', 'Test');
    await page.fill('input[name="customer.lastName"]', 'User');
    await page.fill('input[name="customer.address.street"]', '123 Test St');
    await page.fill('input[name="customer.address.city"]', 'Test City');
    await page.fill('input[name="customer.address.state"]', 'Test State');
    await page.fill('input[name="customer.address.zipCode"]', '12345');
    await page.fill('input[name="customer.phoneNumber"]', '555-123-4567');
    await page.fill('input[name="customer.ssn"]', '123-45-6789');
    await page.fill('input[name="customer.username"]', username);
    await page.fill('input[name="customer.password"]', 'password1');
    await page.fill('input[name="repeatedPassword"]', 'password2');
    
    // Submit form
    await page.click('input[value="Register"]');
    
    // Verify error message for password mismatch
    await expect(page.locator('.error')).toContainText('Passwords did not match');
    
    console.log('✅ Test passed: Password mismatch error displayed correctly');
  });
});
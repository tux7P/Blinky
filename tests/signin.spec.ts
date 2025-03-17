import {test} from '@playwright/test';
import dotenv from 'dotenv';
import {SignInPage} from '../packages/ui/pages/SignInPage';

dotenv.config();

test.describe('Authentication @ui', () => {
  test('User can sign in with valid credentials', async ({page}) => {
    const username = process.env.USERNAME || '';
    const password = process.env.PASSWORD || '';

    const signInPage = new SignInPage(page);
    await signInPage.navigate();

    await signInPage.fillCredentials(username, password);
    await signInPage.clickSignIn();

    await signInPage.verifySignInSuccessful();
  });
});

import {test} from '@playwright/test';
import * as dotenv from 'dotenv';
import {SignInPage} from '../packages/ui/pages/SignInPage';
import {getRequiredEnvVar} from '../utils/envUtils';

dotenv.config();

test.describe('Authentication @ui', () => {
  test('User can sign in with valid credentials', async ({page}) => {
    const email = getRequiredEnvVar('ACCOUNT_EMAIL');
    const password = getRequiredEnvVar('ACCOUNT_PASSWORD');

    const signInPage = new SignInPage(page);
    await signInPage.navigate();

    await signInPage.fillCredentials(email, password);
    await signInPage.clickSignIn();

    await signInPage.verifySignInSuccessful();
  });
});

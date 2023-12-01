import { expect } from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'

/**
 * Testing for users that should not exist in the system.
 * @function badUsers testing nonexisting users.
 */
describe('Simple negative login for bad users', () => {
    it('loop for Sauce labs users.', async () => {
        await loginPage.badUsers()
    })
    
})

/**
 * Testing for users that should not exist in the system.
 * @function goodUsers testing existing users.
 */
describe('Simple positive login for sauce labs', () => {
    it('loop for Sauce labs goodUsers login test.', async () => {
        await loginPage.goodUsers()
    })
})

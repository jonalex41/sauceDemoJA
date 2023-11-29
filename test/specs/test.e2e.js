import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('MTech Loggin Page', () => {
    it('positive Mtech login test', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        
        await expect($('div.app_logo')).toExist()
        
        //await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!')
        // await expect($('#validation div ul li')).toBeExisting()
        // await expect($('#validation div ul li')).toHaveText(
        //          'The user name or password provided is incorrect.')
        // await expect($('#validation div ul li')).toHaveText()
        // await expect($('#sdjflsdj')).toBeExisting()
    })
})


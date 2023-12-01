import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for the login page.
 */
class LoginPage extends Page {

    badNames = ['nonExisting_user', 'locked_out_user']
    goodNames = ['error_user', 'performance_glitch_user', 
    'problem_user', 'visual_user', 'standard_user']
    /**
     * define selectors using getter methods
     */
    get setUsername () { return $('#user-name'); }
    get setPassword () { return $('#password'); }
    get clkSubmit () { return $('#login-button'); }
    get loginLogo () { return $('div.login_logo'); }
    get errorBox () { return $('div.error-message-container'); }
 
    /**
     * async function to fill the username and password then select the login button.
     */

    async login (username, password) {
        await this.setUsername.setValue(username)
        await this.setPassword.setValue(password)
        await browser.pause(300)
        await this.clkSubmit.click()
        await browser.pause(300)
    }
    /**
     * async. badUsers: tests an array of users that should not be able to login
     */
    async badUsers () {
        await this.open('')
        for (let i = 0; i < this.badNames.length; i++) {
            await expect(this.loginLogo).toExist()
            await this.login(this.badNames[i], 'bad_password')
            await expect(this.errorBox).toHaveTextContaining('Username and password do not match any user in this service')
            await this.login(this.badNames[i], 'secret_sauce')
            await expect(this.errorBox).toExist()
        }
    }
    /**
     * async. goodUsers: tests an array of users that should not be able to login
     */
    async goodUsers () {
        for (let i = 0; i < this.goodNames.length; i++) {
            await this.open('')
            await expect(this.loginLogo).toExist()
            await this.login(this.goodNames[i], 'bad_password')
            await expect(this.errorBox).toHaveTextContaining('Username and password do not match any user in this service')
            await this.login(this.goodNames[i], 'secret_sauce')
            await expect($('div.inventory_list')).toHaveChildren(6)
        }
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open (path) {
        return super.open('https://www.saucedemo.com/', path);
    }
}

export default new LoginPage();

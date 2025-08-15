const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const account = new Schema({
    account: { type: String, default: ''},
    pass: { type: String, default: ''},
});

account.pre('save', async function(next) {
    try {
        console.log('Tai khoan:::', this.account, this.pass, this.passAgain)
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(this.pass, salt);
        this.pass = hashPassword;
        next();
    } catch (error) {
        next.error;
    }
})
module.exports = mongoose.model('account', account);
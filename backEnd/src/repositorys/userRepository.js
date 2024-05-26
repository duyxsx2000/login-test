import User from '../models/userModel.js';

class UserRepository {
    async createUsre(newUser) {
        User.create(newUser)
    };

    async findUser(account) {
        console.log(account);
        return User.findOne({account: account});
    }

}

export default new UserRepository();

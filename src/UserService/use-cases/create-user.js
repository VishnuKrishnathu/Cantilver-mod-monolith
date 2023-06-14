const ApplicationError = require('../../shared/application-error');

module.exports = function makeCreateUser({ UserDB, makeUser}){

    return async function createUser({
        full_name,
        email,
        password,
        college,
        current_year,
        phone_number,
    }){

        const user = makeUser({
            full_name,
            email,
            password,
            college,
            current_year,
            phone_number,
        });

        let exists = await UserDB.findOne({email: user.getEmailId()});

        if(exists){
            throw new ApplicationError("User already exists", 400);
        };

        return await UserDB.insert({
            _id: user.getId(),
            full_name: user.getName(),
            email: user.getEmailId(),
            password: await user.getHashedPassword(),
            college: user.getCollegeName(),
            current_year: user.getCurrentYear(),
            phone_number: user.getPhoneNumber(),
            created_at: user.getCreatedAt(),
        });
    }
}
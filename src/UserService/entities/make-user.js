const ServerError = require("../../shared/application-error");

module.exports = function buildMakeUser({ Id, hashPassword }) {
    return function makeUser(user) {
        let default_user = {
            _id: Id.getId(),
            phone_number: undefined,
            college: undefined,
            current_year: undefined,
            skills: [],
            dream_companies: [],
            target_role: undefined,
            full_name: undefined,
            password: undefined,
            email: undefined,
            created_at: Date.now(),
        };
        let {
            _id,
            phone_number,
            college,
            current_year,
            skills,
            dream_companies,
            target_role,
            full_name,
            password,
            email,
            created_at
        } = {
            ...default_user,
            ...user,
        };

        if (!Id.validate(_id)) {
            throw new ServerError("Invalid primary key for the user", 400);
        }

        if (!full_name) {
            throw new ServerError("Full name should be a required field", 400);
        }

        if (full_name.trim().length < 2 || full_name.trim().length > 50) {
            throw new ServerError(
                "Full should atleast be 2 character long and less that 50 characters",
                400,
            );
        }

        if (!email) {
            throw new ServerError("Email is a required field", 400);
        }
        let email_regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if(!email_regex.test(email)) {
            throw new ServerError("Invalid email address", 400);
        }

        if (!password) {
            throw new ServerError("Password is a required field", 400);
        }

        if(password.length < 8) {
            throw new ServerError("Password should be atleast 8 characters long", 400);
        }

        if(phone_number && phone_number.length !== 10) {
            throw new ServerError("Invalid phone number", 400);
        }

        return Object.freeze({
            getId: () => _id,
            getName: () => full_name.trim(),
            getPhoneNumber: () => phone_number,
            getCollegeName: () => college,
            getCurrentYear: () => current_year,
            getSkills: () => skills,
            getDreamCompanies: () => dream_companies,
            getHashedPassword: async () => await hashPassword(password),
            getPassword: () => password,
            getTargetRole: () => target_role,
            getEmailId: () => email.toLowerCase(),
            getCreatedAt: () => created_at,
        });
    };
};

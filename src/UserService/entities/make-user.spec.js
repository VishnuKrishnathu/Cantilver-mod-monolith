const { expect } = require("@jest/globals");
const { it } = require("@jest/globals");

describe("User Entity Test", () => {
    const makeUser = require("./index");
    const Id = require("../../shared/Id");
    it("should throw an invalid Id error if the Id in invalid", () => {
        const user = {
            _id: "invalid_id",
            phone_number: undefined,
            college: undefined,
            current_year: undefined,
            skills: [],
            dream_companies: [],
            target_role: undefined,
            full_name: undefined,
            password: undefined,
        };

        expect(() => makeUser({ ...user, _id: "invalid_id" })).toThrowError(
            "Invalid primary key for the user",
        );

        expect(() => makeUser({ ...user, _id: undefined })).toThrowError(
            "Invalid primary key for the user",
        );

        expect(() => makeUser({ ...user, _id: Id.getId() })).toBeTruthy();
    });

    it("should throw an invalid full name error", () => {
        const user = {
            _id: Id.getId(),
            phone_number: undefined,
            college: undefined,
            current_year: undefined,
            skills: [],
            dream_companies: [],
            target_role: undefined,
            full_name: undefined,
            password: undefined,
        };

        expect(() => makeUser({ ...user, full_name: undefined })).toThrowError(
            "Full name should be a required field",
        );

        expect(() => makeUser({ ...user, full_name: "V" })).toThrowError(
            "Full should atleast be 2 character long and less that 50 characters",
        );
    });

    it("should throw an invalid email error if the email is invalid", () => {
        const user = {
            _id: Id.getId(),
            phone_number: undefined,
            college: undefined,
            current_year: undefined,
            skills: [],
            dream_companies: [],
            target_role: undefined,
            full_name: "Vishnu Krishnathu",
            password: "password",
        };

        expect(() => makeUser({ ...user, email: undefined })).toThrowError(
            "Email is a required field",
        );

        expect(() =>
            makeUser({ ...user, email: "invalid_email" }),
        ).toThrowError("Invalid email address");

        expect(() =>
            makeUser({ ...user, email: "invalid_email@invalid" }),
        ).toThrowError("Invalid email address");

        expect(() =>
            makeUser({ ...user, email: "invalid_email@invalid." }),
        ).toThrowError("Invalid email address");

        expect(() =>
            makeUser({ ...user, email: "Vishnu Krishnathu" }),
        ).toThrowError("Invalid email address");

        expect(
            makeUser({
                ...user,
                email: "SalesTeam@cantileverlabs.com",
            }).getEmailId(),
        ).toBe("salesteam@cantileverlabs.com");
    });

    it("should throw an invalid password error if the password is invalid", () => {
        const user = {
            _id: Id.getId(),
            phone_number: undefined,
            college: undefined,
            current_year: undefined,
            skills: [],
            dream_companies: [],
            target_role: undefined,
            full_name: "Vishnu Krishnathu",
            email: "testing@cantileverlabs.com",
        };

        expect(() => makeUser({ ...user, password: undefined })).toThrowError(
            "Password is a required field",
        );

        expect(() => makeUser({ ...user, password: "1234567" })).toThrowError(
            "Password should be atleast 8 characters long",
        );

        expect(
            makeUser({ ...user, password: "12345678" }).getHashedPassword() ===
                "12345678",
        ).toBe(false);
    });

    it("should throw an invalid phone number error if the phone number is invalid", () => {
        const user = {
            _id: Id.getId(),
            phone_number: undefined,
            college: undefined,
            current_year: undefined,
            skills: [],
            dream_companies: [],
            target_role: undefined,
            full_name: "Vishnu Krishnathu",
            email: "testing@cantileverlabs.com",
            password: "password",
        };

        expect(() =>
            makeUser({ ...user, phone_number: "12345678981" }),
        ).toThrowError("Invalid phone number");

        expect(() => makeUser({ ...user, phone_number: "123" })).toThrowError(
            "Invalid phone number",
        );

        expect(() =>
            makeUser({ ...user, phone_number: "123abc98" }),
        ).toThrowError("Invalid phone number");

        expect(
            makeUser({ ...user, phone_number: "8828789982" }).getPhoneNumber(),
        ).toBe("8828789982");

        expect(() =>
            makeUser({ ...user, phone_number: undefined }),
        ).toBeTruthy();
    });
});

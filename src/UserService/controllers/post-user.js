module.exports = function makePostUser({ createUser, handleError, sendEmail }) {
    return async function postUser(httpRequest) {
        const { ...userInfo } = httpRequest.body;

        try {
            const user = await createUser({ ...userInfo });

            sendEmail({
                email: userInfo.email,
                password: userInfo.password,
                full_name: userInfo.full_name,
            });

            return {
                statusCode: 201,
                body: {
                    user,
                },
            };
        } catch (e) {
            return handleError(e);
        }
    };
};

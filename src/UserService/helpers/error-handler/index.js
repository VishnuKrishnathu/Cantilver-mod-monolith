module.exports = function handleError(error) {
    console.log(error);
    return {
        statusCode: error.status || 500,
        body: {
            error: error.message,
        },
    };
}
module.exports = class ApplicationError extends Error {

    constructor(message, status = 422){
        super(message);
        this.name = "ApplicationError";
        this.status = status;
    }
};

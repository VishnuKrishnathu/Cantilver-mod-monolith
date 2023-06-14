module.exports = function makeExpressCallback(controller) {
    return (req, res) => {
        const httpRequest = {
            body: req.body,
            query: req.query,
            params: req.params,
            method: req.method,
            path: req.path,
            ip: req.ip,
            headers: {
                "Content-Type": req.get("Content-Type"),
                Referer: req.get("referer"),
                "User-Agent": req.get("User-Agent"),
            },
        };

        controller(httpRequest)
            .then(httpResponse => {
                res.status(httpResponse.statusCode).json(httpResponse.body);
            })
            .catch(e => {
                console.log(e);
                res.status(500).json({ error: "An unkown error occurred." });
            });
    };
};

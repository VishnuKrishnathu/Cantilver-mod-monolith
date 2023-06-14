module.exports = function makeUsersDB({User}){
    return Object.freeze({
        insert,
        findById,
        findOne,
    });

    async function insert({id, ...userInfo}){

        let user = new User({id, ...userInfo});

        user = await user.save();

        return user;
    }

    async function findById({id}, options = {populate: []}){
        const {populate} = options;
        const user = await User.findById(id);

        populate.forEach((field) => {
            user.populate(field);
        });

        return user;
    }

    async function findOne(query, options = {populate : []}){
        const {populate, sort} = options;

        const user = await User.findOne(query);
        if(sort){
            user.sort(sort);
        }
        populate.forEach((field) => {
            user.populate(field);
        });

        return user;
    }

}
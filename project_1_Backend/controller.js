const users = [
    {
        id:1,
        name:'Chamara',
    },
    {
        id:2,
        name:'Dilshan',
    },
];
const getUsers = (cb) =>{
    cb(users);
}

const getUsersById = (id, cb) => {
    const user = users.find (user => user.id ==id);
    cb(user);
};

exports.getUsers = getUsers;
exports.getUsersById = getUsersById;
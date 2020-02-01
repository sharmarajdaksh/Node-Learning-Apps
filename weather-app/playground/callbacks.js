let getUser = (id, callback) => {
    let user = {
        id: id,
        name: 'NiBBa'
    }
    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(31, (userObject) => {
    console.log(JSON.stringify(userObject, undefined, 2));
});
import ShortId from "shortid";


export const fletchAllUsers = () => {
    console.log('fletchAllUsers');
};

export const fletchUserForId = () => {
    console.log('fletchUserForId');
};

export const updateUser = () => {
    console.log('updateUser');
};
export const addUser = name => {
    const user = {
        id: ShortId.generate(),
        name,
    }
    console.log(user);
}
// export default {fletchAllUsers, fletchUserForId, updateUser }
export const x = 5;
export const y = "qew";
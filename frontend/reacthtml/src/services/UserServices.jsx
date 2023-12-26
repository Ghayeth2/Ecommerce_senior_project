import {request} from '../axios_helper';

class UserServices {

    getUsers() {
        return request('GET', '/app/user', {})
            .then(response => response.data)
            .catch(error => {
                console.error('Error fetching users:', error);
                throw error;
            });
    };

    saveUser(user) {
        return request('POST', '/app/user', user);
    }
}

export default new UserServices();
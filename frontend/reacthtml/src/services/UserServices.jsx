import {request} from '../axios_helper';

class UserServices {

    getUsers(){
        return request('GET', '/app/user', {})
            .then(response => response.data)
            .catch(error => {
                console.error('Error fetching users:', error);
                throw error;
            });
    };
}

export default new UserServices();
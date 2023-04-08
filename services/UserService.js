import $api from "../api/src";

export default class UserService {
    static async fetchUsers() {
        return $api.get('/users')
    }
}
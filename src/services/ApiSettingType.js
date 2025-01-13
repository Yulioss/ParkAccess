import ApiClient from './ApiClient';
const api = new ApiClient();
export default class ApiSettingType {

async getSettingType() {
const response = await api.get('SettingType');
return response;
}
    
}
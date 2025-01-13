import ApiClient from './ApiClient'; 
import { CreateSettingModel,DeleteSettingModel,EditSettingModel } from '../models/Settings';
const api = new ApiClient();
export default class ApiSetting {


async createSetting(createSetting = CreateSettingModel) {
const response = await api.post('Settings',createSetting);
return response;
}

async editSetting(editSetting = EditSettingModel) {
const response = await api.put('Settings',editSetting);
return response;
}

async getSettings() {
const response = await api.get('Settings');
return response;
}

async getSetting(id = Number) {
const response = await api.get('Settings/'+id); 
return response;
}

async deleteSetting(deleteSetting = DeleteSettingModel) {
const response = await api.delete('Settings', deleteSetting);
return response;
}
    
}
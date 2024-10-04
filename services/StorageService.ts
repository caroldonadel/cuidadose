import AsyncStorage from "@react-native-async-storage/async-storage";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";

export const StorageService = {
    addItem: async (listkey: string, data: object) => {
        try {
            const listString = await AsyncStorage.getItem(listkey);
            let arrayData = listString ? JSON.parse(listString) : [];
            arrayData.push(data);
            await asyncStorage.setItem(listkey, JSON.stringify(arrayData));
            return true;
        } catch (error) {
            console.log('addItemError', error);
            return false;
        }
    },
    getAll: async (listkey: string) => {
        const listString = await AsyncStorage.getItem(listkey);
        return listString ? JSON.parse(listString) : [];
    },
}
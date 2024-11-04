import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    DATA_VALID_TIME_IN_MINUTES: number = 120;

    saveDataInLocalStorage(key: string, data: Object) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    saveDataInLocalStorageWithTimestamp(key: string, data: Object) {
        const now = new Date().getTime();
        const dataWithTimestamp = {...data, timestamp: now};
        this.saveDataInLocalStorage(key, dataWithTimestamp);
    }

    removeDataFromLocalStorage(key: string) {
        localStorage.removeItem(key);
    }

    getDataFromLocalStorage(key: string, checkIfValid: boolean = false): string {
        const retrievedData = this.retrieveFromLocalStorage(key);
        if(checkIfValid) {
            const isDataValid = this.checkIfDataIsValid(retrievedData);
            if(!isDataValid) {
                // delete invalid data
                this.removeDataFromLocalStorage(key);
                return null;
            }
        }

        return retrievedData;
    }

    checkIfDataIsValid(data: string) {
        if(data) {
            const parsedData = JSON.parse(data);
            const now = new Date().getTime();
            const timeStampForData = parsedData.timestamp;

            // check time difference between time now and timestamp of data in minutes
            const timeDifferenceInMinutes = (now - timeStampForData) / (1000 * 60)

            return this.DATA_VALID_TIME_IN_MINUTES > timeDifferenceInMinutes;
        }
        return false;
    }

    retrieveFromLocalStorage(key: string): string {
        return localStorage.getItem(key);
    }
}

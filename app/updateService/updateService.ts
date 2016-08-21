import {Injectable} from 'angular2/core';

@Injectable()
export class UpdateService {

    private data: Array<Object>;
    sendData(item: Object){

        this.data = item;
    }
    getData(){

        return this.data;
    }

}
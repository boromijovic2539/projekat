import {Pipe} from 'angular2/core';

@Pipe({
    name: 'SearchPipeNaziv'
})

export class SearchPipeNaziv {


    transform (value, [queryString]) {
        if (value==null) {
            return null;
        }
        console.log('transform');
        return value.filter(item=>item.naziv.toLowerCase().indexOf(queryString.toLowerCase()) !== -1);
    }
}
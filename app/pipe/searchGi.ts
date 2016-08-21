import {Pipe} from 'angular2/core';

@Pipe({
    name: 'SearchPipeGi'
})

export class SearchPipeGi {


    transform (value, [queryString]) {
        if (value==null) {
            return null;
        }
        console.log('transform');
        return value.filter(item=>item.glikemijski_indeks.toLowerCase().indexOf(queryString.toLowerCase()) !== -1);
    }
}
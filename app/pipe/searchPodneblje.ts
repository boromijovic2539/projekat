import {Pipe} from 'angular2/core';

@Pipe({
    name: 'SearchPipePodneblje'
})

export class SearchPipePodneblje {


    transform (value, [queryString]) {
        if (value==null) {
            return null;
        }
        console.log('transform');
        return value.filter(item=>item.podneblje.toLowerCase().indexOf(queryString.toLowerCase()) !== -1);
    }
}
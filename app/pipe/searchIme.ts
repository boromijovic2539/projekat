import {Pipe} from 'angular2/core';

@Pipe({
  name: 'SearchPipeIme'
})

export class SearchPipeIme {

    transform (value, [queryString]) {
        if (value==null) {
            return null;
        }
        console.log('transform');
        return value.filter(item=>item.firstName.toLowerCase().indexOf(queryString.toLowerCase()) !== -1);
    }
}

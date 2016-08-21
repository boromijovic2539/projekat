import {Pipe} from 'angular2/core';

@Pipe({
  name: 'SearchPipeUsername'
})

export class SearchPipeUsername {
   
    transform (value, [queryString]) {
        if (value==null) {
            return null;
        }
        console.log('transform');
        return value.filter(item=>item.username.toLowerCase().indexOf(queryString.toLowerCase()) !== -1);
    }
}

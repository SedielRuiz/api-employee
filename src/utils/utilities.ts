import { Injectable } from '@nestjs/common';

@Injectable()
export class Utilities
{
    constructor(
    ) {}

    async pluck(array, key){
        return array.map(element => element[key])
    }

    generateUniqueRandomHash(){
        return (new Date()).valueOf().toString()
    }
}

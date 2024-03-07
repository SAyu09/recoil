import React from 'react'
import {selector} from 'recoil';
import {counter} from '../Atoms/counter';
 export const Computecounter = selector({
    key:'Computecounter',
    get:(({get})=>{
        let value = get(counter);
        return value*2
    })
})


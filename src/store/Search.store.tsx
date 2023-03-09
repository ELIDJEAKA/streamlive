import { useEffect, useState } from "react";
import { BehaviorSubject } from "rxjs";

const searchInput = ''
export const searchInput$ = new BehaviorSubject(searchInput)

export const GetSearchRes = ()=>{
    searchInput$.next(searchInput)
    return searchInput
}
export const SearchUpdate = ()=>{
    const [searchInput,setSearchValue] = useState<string|null>('')
    useEffect(()=>{
        searchInput$.subscribe((data)=>{
            setSearchValue(data)
        })  
        
    })
    return searchInput
}

export const SearchbyUrl = ()=>{
    
}
'use client'
import React, { Dispatch, SetStateAction, useState } from 'react'
import {Input} from '@/components/ui/input'
const SearchBar = ({setSearch}:{setSearch:  Dispatch<SetStateAction<string>>}) => {
  return (
    <Input name='search-bar'  onChange={(e) => setSearch(() => e.target.value)} className='max-w-80 max-h-8' placeholder='Search'/>
    )
}

export default SearchBar
import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Input, InputLeftElement } from '@chakra-ui/react'


const SearchBox = () => {
    return (
        <form className='container-fluid'>
            <Input variant='filled' placeholder='Serach here.... ' borderRadius={20} />


        </form>
    )
}

export default SearchBox
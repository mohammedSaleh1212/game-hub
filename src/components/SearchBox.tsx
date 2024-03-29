import 'bootstrap-icons/font/bootstrap-icons.css'
import { Input } from '@chakra-ui/react'
import { useRef } from 'react'

interface Props {
    onSearch : (searchValue:string) => void
}
const SearchBox = ({onSearch}:Props) => {
    const ref = useRef<HTMLInputElement>(null)



    return (
        <form className='container-fluid' onSubmit= {(event) =>{

            event.preventDefault()
            // onSearch(event.target.value)
            ref.current && onSearch(ref.current.value)
        } }>
                 
            <Input ref={ref} variant='filled' placeholder= 'search here....' borderRadius={20} />


        </form>
    )
}

export default SearchBox
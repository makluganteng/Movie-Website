import { Button, Input, useMediaQuery } from "@chakra-ui/react"
import { ReactHTML, useState } from "react"

export type Search = {
    handleOnChange: Function,
    search: Function
}

const Searchbar = ({handleOnChange, search}: Search) => {
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
    return(
        <>
        <div className="flex justify-center align-middle">
            <div className="mr-[5px]">
                {
                    isLargerThan600 ? <Input onChange={(event)=>handleOnChange(event)} placeholder="Movie Name" />:<Input onChange={(event)=>handleOnChange(event)} placeholder='Movie Name' size='sm' />
                }
            </div>
            <div>
                {
                    isLargerThan600 ?  <Button onClick={(event)=>search(event)} colorScheme="gray">Search</Button> : <Button onClick={(event)=>search(event)} colorScheme="gray" size={"sm"}>Search</Button> 
                }
            </div>
        </div>
        </>
    )
}

export default Searchbar
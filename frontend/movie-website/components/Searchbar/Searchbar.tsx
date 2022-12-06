import { Button, Input, useMediaQuery } from "@chakra-ui/react"

const Searchbar = () => {
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')
    return(
        <>
        <div className="flex justify-center align-middle">
            <div className="mr-[5px]">
                {
                    isLargerThan600 ? <Input placeholder="Movie Name" />:<Input placeholder='Movie Name' size='sm' />
                }
            </div>
            <div>
                {
                    isLargerThan600 ?  <Button colorScheme="gray">Search</Button> : <Button colorScheme="gray" size={"sm"}>Search</Button> 
                }
            </div>
        </div>
        </>
    )
}

export default Searchbar
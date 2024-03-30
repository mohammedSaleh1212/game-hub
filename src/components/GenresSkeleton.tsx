import { HStack, List, ListItem,  SkeletonCircle } from '@chakra-ui/react'


const GenresSkeleton = () => {
    return (
        <List>
            <ListItem>
                <HStack>
                    <SkeletonCircle size='10' />
                </HStack>

            </ListItem>
        </List>

    )
}

export default GenresSkeleton
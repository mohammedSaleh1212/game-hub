import { HStack, List, ListItem, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React from 'react'

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
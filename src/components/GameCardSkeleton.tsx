import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GameCardSkeleton = () => {
  return (

    <Card width='350px' borderRadius={'10px'} overflow={'hidden'} className='mx-auto'>
        <Skeleton height='200px' />
        <CardBody>
            <SkeletonText />
        </CardBody>
        

        
    </Card>
  )
}

export default GameCardSkeleton
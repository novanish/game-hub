import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export function GameCardSkeleton() {
  return (
    <Card maxW="303px" mx="auto" borderRadius={10}>
      <Skeleton h="200px" width="300px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export function GameCardSkeleton() {
  return (
    <Card>
      <Skeleton h="200px" w="300px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

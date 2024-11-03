// LINK
import Link from 'next/link';
// COMPONENTS
import { Card, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';
// TYPES
import { IQueryItem } from '@/types/firestore';
// import { FormatedTime } from '@/components/FormatedTime';
// import { Status } from '@/components/Status';
// import { QuickView } from '../QuickView';
// TYPES
// import { IQueryItem } from '@/types/db';

export const ItemCard = ({ item }: { item : IQueryItem | null }) => {

  if (!item) return null;

  return (
    <Card className="flex flex-col justify-center items-stretch">
      <CardHeader className="flex-1 flex-row justify-between items-center">
        {/* <Status status={item.status} />
        <FormatedTime time={item.createdAt} /> */}
        <h1>Test</h1>
      </CardHeader>
      <CardDescription className="flex-1 p-6">
        {/* {truncate(item.additionalInfo, 150)} */}
        {item.additionalInfo}
      </CardDescription>
      <CardFooter className="flex-1 flex-col justify-center items-stretch gap-2">
        <Link 
            className={(buttonVariants({ variant: 'secondary', size: 'lg' }))}
            href={`/dashboard/${item.id}`}
        >
            Edit
        </Link>
        {/* <QuickView item={item} /> */}
      </CardFooter>
    </Card>
  )
}
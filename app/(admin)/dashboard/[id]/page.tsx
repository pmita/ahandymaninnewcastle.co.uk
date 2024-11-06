// REACT
import { Suspense } from "react";
// COMPONENTS
import Item from "@/components/item/item";

interface DashboardItemPageProps {
  params: {
    id: string;
  };
}

export default async function DashboardItemPage({ params }: DashboardItemPageProps) {
  const { id } = params;

  return (
    <Suspense fallback={(<tr>Loading...</tr>)}>
      <Item id={id} />
    </Suspense>
  );
} 
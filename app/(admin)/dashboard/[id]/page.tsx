
interface DashboardItemPageProps {
  params: {
    id: string;
  };
}

export default async function DashboardItemPage({ params }: DashboardItemPageProps) {
  const { id } = params;
  
  console.log(id);
  return (
    <h1>
      Welcome to the dashboard item page for item. The unique id is {id} 
    </h1>
  );
} 
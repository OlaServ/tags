import { fetchTagsData } from "@/services/fetch-tags-data";
import { ConnectedTable } from "@/modules/connected-table/connected-table";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    pagesize?: string;
    sort: string;
    order: "asc" | "desc";
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const pageSize = Number(searchParams?.pagesize) || 5;
  const sort = searchParams?.sort || "name";
  const order = searchParams?.order || "asc";

  const data = await fetchTagsData({
    page: currentPage,
    pageSize,
    sort,
    order,
  });
  const { items } = data;
  const rows = items.map((item) => {
    return { name: item.name, count: item.count };
  });

  return (
   <ConnectedTable rows={rows}/>
 
  );
}

import { useRouter } from "next/router";

function ListingDetailPage() {
  const router = useRouter();
  console.log(router);
  return <h1>ListingDetailPage for {router.query.id}</h1>;
}

export default ListingDetailPage;
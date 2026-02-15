import { getDetailedViewData } from "@/app/actions/auctionActions";
import Heading from "@/app/components/Heading";
import AuctionForm from "../../AuctionForm";

export default async function Update({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await getDetailedViewData(id);
  return (
    <div className="ms-auto max-w-[75%] shadow-lg bg-white rounded-lg p-8">
      <Heading
        title="Update your auction"
        subtitle="Please update the details of your car (only these auction properties can be updated)"
      />
      <AuctionForm auction={data} />
    </div>
  );
}

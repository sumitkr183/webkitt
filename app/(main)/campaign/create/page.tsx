import { Metadata } from "next";
import CreateCampaign from "@/components/campaign/create";

export const metadata: Metadata = {
  title: "Create Campaign | Webkitt",
};

const CampaignCreatePage = () => {
  return (
    <div className="card card-body pd-sm-40 pd-md-30 pd-xl-y-35 pd-xl-x-40">
      <h6 className="tx-uppercase tx-semibold tx-color-01 mg-b-0">
        Create Campaign
      </h6>
      <hr />
      <CreateCampaign />
    </div>
  );
};

export default CampaignCreatePage;

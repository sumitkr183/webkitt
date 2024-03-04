import Back from "@/components/ui/back-button";

const CampaignLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Back />
      {children}
    </>
  );
};

export default CampaignLayout;

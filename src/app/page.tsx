import Dashboard from "@/components/Dashboard";
import Description from "@/components/Description";
import Details from "@/components/Details";
import MainWrapper from "@/components/MainWrapper";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import UploadArea from "@/components/UploadArea";
import UploadButton from "@/components/UploadButton";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <>
        <Description />
        <MainWrapper>
          <UploadArea />
          <Dashboard />
        </MainWrapper>
        <div className="flex md:flex-col sm:flex-col lg:flex-row">
          <Details />
        </div>
      </>
    </MaxWidthWrapper>
  );
}

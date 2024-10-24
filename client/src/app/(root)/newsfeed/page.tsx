import CommunityForm from "@/containers/Newsfeed/CommunityForm";
import MainContentPage from "./MainContentPage";

export default function Home() {
  return (
    <>
      <aside className="min-w-layout-side-pane max-w-layout-side-pane grow sticky top-0 z-10 pt-6 maxHeightAvoidNavBarResponsive md:max-h-maxHeightAvoidNavBar">
        <CommunityForm />
      </aside>
      <section className="min-w-layout-main-pane max-w-layout-main-pane flex-1 pt-6">
        <MainContentPage />
      </section>
      <aside className="min-w-layout-side-pane max-w-layout-side-pane grow sticky top-0 hidden xl:flex">
        hello
      </aside>
    </>
  );
}

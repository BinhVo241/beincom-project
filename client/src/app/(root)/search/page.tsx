import CommunityForm from "@/containers/Newsfeed/CommunityForm";
import MainContentPage from "../newsfeed/MainContentPage";
export default function Search() {
  return (
    <div className="flex items-start justify-center gap-x-6 px-5 xl:gap-x-12 xl:px-11 pt-0">
      <aside className="min-w-layout-side-pane max-w-layout-side-pane grow sticky top-0 z-10 pt-6 maxHeightAvoidNavBarResponsive md:max-h-maxHeightAvoidNavBar">
        <CommunityForm />
      </aside>
      <section className="min-w-layout-main-pane max-w-layout-main-pane flex-1 pt-6">
        <MainContentPage searchSide />
      </section>
      <aside className="min-w-layout-side-pane max-w-layout-side-pane grow sticky top-0 hidden xl:flex"></aside>
    </div>
  );
}

import dynamic from "next/dynamic";

const Article = dynamic(() => import("@/app/(root)/article/[postId]/Article"));

export default function ArticlePage() {
  return (
    <>
      <section className="min-w-layout-wide-pane max-w-layout-wide-pane grow">
        <Article />
      </section>
      <div
        className="z-10 min-w-layout-side-pane max-w-layout-side-pane grow pb-6"
        style={{ position: "sticky", top: 24 }}
      >
        <div
          data-testid="expansion_article_detail.container"
          className="flex w-full flex-col gap-4"
        >
          <div className="flex rounded-lg bg-white p-4">Table of contents</div>
          <div className="divide-y divide-neutral-5 rounded-lg bg-white p-4">
            <div className="grid gap-y-3 py-6 first:pt-0 last:pb-0">
              <span className="text-base font-semibold text-neutral-80">
                Topics
              </span>
              <span className="flex flex-wrap break-words">
                <div className="flex items-center gap-1">
                  <div className="cursor-pointer hover:underline disabled:cursor-not-allowed disabled:text-gray-20 disabled:no-underline text-sm text-neutral-60 hover:text-neutral-60 font-normal">
                    Others
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

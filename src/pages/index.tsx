import Head from "next/head";
import Link from "next/link";
import CreatePostWizard from "~/components/CreatePostWizard";
import TopNavBar from "~/components/Navbar";
import SideBar from "~/components/SideBar";
import SideProfile from "~/components/SideProfile";

import { api } from "~/utils/api";

export default function Home() {
  const { data, isLoading } = api.posts.getAll.useQuery();

  return (
    <div>
      <Head>
        <title>Chirp</title>
      </Head>
      <TopNavBar />

      <div className="flex">
        <SideProfile />
        {/* Main Content */}
        <div className="flex-grow p-4 md:w-1/2 md:flex-grow-0">
          <CreatePostWizard />
          {/* Tweets */}
          <div>
            {data?.map((post, index) => (
              <div key={index} className="mb-4 rounded border bg-white p-4">
                {post.content}
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <SideBar />
        </div>
      </div>
    </div>
  );
}

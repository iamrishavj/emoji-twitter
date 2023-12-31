import Head from "next/head";

import { api } from "~/utils/api";
import { Feed } from "~/components/Feed";
import { useUser } from "@clerk/nextjs";

import CreatePostWizard from "~/components/CreatePostWizard";
import TopNavBar from "~/components/Navbar";
import SideBar from "~/components/SideBar";
import SideProfile from "~/components/SideProfile";

export default function Home() {
  const { isSignedIn } = useUser();

  api.posts.getAll.useQuery();

  return (
    <div>
      <Head>
        <title>Chirp</title>
      </Head>
      <TopNavBar />

      <div className="flex">
        <div className="hidden w-1/4 p-4 md:block">
          <SideProfile />
        </div>

        {/* Main Content */}
        <div className="flex-grow p-4 md:w-1/2 md:flex-grow-0">
          {isSignedIn && <CreatePostWizard />}
          {/* Tweets */}
          <div>
            <Feed />
          </div>
        </div>
        <div className="hidden md:block">
          <SideBar />
        </div>
      </div>
    </div>
  );
}

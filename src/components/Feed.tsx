import { api } from "~/utils/api";
import PostView from "./PostView";
import { LoaderPage } from "./Loader";

export const Feed = () => {
  const { data, isLoading } = api.posts.getAll.useQuery();
  if (isLoading) {
    return <LoaderPage />;
  }
  return (
    <>
      {data?.map((fullPost, index) => (
        <PostView {...fullPost} key={fullPost.post.id} />
      ))}
    </>
  );
};

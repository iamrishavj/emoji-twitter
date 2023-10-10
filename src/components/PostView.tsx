import { RouterOutputs } from "~/utils/api";

type PostViewType = RouterOutputs["posts"]["getAll"][number];

const PostView = (props: PostViewType) => {
  const { post, author } = props;
  return (
    <div className="mb-4 rounded-lg border bg-white p-4">
      <div className="flex flex-row gap-2">
        <img
          alt={author.profilePicture}
          src={author.profilePicture}
          className="h-10 w-10 rounded-full"
        />
        <div className="flex flex-col text-left">
          <div className="text-sm font-thin text-slate-800">
            @{author.username}
          </div>
          <div>{post.content}</div>
        </div>
      </div>
    </div>
  );
};

export default PostView;

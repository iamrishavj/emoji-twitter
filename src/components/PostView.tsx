import { RouterOutputs } from "~/utils/api";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

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
          <div className="space-x-1 text-sm">
            <span className="font-bold text-slate-800">@{author.username}</span>
            <span className="">{dayjs().to(dayjs(post.createdAt))}</span>
          </div>
          <div>{post.content}</div>
        </div>
      </div>
    </div>
  );
};

export default PostView;

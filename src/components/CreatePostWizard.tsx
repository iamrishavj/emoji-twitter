import { useState } from "react";
import { Loader } from "./Loader";
import { api } from "~/utils/api";

const CreatePostWizard: React.FC = () => {
  const [post, setPost] = useState("");
  const ctx = api.useContext();
  const { mutate, isLoading } = api.posts.create.useMutation({
    onSuccess: () => {
      setPost("");
      void ctx.posts.getAll.invalidate();
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate({
      content: post,
    });
  };
  /* Input for new tweet */
  return (
    <form className="mb-4 flex flex-row gap-1" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What's happening?"
        value={post}
        onChange={(e) => setPost(e.target.value)}
        className="border-b-1 w-full rounded-xl border border-slate-400  p-2"
      />
      <button
        className="bg-primary h-fit w-16 rounded-3xl border border-b-2 border-slate-700 p-4 font-bold text-white hover:opacity-60 disabled:opacity-60"
        disabled={isLoading}
      >
        {isLoading ? <Loader size="" color="#FFFFFF" /> : "Post"}
      </button>
    </form>
  );
};

export default CreatePostWizard;

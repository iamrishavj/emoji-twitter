const CreatePostWizard: React.FC = () => {
  /* Input for new tweet */
  return (
    <form className="mb-4 flex flex-row gap-1">
      <input
        type="text"
        placeholder="What's happening?"
        className="border-b-1 w-full rounded-xl border border-slate-400  p-2"
      />
      <button
        className="bg-primary rounded-3xl border border-b-2 border-slate-700 p-4 font-bold text-white hover:opacity-60"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Post
      </button>
    </form>
  );
};

export default CreatePostWizard;

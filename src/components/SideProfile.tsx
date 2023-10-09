import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

const SideProfile: React.FC = () => {
  const { isSignedIn, user } = useUser();

  return (
    <div className="w-1/4 p-4">
      {isSignedIn && (
        <>
          <div className="mb-4">
            <img
              src={user.imageUrl}
              alt="Profile"
              className="h-16 w-16 rounded-full md:h-32 md:w-32"
            />
            <h2 className="text-md mt-2 font-semibold md:text-xl">
              {user.firstName} {user.lastName}
            </h2>
          </div>
          {/* <SignOutButton /> */}
        </>
      )}
      {/* {!isSignedIn && <SignInButton />} */}
    </div>
  );
};

export default SideProfile;

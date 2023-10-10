import { useUser } from "@clerk/nextjs";
import Image from "next/image";

const SideProfileSkeleton = () => {
  return (
    <div className="animate-pulse space-y-4 rounded-lg p-6 shadow-lg">
      <div className="mx-auto h-16 w-16 rounded-full bg-gray-300 md:h-32 md:w-32"></div>
      <div className="mx-auto mt-2 h-4 w-24 bg-gray-300 md:h-6 md:w-32"></div>
      <div className="mx-auto h-4 w-32 bg-gray-300 md:h-6 md:w-40"></div>
    </div>
  );
};

const SideProfile = () => {
  const { user, isSignedIn, isLoaded } = useUser();

  if (!isLoaded || !isSignedIn || !user) {
    return <SideProfileSkeleton />;
  }
  return (
    <div className="bg-secondary space-y-4 rounded-lg p-6 shadow-lg">
      <div className="mb-4 flex flex-col items-center">
        <div className="relative h-16 w-16 rounded-full object-cover shadow-md md:h-32 md:w-32">
          <Image
            src={user.imageUrl}
            alt="Profile"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <h2 className="mt-2 text-center text-lg font-semibold md:text-2xl">
          {`@${user.username}`}
        </h2>
        <div className="mt-2 text-center text-sm font-normal md:text-lg">
          {user.firstName} {user.lastName}
        </div>
      </div>
      {/* <SignOutButton /> */}
      {/* {!isSignedIn && <SignInButton />} */}
    </div>
  );
};

export default SideProfile;

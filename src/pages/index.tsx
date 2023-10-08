import { SignInButton, SignOutButton, useUser } from "@clerk/clerk-react";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const { data } = api.posts.getAll.useQuery();
  const user = useUser();

  return (
    <>
      {!user && <SignInButton />}
      {user && <SignOutButton />}
      {data?.map((post) => {
        return post.content;
      })}
    </>
  );
}

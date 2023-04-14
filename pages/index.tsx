import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Button from "../components/Button";

const Home: NextPage = () => (
  <div className="">
    <Head>
      <title>Medium - Where good ideas find you.</title>
      <link rel="icon" href="/favicon.jpg" />
    </Head>
    <div className="bg-medium-yellow">
      <Header />
    </div>
    <div className="bg-medium-yellow border-y border-black">
      <div className="flex justify-between items-center py-10 lg:py-0 max-w-7xl mx-auto">
        <div className="px-10 space-y-7">
          <h1 className="text-8xl max-w-xl font-serif">Stay Curious</h1>
          <h2 className="font-sans text-medium-grey font-semibold text-2xl max-w-lg">
            Discover stories, thinking, and expertise from writers on any topic.
          </h2>
          <Button desc="Start reading" />
        </div>

        <img
          className="hidden md:inline-flex h-32 lg:h-full"
          src="medium---where-good-ideas-find-you-.svg"
          alt="Medium Banner Art"
        />
      </div>
    </div>
    {/* POSTS */}
  </div>
);

export default Home;

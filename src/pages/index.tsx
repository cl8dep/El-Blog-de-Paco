import { getAllPosts } from "../lib/files";
import Post from "../types/Post";
import HeaderSection from "../components/HeaderSection";
import EmptySpace from "../components/EmptySpace";
import LatestPostsSection from "../sections/LatestPostsSection";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {

  return (
    <>
      <HeaderSection />

      <LatestPostsSection posts={allPosts}/>

      <EmptySpace/>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: { allPosts },
  };
};

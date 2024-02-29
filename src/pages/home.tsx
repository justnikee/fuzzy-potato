import Layout from "../layout/layout";
import Banner from "../components/banner";
import FeaturedCollections from "../components/Featured-collections";

const bannerImage =
  "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1369,c_limit/61409afd-bb00-4452-b5fb-b784b6a682a3/nike-just-do-it.jpg";

const Home = () => {
  return (
    <>
      <Layout>
        <Banner bannerImage={bannerImage} />
        <FeaturedCollections/>
      </Layout>
    </>
  );
};

export default Home;

import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Blog1 from "@/components/blog/Blog1";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";


import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserRequest } from "@/redux/blog/actions";


const Blog = () => {

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);


  useEffect(() => {
    dispatch(fetchUserRequest());
  }, [dispatch]);

  useEffect(() => {
    if (users) {
      console.log("after ==>", users[0]?.body)
    }
  }, [users]);




  return (
    <>
      <Head>
        <title>Blogs | KAISPE</title>
        <meta name="description" content="Blog Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header3" footer="footer3">
        
          <Blog1 />
          {/* <h1>{users?.title}</h1> */}
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default Blog;

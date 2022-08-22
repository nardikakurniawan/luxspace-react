import React from "react";
import { useParams } from "react-router-dom";

import useAsync from "helpers/hooks/useAsync";
import fetch from "helpers/fetch";

import Header from "parts/Header";
import SiteMap from "parts/SiteMap";
import Footer from "parts/Footer";
import Breadcrumb from "components/Breadcrumb";
import ProductDetails from "parts/Details/ProductDetails";
import Suggestion from "parts/Details/Suggestion";

export default function Details() {
  const { idp } = useParams();

  const { data, run, isLoading } = useAsync();

  React.useEffect(() => {
    run(fetch({ url: `/api/products/${idp}` }));
  }, [run]);

  // console.log(data);
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/91231", name: "Office Room" },
          { url: "/categories/91231/products/888", name: "Details" },
        ]}
      />
      <ProductDetails data={data} />
      <Suggestion data={data?.relatedProducts || {}} />

      <SiteMap />
      <Footer />
    </>
  );
}

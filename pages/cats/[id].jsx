import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function CatDetails() {
  const [catData, setCatData] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  const fetchData = async () => {
    const res = await fetch(`/api/cats/${id}`);
    const data = await res.json();
    setCatData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {catData && (
        <div>
          <Head>
            <title>Hi, {catData.name}</title>
            <meta name="description" content={catData.description} />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <h2>{catData.name}</h2>
          <p>{catData.email}</p>
          <p>{catData.phone}</p>
          <Image
            src={catData.image.url}
            alt={catData.image.alt}
            width={200}
            height={200}
          />
          <p>{catData.description}</p>
          <button type="button" onClick={() => router.back()}>
            Click here to go back
          </button>
        </div>
      )}
    </div>
  );
}

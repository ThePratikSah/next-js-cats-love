import Head from "next/head";
import React, { useEffect, useState } from "react";
import Cat from "../../Components/Cat/Cat";

export default function Cats() {
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    const res = await fetch("/api/cats");
    const data = await res.json();
    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div>
      <Head>
        <title>Welcome to Cats Ariena</title>
        <meta name="description" content="Click any cat for more details" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {cats && cats.map((cat) => <Cat key={cat.id} {...cat} />)}
    </div>
  );
}

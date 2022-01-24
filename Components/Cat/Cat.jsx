import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
export default function Cat({ id, image, name, email, phone }) {
  const router = useRouter();
  return (
    <div key={id} onClick={() => router.push(`/cats/${id}`)}>
      <Image src={image.url} alt={image.alt} width={200} height={200} />
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
}

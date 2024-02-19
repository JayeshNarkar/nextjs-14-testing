import NotFound from "@/app/not-found";

export default function Docs({ params }: { params: { slug: String[] } }) {
  if (params.slug.length == 0) {
    return NotFound();
  } else if (params.slug.length == 2) {
    return (
      <>
        <h1>
          {params.slug[0]} in {params.slug[1]}
        </h1>
      </>
    );
  } else {
    return NotFound();
  }
}

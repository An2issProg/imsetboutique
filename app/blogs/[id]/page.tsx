interface BlogsProps {
  params: { id: string };
}

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const Blogs = await res.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return Blogs.map((Blogs: any) => ({ id: Blogs.id.toString() }));
}

export default async function Blogs({ params }: BlogsProps) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const Blogs = await res.json();

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">{Blogs.title}</h1>
      <p className="text-lg">{Blogs.body}</p>
    </main>
  );
}


import Link from 'next/link';
 
interface Blogs {
  id: number;
  title: string;
}
 
async function getBlogs(): Promise<Blogs[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}
 
export default async function Blogs() {
  const blogs = await getBlogs();
 
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Liste des Blogs</h1>
      <ul className="mt-5">
        {blogs.map(blog => (
          <li key={blog.id} className="mb-2">
            <Link href={`/blogs/${blog.id}`} className="text-blue-500">
              {blog.title}
            </Link> 
          </li>
        ))}
      </ul>
    </main>
  );
}
 
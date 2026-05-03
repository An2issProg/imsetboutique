interface ContactProps {
  params: { id: string };
}

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const contacts = await res.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return contacts.map((contact: any) => ({ id: contact.id.toString() }));
}

export default async function Contact({ params }: ContactProps) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const contact = await res.json();

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">{contact.name}</h1>
      <p className="text-lg">{contact.email}</p>
      <p className="text-lg">{contact.phone}</p>
      <p className="text-lg">{contact.website}</p>
      <h2 className="mt-5 text-xl font-semibold">Address</h2>
      <p>{contact.address.street}, {contact.address.city}</p>
    </main>
  );
}

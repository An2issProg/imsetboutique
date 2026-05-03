import Link from 'next/link';
 
interface Contacts {
  id : number;
  name: string;
  email: string;
}
 
async function getContacts(): Promise<Contacts[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}
 
export default async function Conatcts() {
  const contacts = await getContacts();
 
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Liste des Contacts</h1>
      <ul className="mt-5">
        {contacts.map(contact => (
          <li key={contact.id} className="mb-2">
            <Link href={`/contacts/${contact.id}`} className="text-blue-500">
              {contact.email}
            </Link> 
          </li>
        ))}
      </ul>
    </main>
  );
}
 
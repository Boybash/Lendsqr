export default function UserDetails({ params }: { params: { id: string } }) {
  const userId = params.id;

  return (
    <div className="absolute top-85 right-5 w-[80%] p-6 bg-white rounded-md font-montserrat text-[#213F7D]">
      <h1>User Details Page</h1>
    </div>
  );
}

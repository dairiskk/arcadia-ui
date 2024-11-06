// components/ContactForm.js
export default function ContactForm() {
  return (
    <>
      <div className="container mx-auto p-8 max-w-md  rounded-lg">
        <form action="" className="space-y-6 ">
          <div>
            <p className="text-cyan-50">Email</p>
            <input type="text" className="w-full border border-gray-500 p-2 rounded-lg" />
          </div>
          <div>
            <p className="text-cyan-50">Password</p>
            <input type="password" className="w-full border border-gray-500 p-2 rounded-lg" />
          </div>
          <button className="bg-green-500 w-full p-2 rounded-lg">Submit</button>
          <button className="bg-indigo-500 w-full p-2 rounded-lg">Register</button>
        </form>
      </div>
    </>

  );
}


function AdminLogin() {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    // Add real authentication logic here
    alert(`Admin login:\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full p-2 border rounded outline-none text-sm"
              placeholder="admin@email.com"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block font-medium mb-1">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full p-2 border rounded outline-none text-sm"
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded font-medium hover:bg-green-800"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;

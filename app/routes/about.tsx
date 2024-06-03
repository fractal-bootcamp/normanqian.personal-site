export default function About() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="Norman-Qian-220618-Raw-004.jpeg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">About Page</h1>
          <p className="py-6">Placeholder Text</p>
          <a href="/" rel="noreferrer">
            <button className="btn btn-primary">Home</button>
          </a>
        </div>
      </div>
    </div>
  );
}

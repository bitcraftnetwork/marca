import Button from './../components/Button';


function Home() {
  return (
    <>
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-4xl font-black text-heading">
        GROW & SELL ON SOCIAL MEDIA
      </h1>
      <p className="text-4xl font-black text-heading text-center leading-[1.3em]">
        AS A BUSY BUSINESS OWNER.
      </p>
      <p className="text-lg">
        <span className="font-bold">Done for you</span> monthly social media marketing services.
      </p>
    </div>
    <div className="btn-container">
        <Button variant='solid'>Get Started</Button>
    </div>
    </>
  );
}

export default Home;

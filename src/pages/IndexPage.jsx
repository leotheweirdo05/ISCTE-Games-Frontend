import { Helmet } from 'react-helmet';

export default function IndexPage() {
  return (
    <>
      <Helmet>
        <title>ISCTE</title>
      </Helmet>
      <div className="container text-center bg-white p-3">
        <h2>Welcome!</h2>
      </div>
    </>
  );
}

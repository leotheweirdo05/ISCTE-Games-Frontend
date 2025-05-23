// src/pages/IndexPage.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function IndexPage() {
  return (
    <>
    <Helmet>
        <title>Game Select</title>
      </Helmet>
      <main>
        <div className="p-3 mb-2 bg-danger">
          <section>
            <div className="container text-center">
              <div className="row">
                <div className="col">Column</div>
                <div className="col"></div>
                <div className="col">Column</div>
              </div>
            </div>
          </section>
        </div>

        <section>
          <div className="container text-center bg-white p-3">
            <div className="p-2">
              <div className="row g-2">
                <div className="col">
                  <Link to="/play/2048" className="text-decoration-none">
                    <div className="p-4 bg-success text-white rounded">2048</div>
                  </Link>
                </div>
                <div className="col">
                  <div className="p-4 bg-success text-white rounded">gaem tu</div>
                </div>
              </div>
            </div>

            <div className="p-2 mt-2">
              <div className="row g-2">
                <div className="col">
                  <div className="p-4 bg-success text-white rounded">gaem tree</div>
                </div>
                <div className="col">
                  <div className="p-4 bg-success text-white rounded">gaem for</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

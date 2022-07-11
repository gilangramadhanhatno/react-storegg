import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import TopUpForm from "./TopUpForm";
import TopUpItem from "./TopUpItem";

export default function DetailContent() {
  let { id } = useParams();
  const [game, setGame] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getGame = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://bwamern-storegg-backend.herokuapp.com/api/v1/players/detail-page/${id}`);
        setGame(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getGame();
  }, [id]);

  return (
    <section className="detail pt-lg-60 pb-50">
      <div className="container-xxl container-fluid">
        <div className="detail-header pb-50">
          <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">Top Up</h2>
          <p className="text-lg color-palette-1 mb-0">Perkuat akun dan jadilah pemenang</p>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
            <TopUpItem data={game} isLoading={loading} type="mobile" />
          </div>
          <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
            <TopUpItem data={game} isLoading={loading} type="desktop" />
            <hr />
            <TopUpForm data={game} />
          </div>
        </div>
      </div>
    </section>
  );
}

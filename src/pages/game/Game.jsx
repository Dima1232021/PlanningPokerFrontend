import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

export default function Game() {
  const params = useParams();
  const history = useHistory();
  const isAuth = useSelector((state) => state.auth.isAuth);

  localStorage.setItem("url", `/game/${params.game}`);

  useEffect(() => {
    !isAuth && history.push("/authenticet");
  }, []);

  return (
    <div>
      <h1>Game page</h1>
    </div>
  );
}

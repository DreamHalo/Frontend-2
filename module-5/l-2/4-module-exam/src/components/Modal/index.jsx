import React, { useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import flowersApi from "../../service/Flowers";

import "./style.scss";
const index = (id) => {
  const [aloneflower, setAloneFlower] = useState([]);

  useEffect(() => {
    flowersApi
      .getSingleFlower(id)
      .then((res) => setAloneFlower(res.data))
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

};

export default index;

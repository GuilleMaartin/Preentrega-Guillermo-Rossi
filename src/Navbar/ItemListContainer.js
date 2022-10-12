import React, { Component } from "react";
import Apiautos from "../Json/autos";


const ItemListContainer = ({name, metric}) => {
    return(
      <div className="card-json">
        <div>
            <h1>{name}</h1>
            <h2>{metric}</h2>
        </div>
      </div>
    )
  }

export default ItemListContainer;
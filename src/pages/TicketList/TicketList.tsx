import React from 'react';
import "./TicketList.css"
import { useState, useEffect } from "react";
import { fetchData, addData } from "d:/my-project/src/services/api";
import { FiFilter } from "react-icons/fi";
import { GoPrimitiveDot } from "react-icons/go";
import Button from 'd:/my-project/src/components/Button';
import Sidebar from 'd:/my-project/src/components/Sidebar';

  
function TicketList() {
  return (
    <div className="App" style={{display:"flex", minHeight:"100vh", backgroundColor: "#F9F6F4"}}>
      <Sidebar/>
    </div>
  )
}

export default TicketList;
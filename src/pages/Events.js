import React, { useState } from "react"
import { Chrono } from "react-chrono";
import styled from 'styled-components'
import Navbar from "../components/Events/navbar";
import Sidebar from "../components/Events/slidebar";
import Image from '../images/svg-4.svg';

const Events = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const items = [{
    title: "May 1940",
    cardTitle: "Dunkirk",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..During World War II, soldiers from the British Empire, Belgium and France try to evacuate from the town of Dunkirk during a arduous battle with German forces.",
    media: {
      type: "IMAGE",
      source: {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Attack_on_Pearl_Harbor_Japanese_planes_view.jpg/1200px-Attack_on_Pearl_Harbor_Japanese_planes_view.jpg"
      }
    }
  },
  {
    title: "May 1940",
    cardTitle: "Dunkirk",
    cardSubtitle:
      "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
    cardDetailedText: ["paragraph1", "paragraph2"],
  },
  {
    title: "7 December 1941",
    cardTitle: "Pearl Harbor",
    media: {
      source: {
        url: "https://www.youtube.com/embed/f6cz9gtMTeI",
        type: "mp4"
      },
      type: "VIDEO",
      name: "Pearl Harbor"
    }
  },
  {
    title: "May 1940",
    cardTitle: "Dunkirk",
    cardSubtitle:
      "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
    cardDetailedText: ["paragraph1", "paragraph2"],
  }
  ];

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <EventHero>
     
          <EventHeroH1>
            Check Our Events Done
        </EventHeroH1>
      
          <EventHeroImg src={Image} alt='event' />
       

      </EventHero>

      <EventDiv>
        <Chrono
          items={items}
          slideShow
          mode="VERTICAL_ALTERNATING"
          theme={{ primary: "#ec3750", secondary: "black" }}
        />
      </EventDiv>
    </>
  )
}

const EventDiv = styled.div`
    background: #e0e6ed;
    width: 100%;
    height: 100%;
    @media screen and (min-width: 968px) {
        padding-left: 20%;
        padding-right: 20%;
    }
`;

const EventHero = styled.div`
  min-height: 80vh;
  width: 100%;
  padding-top: 50px;
  justify-content: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media screen and (max-width: 968px) {
    flex-direction: column-reverse;
    }
`;

const EventHeroH1 = styled.h1`
    max-width: 30%;
    text-align: left;
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    border-radius: 8px;
    padding-left: 8px;
    padding-right: 8px;
    margin-left: -8px;
    margin-right: -8px;
    white-space: nowrap;
    color: #5d114c;
    background-color: rgb(255, 212, 64);
`;

const EventHeroImg = styled.img`
    min-width: 400px;
    max-width: 700px;
`;

export default Events

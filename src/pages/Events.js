import React from "react"
import { Chrono } from "react-chrono";
import styled from 'styled-components'


const Events = () => {
  const items = [{
    title: "May 1940",
    cardTitle: "Dunkirk",
    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
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
  }
 ];

  return (
    <EventDiv>
    <Chrono
      items={items}
      slideShow
      mode="VERTICAL_ALTERNATING"
      theme={{primary: "#01bf71", secondary: "black"}} 
      />
  </EventDiv>
  )
}

const EventDiv = styled.div`
    width: 100%;
    height: 100%;
    @media screen and (min-width: 968px) {
        padding-left: 20%;
        padding-right: 20%;
    }
`;

export default Events

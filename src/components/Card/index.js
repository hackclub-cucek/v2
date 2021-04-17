import {
    CardContainer,
    CardDiv,
    CardH1,
    CardH5,
    CardInput,
    CardH2,
    Cardul,
    Cardli,
    Cardstrong,
    
} from './CardElements';
import React, { useState } from "react"
import CloudData from "../../Data/google-data.json"
import ProgressBar from "../ProgressBar/progressBar"
import { Icon } from "@iconify/react"
import googleCloud from "@iconify-icons/mdi/google-cloud"

function findPercentage(nQ, nS) {
    var m0 = 0,
        m1 = 0,
        m2 = 0,
        m3 = 0
    if (nQ <= 8) {
        m0 = nQ
    } else if (nQ > 8 && nQ <= 16) {
        m0 = 8
        m1 = nQ - 8
    } else if (nQ > 16 && nQ <= 24) {
        m0 = 8
        m1 = 8
        m2 = nQ - 16
    } else {
        m0 = 8
        m1 = 8
        m2 = 8
        m3 = nQ - 24
    }

    var n0 = 0,
        n1 = 0,
        n2 = 0,
        n3 = 0

    if (nS <= 4) {
        n0 = nS
    } else if (nS > 4 && nS <= 8) {
        n0 = 4
        n1 = nS - 4
    } else if (nS > 8 && nS <= 12) {
        n0 = 4
        n1 = 4
        n2 = nS - 8
    } else {
        n0 = 4
        n1 = 4
        n2 = 4
        n3 = nS - 12
    }
    var mile_1 = m0 * 6.25
    var mile_2 = m1 * 6.25
    var mile_3 = m2 * 6.25
    var mile_4 = m3 * 8.33

    var finalMile_1 = Math.round(mile_1 + n0 * 12.5)
    var finalMile_2 = Math.round(mile_2 + n1 * 12.5)
    var finalMile_3 = Math.round(mile_3 + n2 * 12.5)
    var finalMile_4 = Math.round(mile_4 + n3 * 16.7)

    var results = []
    results.push(finalMile_1)
    results.push(finalMile_2)
    results.push(finalMile_3)
    results.push(finalMile_4)
    return results
}

var finished = []

function Card() {
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <CardContainer
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: 10,
            }}
            className="Card"
        >
            <CardH1>
                <Icon size="10x" icon={googleCloud} />{" "}
            </CardH1>
            <CardH1>
                <b>GoogleCloudReady Program - Leader Board</b>
            </CardH1>

            <CardH5>
                Scores are not updated live. They're typically updated once daily.
                Scores were last updated at roughly 10:00 AM IST on April 16th.
      </CardH5>
            <br />
            <CardInput
                type="text"
                placeholder="Search"
                onChange={event => {
                    setSearchTerm(event.target.value)
                }}
            />

            {CloudData.filter(CloudDetail => {
                if (searchTerm == "") {
                    return CloudDetail
                } else if (
                    CloudDetail.Student_Name.toLocaleLowerCase().includes(
                        searchTerm.toLocaleLowerCase()
                    )
                ) {
                    return CloudDetail
                }
            }).map((CloudDetail, index) => {
                finished = findPercentage(
                    CloudDetail.Quests_Completed,
                    CloudDetail.Skill_Badges_Completed
                )
                return (
                    <CardDiv index={index}>
                        <div className="user-info">
                            <CardH2>
                                <a
                                    href={`${CloudDetail.Qwiklabs_Profile_URL}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <b>{CloudDetail.Student_Name}</b>
                                </a>
                            </CardH2>
                            <CardH5>Rank : {CloudDetail.Rank}</CardH5>
                            <Cardul>
                                <Cardli>
                                    {CloudDetail.Quests_Completed}
                                    <Cardstrong>Quests Completed</Cardstrong>
                                </Cardli>
                                <Cardli>
                                    {CloudDetail.Skill_Badges_Completed}
                                    <Cardstrong>Skill Badges Completed</Cardstrong>
                                </Cardli>
                            </Cardul>
                            <CardH5>Milestone #1- Complete any 8 quests & 4 skill badges</CardH5>
                            <ProgressBar completed={finished[0]} bigcolor="#4285f4" />
                            <CardH5>Milestone #2- Complete any 16 quests & 8 skill badges</CardH5>
                            <ProgressBar completed={finished[1]} bigcolor="#fbbc05" />
                            <CardH5>Milestone #3- Complete any 24 quests & 12 skill badges</CardH5>
                            <ProgressBar completed={finished[2]} bigcolor="#34a853" />
                            <CardH5>Milestone #4- Complete any 30 quests & 15 skill badges</CardH5>
                            <ProgressBar completed={finished[3]} bigcolor="#ea4335" />
                        </div>
                    </CardDiv>
                )
            })}
        </CardContainer>
    )
}

export default Card

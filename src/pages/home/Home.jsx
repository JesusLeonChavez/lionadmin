import React from 'react'

//Components
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo"
import Chart from '../../components/chart/Chart'

//Styles
import "./home.css"

//Data
import {userData} from "../../dummyData"

export default function Home() {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        </div>
    )
}

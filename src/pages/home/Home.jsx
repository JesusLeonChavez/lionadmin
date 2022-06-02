import React from 'react'

//Components
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo"
import Chart from '../../components/chart/Chart'
import WidgetSm from '../../components/widgetsm/WidgetSm'
import WidgetLg from '../../components/widgetlg/WidgetLg'

//Styles
import "./home.css"

//Data
import {userData} from "../../dummyData"

export default function Home() {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

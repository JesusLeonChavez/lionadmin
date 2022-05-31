import React from 'react'

//Styles
import "./featuredinfo.css"

//Libraries
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$10,34</span>
                    <span className="featuredMoneyRate">
                        -12.3
                        <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <div className="featuredSub">Compared to las month</div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$7,21</span>
                    <span className="featuredMoneyRate">
                        -2.5
                        <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <div className="featuredSub">Compared to las month</div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$21,8</span>
                    <span className="featuredMoneyRate">
                        +1.7
                        <ArrowUpward className="featuredIcon"/>
                    </span>
                </div>
                <div className="featuredSub">Compared to las month</div>
            </div>
        </div>
    )
}

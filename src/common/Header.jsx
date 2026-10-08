import React from 'react'
import {Fragment} from 'react'
import './Header.css'

    let menu =[
        {
            id:1,
            name:"About",
            link:"#About"
        },
        {
            id:2,
            name:"What I Do",
            link:"#Dowhat"
        },
        {
            id:3,
            name:"Tech-Stack",
            link:"#Tech-Stack"
        },
        {
            id:4,
            name:"Projects",
            link:"#Projects"
        },
        {
            id:5,
            name:"Experience",
            link:"#Experience"
        },
        {
            id:6,
            name:"Deployment",
            link:"#Deployment"
        },
        {
            id:7,
            name:"Education",
            link:"#Education"
        },
        {
            id:8,
            name:"Contact",
            link:"#Contact"
        }
    ]

export const Header = () => {
  return (
    <Fragment>
      <header>
        <div className="log">
            <img src="assets/wallpaper.jpg" alt="img" />
            <div className="logo" style={{ marginTop: '15px' }}>
                <span style={{ color: 'var(--primary-accent)' }}>D</span>ONTHIREDDY
                <span style={{ color: 'var(--primary-accent)' }}>B</span>HARGAVI
            </div>
            <div className="mobileview">
                <i className="bi bi-menu-button-wide"></i>
            </div>
        </div>
        <div className="menus">
            {menu.map((menus)=>{
                return (
                    <ul key={menus.id}>
                        <li><a href={menus.link}>{menus.name}</a></li>
                    </ul>
                )
            })}


            <div className="resume">
                <a href="Donthireddy Bhargavi Resume.pdf">
                    <button><i className="bi bi-download"></i> Resume</button>
                </a>
            </div>
        </div>

    </header>
    </Fragment>
  )
}

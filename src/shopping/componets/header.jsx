
import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
        <div className="leftHeader">
            <div className="tittle">
                <h2 className='logoName'>Shopping Mall</h2>
            </div>
        </div>
        <div className="centerHeader">
            <ul>
                <li>Woman</li>
                <li>Man</li>
                <li>Children</li>
                <li>Beauty</li>

            </ul>
        </div>
        <div className="search">
            <input type='text' placeholder='Search...'/>
        </div>
        <div className="rightHeader">
            <div className="signin">SignIn / signUp</div>
            <div className="card">Card</div>
        </div>

    </div>
  )
}

export default Header
import React from 'react'

function Header() {
  return (
    <header className='header'>
        <img src={require(`../img/bird_white.png`)} alt='logo' className='header__logo'/>
        <h4><span className='header__text'>my travel journal.</span></h4>
    </header>
  )
}

export default Header
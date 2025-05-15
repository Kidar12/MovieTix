import React from 'react';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <a href="/" className='site-title'>
            MovieTix
            </a>
            <ul>
                {/* <li><a href="/Now Playing">Now Playing</a></li>
                <li><a href="/Upcoming">Upcoming</a></li>
                <li><a href="/Cinemas">Cinemas</a></li> */}
                <li>
                    <form action="">    
                        <input type="text" placeholder='🔍 Search' name="" id="" />
                    </form>
                </li>
            </ul>
            
        </nav>
    );
};

export default Navbar;
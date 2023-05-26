// import React, {useState} from 'react'
// import {HiOutlineMenuAlt4} from 'react-icons/hi'
// import {FaRegTimesCircle} from 'react-icons/fa'
// import './Navbar.css'

// const Navbar = () => {
//   const[click, setClick]= useState(false)
//   const handleClick = () => setClick(!click)

//   return (
//     <div className='Navbar'>
//         <div className='container'>
//             <h1><span>Aklat</span></h1>
//             <ul className={click ? 'nav-menu active' :'nav-menu' }>
//                 <li><a href='#'>Login</a></li>
//                 <li><a href='#'>Sign Up</a></li>           
//             </ul>
//             <div className='hamburger' onClick={handleClick }>
//               {click ? (<FaRegTimesCircle className='icon'/>): (<HiOutlineMenuAlt4 className='icon'/>) }
//             </div> 
//         </div>
//     </div>
//   )
// }
// export default Navbar
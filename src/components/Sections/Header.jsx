import React from 'react'
import "../../style/StyleComponents/Header.css"
function Header() {
  return (
<body>
    <header class="round-bottom">
		<a href="#default" class="logo">CompanyLogo</a>
		<div class="header-right">
			<a class="active" href="#home">Home</a>
			<a href="#contact">Contact</a>
			<a href="#about">About</a>
		</div>
	</header>
    </body>
  )
}

export default Header
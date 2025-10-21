import React from 'react'

const Footer = () => {
  return (
		<footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 bg-[#271f17] text-white text-center">
			<aside>
				<p>
					Copyright &copy; {new Date().getFullYear()} - All right reserved
					by Styora Store
				</p>
			</aside>
		</footer>
  );
}

export default Footer
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='w-full bg-base-200 border-t border-base-300 mt-auto'>
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          {/* Left side - Copyright */}
          <div className='text-center md:text-left'>
            <p className='text-sm md:text-base'>
              Built with ❤️ by <span className='font-semibold text-primary'>Vrajkumar Patel</span>
            </p>
            <p className='text-xs text-base-content/70 mt-1'>
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          {/* Right side - Social Links */}
          <div className='flex gap-4 items-center'>
            <a
              href="https://github.com/vrajkmrpatel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-primary transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sdevrajkumarpatel/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/ilovecompiler"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-primary transition-colors duration-300"
              aria-label="Twitter Profile"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
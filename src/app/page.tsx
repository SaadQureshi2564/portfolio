'use client';

import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import React, { useState } from 'react';

export default function Home() {

  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark', !isDark);
  };

  return (
    <div className=" portfolio-container ">
      
      <div
        className="cube-container">
          <div className="cube-loader">
            <div className="cube-top"></div>
            <div className="cube-wrapper">
              <span style={{ '--i': 0 } as React.CSSProperties} className="cube-span"></span>
              <span style={{ '--i': 1 } as React.CSSProperties} className="cube-span"></span>
              <span style={{ '--i': 2 } as React.CSSProperties} className="cube-span"></span>
              <span style={{ '--i': 3 } as React.CSSProperties} className="cube-span"></span>
            </div>
          </div>
      </div>

      <div className="Social-And-History">
        
        <div className="information-banner">
          <ul className="banner-items">
            <li className="name-item">
              <span>Saad Ahmed Qureshi: Software Engineer</span>
            </li>
            <div className="social-icons">
              <li className="linkedIn">
                <FaLinkedin className="linkedIn-icon w-7 h-7" />
              </li>
              <li className="github">
                <FaGithub className="github-icon w-7 h-7" />
              </li>
              <li className="facebook">
                <FaFacebook className="facebook-icon w-7 h-7" />
              </li>
              <li className="twitter">
                <FaTwitter className="twitter-icon w-7 h-7" />
              </li>
              <li className="instagram">
                <FaInstagram className="instagram-icon w-7 h-7" />
              </li>
            </div>
          </ul>
        </div>       

        <div className="summary position-absolute">
          <p className="summary-description">
            Computer Science undergraduate with proficiency in C++, Python, 
            JavaScript, Kotlin, Natural Language Processing and SQL. Developed 
            mobile and web applications, experienced in data analytics and 
            skilled in project management and teamwork. 
          </p>
        </div>
      
        <div className="line-wrapper">
          <svg width="990" height="350" viewBox="0 0 990 380" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M -1.4748 20.6492 C 80.424 19.8251 200.8844 14.7252 243.9914 63.4959 C 331.6355 187.785 581.4571 34.4835 682.5811 148.0071 C 772.8662 252.5502 1017.4109 124.3923 1120.5278 232.168"         
              stroke="black"
              strokeWidth="2"
              className="bendy-path"
            />
          </svg>
        </div>
      </div>

      

      <div className="pyramid-loader">
        <div className="wrapper">
          <span className="side side1"></span>
          <span className="side side2"></span>
          <span className="side side3"></span>
          <span className="side side4"></span>
        </div>
      </div>

      <div className="pyramid-loader-2">
        <div className="wrapper-2">
          <span className="side side1"></span>
          <span className="side side2"></span>
          <span className="side side3"></span>
          <span className="side side4"></span>
        </div>  
      </div>

      <div className="pyramid-loader-3">
        <div className="wrapper-3">
          <span className="side side1"></span>
          <span className="side side2"></span>
          <span className="side side3"></span>
          <span className="side side4"></span>
        </div>  
      </div>


      <div className="pyramid-loader-4">
        <div className="wrapper-4">
          <span className="side side1"></span>
          <span className="side side2"></span>
          <span className="side side3"></span>
          <span className="side side4"></span>
        </div>
      </div>

      <div className="history-2019">
          <p className="font-bold">2019</p>
          <p>O-levels</p>
          <p>BeaconHouse School System</p>
      </div>

       <div className="history-2021">
          <p>A-levels</p>
          <p>BeaconHouse School System</p>
          <p className="font-bold">2021</p>
      </div>

      <div className="history-2024">
        <p className="font-bold">2024</p>
          <p>Data Analyst Intern  systems Limited</p>
          
      </div>

       <div className="history-2025">
          
          <p>BSc Computer Science  National University Of Computer 
            and Emerging Sciences </p>
            <p className="font-bold">2025</p>
      </div>

        <div className="pyramid-loader-5">
          <div className="wrapper-5">
            <span className="side side1"></span>
            <span className="side side2"></span>
            <span className="side side3"></span>
            <span className="side side4"></span>
          </div>
        </div> 

        <div className="pyramid-loader-6">
          <div className="wrapper-6">
            <span className="side side1"></span>
            <span className="side side2"></span>
            <span className="side side3"></span>
            <span className="side side4"></span>
          </div>
        </div>

        <div className="pyramid-loader-7">
          <div className="wrapper-7">
            <span className="side side1"></span>
            <span className="side side2"></span>
            <span className="side side3"></span>
            <span className="side side4"></span>
          </div>
        </div>

        <div className="pyramid-loader-8">
          <div className="wrapper-8">
            <span className="side side1"></span>
            <span className="side side2"></span>
            <span className="side side3"></span>
            <span className="side side4"></span>
          </div>  
        </div>

        <div className="pyramid-loader-9">
          <div className="wrapper-9">
            <span className="side side1"></span>
            <span className="side side2"></span>
            <span className="side side3"></span>
            <span className="side side4"></span>
          </div>
        </div>

        
        <div className="pyramid-loader-10">
          <div className="wrapper-10">
            <span className="side side1"></span>
            <span className="side side2"></span>
            <span className="side side3"></span>
            <span className="side side4"></span>
          </div>
        </div>


        <div className="project-container-01">
          <h2 className="project-title">Transcend</h2>
          <Image
              src="/image01.png"       // must start with a slash
              alt="Project 01"
              width={200}
              height={112.5}
              className="project-image"
              priority                 // optional: loads this image ASAP for LCP
            />      
        </div>


        <div className="project-container-02">
            <h2 className="project-title">ChronoForge</h2>
            <Image
              src="/image02.png"       // must start with a slash
              alt="Project 01"
              width={200}
              height={112.5}
              className="project-image"
              priority                 // optional: loads this image ASAP for LCP
            />     
        </div>


        <div className="project-container-03">
            <h2 className="project-title">VoltDesk</h2>
          <Image
              src="/image03.png"       // must start with a slash
              alt="Project 01"
              width={200}
              height={112.5}
              className="project-image"
              priority                 // optional: loads this image ASAP for LCP
            />     
        </div>


        <div className="project-container-04">
            <h2 className="project-title">DriftNote</h2>
            <Image
              src="/image04.png"       // must start with a slash
              alt="Project 01"
              width={200}
              height={112.5}
              className="project-image"
              priority                 // optional: loads this image ASAP for LCP
            />     
        </div>


        <div className="project-container-05">
            <h2 className="project-title">CoreSync</h2>
            <Image
              src="/image05.png"       // must start with a slash
              alt="Project 01"
              width={200}
              height={112.5}
              className="project-image"
              priority                 // optional: loads this image ASAP for LCP
            />     
        </div>

        <div className="project-container-06">
            <h2 className="project-title">LumenCode</h2>
            <Image
              src="/image06.png"       // must start with a slash
              alt="Project 01"
              width={200}
              height={112.5}
              className="project-image"
              priority                 // optional: loads this image ASAP for LCP
            />     
        </div>




        
        <div className="pyramid-loader-11">
          <div className="wrapper-11">
            <span className="side side1"></span>
            <span className="side side2"></span>
            <span className="side side3"></span>
            <span className="side side4"></span>
            
          </div>
        </div>


        <div className="pyramid-loader-12">
          <div className="wrapper-12">
            <span className="side side1"></span>
            <span className="side side2"></span>
            <span className="side side3"></span>
            <span className="side side4"></span>
          </div>
        </div>

        <div className="pyramid-loader-13">
          <div className="wrapper-13">
            <span className="side side1"></span>
            <span className="side side2"></span>
            <span className="side side3"></span>
            <span className="side side4"></span>
          </div>
        </div>

        <div className="pyramid-loader-14">
          <div className="wrapper-14">
            <span className="side side1"></span>
            <span className="side side2"></span>
            <span className="side side3"></span>
            <span className="side side4"></span>
          </div>  
        </div>

        <div className="pyramid-loader-15">
          <div className="wrapper-15">
            <span className="side side1"></span>
            <span className="side side2"></span>
            <span className="side side3"></span>
            <span className="side side4"></span>
          </div>
        </div>

        
        <div className="pyramid-loader-16">
          <div className="wrapper-16">
            <span className="side side1"></span>
            <span className="side side2"></span>
            <span className="side side3"></span>
            <span className="side side4"></span>
          </div>
        </div>


        <div className="project-container-07">
          <h2 className="project-title">Transcend</h2>
          <Image
              src="/image01.png"       // must start with a slash
              alt="Project 01"
              width={200}
              height={112.5}
              className="project-image"
              priority                 // optional: loads this image ASAP for LCP
            />      
        </div>


        <div className="project-container-08">
            <h2 className="project-title">ChronoForge</h2>
            <Image
              src="/image02.png"       // must start with a slash
              alt="Project 01"
              width={200}
              height={112.5}
              className="project-image"
              priority                 // optional: loads this image ASAP for LCP
            />     
        </div>


        <div className="project-container-09">
            <h2 className="project-title">VoltDesk</h2>
          <Image
              src="/image03.png"       // must start with a slash
              alt="Project 01"
              width={200}
              height={112.5}
              className="project-image"
              priority                 // optional: loads this image ASAP for LCP
            />     
        </div>


        <div className="project-container-10">
            <h2 className="project-title">DriftNote</h2>
            <Image
              src="/image04.png"       // must start with a slash
              alt="Project 01"
              width={200}
              height={112.5}
              className="project-image"
              priority                 // optional: loads this image ASAP for LCP
            />     
        </div>


        <div className="project-container-11">
            <h2 className="project-title">CoreSync</h2>
            <Image
              src="/image05.png"       // must start with a slash
              alt="Project 01"
              width={200}
              height={112.5}
              className="project-image"
              priority                 // optional: loads this image ASAP for LCP
            />     
        </div>

        <div className="project-container-12">
            <h2 className="project-title">LumenCode</h2>
            <Image
              src="/image06.png"       // must start with a slash
              alt="Project 01"
              width={200}
              height={112.5}
              className="project-image"
              priority                 // optional: loads this image ASAP for LCP
            />     
        </div>


        <button
            onClick={toggleTheme}
            className={`dark-mode-toggle ${isDark ? 'dark' : 'light'}`}
          >
            <Image
              src={isDark ? '/moon.png' : '/sun.png'}
              alt={isDark ? 'Dark mode' : 'Light mode'}
              width={32}
              height={32}
            />
        </button>

        <div className="skills-technology">

        </div>

        <div className="contact-me">

        </div>
      

      
    


    </div>
  );
}

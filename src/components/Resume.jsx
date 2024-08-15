import React from 'react';
import { Helmet } from 'react-helmet';
import '../assets/css/style.css';

const Resume = () => {
  return (
    <div id="resume">
      <Helmet>
        <script
          id='fiverr-seller-widget-script-0dc07634-d805-4c41-9094-9dd52768fae1'
          src='https://widgets.fiverr.com/api/v1/seller/mmalcolmm?widget_id=0dc07634-d805-4c41-9094-9dd52768fae1'
          data-config='{"category_name":"Programming \u0026 Tech"}'
          async
          defer
        ></script>
      </Helmet>
      
      <h2>Resume</h2>
      <p>Download my <a href="/resumePdf.pdf" download>resume</a>.</p>
      <h3>Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>SQL</li>
      </ul>

      {/* Fiverr Widget Container */}
      <div id="fiverr-widget-container" style={{ display: 'inline-block' }}>
        <div itemscope itemtype='http://schema.org/Person' className='fiverr-seller-widget' style={{ display: 'inline-block' }}>
          <a itemprop='url' href="https://www.fiverr.com/mmalcolmm" rel="nofollow" target="_blank" style={{ display: 'inline-block' }}>
            <div className='fiverr-seller-content' id='fiverr-seller-widget-content-0dc07634-d805-4c41-9094-9dd52768fae1' itemprop='contentURL' style={{ display: 'none' }}></div>
            <div id='fiverr-widget-seller-data' style={{ display: 'none' }}>
              <div itemprop='name'>mmalcolmm</div>
              <div itemscope itemtype='http://schema.org/Organization'><span itemprop='name'>Fiverr</span></div>
              <div itemprop='jobtitle'>Seller</div>
              <div itemprop='description'>If ima do it, gotta do it well.</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;

import React from 'react';

import PopularPosts from '../../components/popular-posts/popular-posts.component';
import Quotes from '../../components/quotes/quotes.component';
import AboutCard from '../../components/about-card/about-card.component';

import '../../pages/homepage/homepage.styles.scss';


const Sidebar = () => (
    <div className="w3-col l4">
  <AboutCard/>
  <hr></hr>
  <PopularPosts/>
  <hr></hr>
  <Quotes/>
{/* <!-- END Introduction Menu --> */}
</div>
)

export default Sidebar;


import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectPostList} from '../../redux/post/post.selectors';

import PopularPosts from '../../components/popular-posts/popular-posts.component';
import Quotes from '../../components/quotes/quotes.component';
import AboutCard from '../../components/about-card/about-card.component';

import '../../pages/homepage/homepage.styles.scss';


class Sidebar extends React.Component{

  // constructor(props){
  //   super(props);
  // }

  componentDidMount() {
    window.scrollTo(0, 0)
  }



  render(){
    return(
    <div className="w3-col l4">
  <AboutCard/>
  <hr></hr>
  <PopularPosts history={this.props.history}/>
  <hr></hr>
  <Quotes/>
{/* <!-- END Introduction Menu --> */}
</div>
)
    }
  }

  const mapStateToProps = createStructuredSelector({
    posts: selectPostList
  })

export default connect(mapStateToProps)(Sidebar);


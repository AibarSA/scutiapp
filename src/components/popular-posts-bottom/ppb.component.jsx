import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import '../../pages/homepage/homepage.styles.scss';
import {selectPostList} from '../../redux/post/post.selectors';



 function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


class PopularPostsBottom extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }



  render(){
    return(
    <div className="w3-main">


  
  {/* <!-- First Photo Grid--> */}
  <div className="w3-row-padding">
    {
                   
                   shuffle(this.props.posts).filter((post, idx) => idx < 3).map(({title, description, id, publicationDate, bookImage}) => (
                    <div className="w3-third w3-container w3-margin-bottom" key={id} id={id} title={title} description={description} publicationDate={publicationDate} bookImage={bookImage}
                    onClick={() => this.props.history.push(`${'/post/'}${id}`)} >
                    <img src={bookImage} class="w3-hover-opacity"/>
                    <div className="w3-container w3-white">
                      <p><b>{title}</b></p>
                      <p>{description.substring(0, 100) + "..."}</p>
                    </div>
                  </div>
                   ))

          
    }

  </div>
  

  </div>



)
  }

  }
const mapStateToProps = createStructuredSelector({
    posts: selectPostList
  })

export default connect(mapStateToProps)(PopularPostsBottom);
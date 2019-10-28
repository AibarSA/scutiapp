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

const PopularPosts = ({posts}) => (
    <div className="w3-card w3-margin">
    <div className="w3-container w3-padding">
      <h4>Popular Posts</h4>
    </div>
        <ul className="w3-ul w3-hoverable w3-white">
          {
            shuffle(posts).filter((post, idx) => idx < 4).map(({title, description, id, publicationDate}) => (
            <li className="w3-padding-16" key={id} id={id} title={title} description={description} publicationDate={publicationDate}>
              <img src="https://www.w3schools.com/w3images/workshop.jpg" alt="Image"/>

              <span className="w3-large">{title.substring(0, 63) + "..."}</span><br></br>
              {/* <span>Sed mattis nunc</span> */}
            </li>
            ))
          }
        </ul>
  </div>
)
const mapStateToProps = createStructuredSelector({
  posts: selectPostList
})

export default connect(mapStateToProps)(PopularPosts);
import React from 'react';
import { connect } from 'react-redux';
import BeginConcertSearch from './begin';
// import InfoSection from './about-page';
// import { aboutPage } from '../actions/concerts';
import { Link } from 'react-router-dom';

import './landingpage.css';


export class LandingPage extends React.Component {
 

  render() {
    let titleText = <h1>quick concert</h1>
     
  return (
    <section id='landing'>
      <div>
        {titleText}
        <BeginConcertSearch />
      </div>
    </section>

  );
}

}

// comeback to this later
// const mapStateToProps = state => {
//   return {
//     about: state.about
//   }
// }

export default connect()(LandingPage)

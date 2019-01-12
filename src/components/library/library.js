import React, {Component} from 'react';
import { connect } from 'react-redux';

import LibraryCourse from './libraryCourse';
import * as actions from '../../actions'

class Library extends Component {
   
    componentDidMount() {
        this.props.fetchCourses()
    }

    render() {
       return (
            <div className="library">
                <h1 className="library__title">My Library</h1>
                <LibraryCourse/>
                <LibraryCourse/>
                <LibraryCourse/>
            </div>
       );
   }
}

export default connect(null, actions)(Library);
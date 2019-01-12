import React, {Component} from 'react';
import { connect } from 'react-redux';

import LibraryCourse from './libraryCourse';
import * as actions from '../../actions'

class Library extends Component {
   
    componentWillMount() {
        this.props.fetchCourses()
    }

    renderCourses() {
        const data = this.props.courses

        return data.map((course, index) => {
            return <LibraryCourse {...course} key={index}/>
        })
    }

    render() {
       return (
            <div className="library">
                <h1 className="library__title">My Library</h1>
                { this.renderCourses() }
            </div>
       );
   }
}

function mapStateToProps(state) {
    return {courses: state.courses
    }
}

export default connect(mapStateToProps, actions)(Library);
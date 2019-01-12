import React, { Component } from 'react';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course__title">Problem Solving</label>
                {/* icon component */}
                {/* arrow component */}
                {/* action button component */}
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu dui efficitur, lacinia augue vel, congue dui. Vestibulum quis scelerisque lorem, non fermentum mi. Nunc id magna sollicitudin, viverra neque et, tincidunt mauris.</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;
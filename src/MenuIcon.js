import React from 'react';

class MenuIcon extends React.Component {
  state = {
    isActive: false
  };

  handleToggle = () => {
    this.setState(prevState => ({ isActive: !prevState.isActive }));
    document.body.classList.toggle('nav-open');
  };
  render() {
    return (
      <button className="nav-toggle" onClick={this.handleToggle}>
        <span className="hamburger" />
      </button>
    );
  }
}

export default MenuIcon;

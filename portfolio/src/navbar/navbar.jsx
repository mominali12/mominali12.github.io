import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./navbar.styles.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  // Button
} from "reactstrap";

// import { NavHashLink as HashNavLink } from "react-router-hash-link";
import { NavLink as RRNavLink } from "react-router-dom";

class NavbarComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      isOpen: false,
      error: {},
      scrolled: false,
      expanded: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount = () => {
    // window.addEventListener("scroll", () => {
    //   // console.log(window.scrollY);
    //   const isTop = window.scrollY < 50;
    //   if (isTop !== true) {
    //     this.setState({ scrolled: true });
    //   } else {
    //     this.setState({ scrolled: false });
    //   }
    // });
    console.log("Navbar mounted");
  };

  static getDerivedStateFromError(error) {
    // getDerivedStateFromError -> Update state so the next render will show the fallback UI.
    return { hasError: true, error: error };
  }

  componentDidUpdate = () => {
    console.log("Navbar did update");
    if (this.state.isOpen) {
      if (this.state.expanded) {
        this.toggle();
      }
    }
  };

  componentWillUnmount = () => {
    // window.removeEventListener("scroll");
    console.log("Navbar will unmount");
  };

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          Something Wrong with navbar <br />{" "}
          <pre> {JSON.stringify(this.state.error)}.</pre>
        </h1>
      );
    }
    return (
      <Navbar
        className={
          this.state.scrolled ? "NavbarWrapper scrolled" : "NavbarWrapper"
        }
        color="white"
        fixed="top"
        light
        sticky="top"
        expand="lg"
        z-index="100"
      >
        <NavbarBrand to="/">portfolio</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                tag={RRNavLink}
                // exact
                to="/AboutUs/#AboutHome_id"
                activeClassName="active"
                onClick={this.toggle}
              >
                {/* <HashNavLink
                  tag={RRNavLink}
                  // smooth
                  // exact
                  to="/AboutUs/#AboutHome_id"
                  activeClassName="active"
                >
                  About us
                </HashNavLink> */}
                Intro
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                tag={RRNavLink}
                to="/ProductsHome/#ProductsHome_id"
                activeClassName="active"
                onClick={this.toggle}
              >
                {/* <HashNavLink
                  tag={RRNavLink}
                  // smooth
                  to="/ProductsHome/#ProductsHome_id"
                  activeClassName="active"
                >
                  Products
                </HashNavLink> */}
                Projects
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                tag={RRNavLink}
                to="/WorkHome/#WorkHome_id"
                activeClassName="active"
                onClick={this.toggle}
              >
                {/* <HashNavLink
                  tag={RRNavLink}
                  // smooth
                  to="/WorkHome/#WorkHome_id"
                  activeClassName="active"
                >
                  Projects
                </HashNavLink> */}
                Experience
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                tag={RRNavLink}
                exact
                to="/DonorsHome/#DonorsHome_id"
                activeClassName="active"
                onClick={this.toggle}
              >
                {/* <HashNavLink
                  tag={RRNavLink}
                  // smooth
                  exact
                  to="/DonorsHome/#DonorsHome_id"
                  activeClassName="active"
                >
                  Investors
                </HashNavLink> */}
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  sticky: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  nav: PropTypes.bool
};
NavbarToggler.propTypes = {
  type: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
};
NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

export default NavbarComponent;

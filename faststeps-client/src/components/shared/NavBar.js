
import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { Link } from 'react-router-dom';
import lungo from '../../assets/langues.svg';
import logo from '../../assets/logo.svg';
import { useLanguesContext } from "../../hooks/LanguesContext";
export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [langues, setLangues] = useState("eng");

  const { languesState, setLanguesState } = useLanguesContext();
  const langues_v = JSON.parse(localStorage.getItem('lan_1stSteps'));


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [activeLink])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  useEffect(() => {
    if (langues_v === "arb") {
      setLanguesState("arb")
      setLangues("arb")
    }
  }, [])

  const handleOnLangues = (value) => {
    setLangues(value)
    setLanguesState(value)
    localStorage.setItem('lan_1stSteps', JSON.stringify(value))
  } 

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" width='160%' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>{languesState === "arb" ? "الرئيسية" : "Home Page"}</Link>
            <Link to="/about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>{languesState === "arb" ? "من نحن" : "About Us"}</Link>
            <Link to="/services" className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('services')}> {languesState === "arb" ? "صفحة الخدمات" : "Services"}</Link>
            <Link to="/join" className={activeLink === 'join' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('join')}>  {languesState === "arb" ? "انضم إلينا" : "Join Us"} </Link>
            <Link to="/contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>{languesState === "arb" ? "اتصل بنا" : "Contact Us"} </Link>
          </Nav>
          <span className="navbar-text hove-nav_l">
            <div className="social-icon">
            </div>
            <img className='icon_nav' src={lungo} />
            <div className="hover_open">
              <select className="langues_nav" name="langues" defaultValue={langues_v} onClick={(e) => (handleOnLangues(e.target.value))}>
                <option value="eng" >English</option>
                <option value="arb">عربي</option> 
              </select>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

import React from 'react'
import Link from 'next/link'
import Collapse from 'Components/Collapse'
import NavLink from 'Components/NavLink'
import Style from 'next-styled-css'
import s, { sheet } from './Toolbar.styl'

class Toolbar extends React.Component {
  state = { collapsed: true }

  toggleCollapse = () => this.setState({ collapsed: !this.state.collapsed })

  render() {
    const { collapsed } = this.state
    return (
      <div className={`${s.toolbar} bg-accent tc-white`}>
        <Style sheet={sheet} />
        <div className="navbar navbar-dark navbar-expand-md px-0">
          <div className="container flex-nowrap">
            <Link href="/home" as="/">
              <a className="navbar-brand">Navbar</a>
            </Link>
            <ul className="navbar-nav mr-auto d-none d-md-flex">
              <li className="nav-item">
                <NavLink href="/home" as="/" className="nav-link" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink href="/about" className="nav-link" activeClassName="active">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink href="/blog" className="nav-link" activeClassName="active">
                  Blog
                </NavLink>
              </li>
            </ul>
            <form action="" className={`form-inline ml-0 ml-md-4 mr-2 flex-grow ${s.searchForm}`}>
              <input
                type="text"
                className="input border-transparent"
                placeholder="Search documentation, tools and projects..."
              />
            </form>
            <button
              className="btn d-md-none navbar-toggler"
              onClick={this.toggleCollapse}
              type="button"
            >
              <div
                className={`hamburger hamburger-slider hamburger-white ${
                  !collapsed ? 'active' : ''
                }`}
              >
                <div className="hamburger-inner" />
              </div>
            </button>
            <ul className="navbar-nav d-none d-md-flex">
              <li className="nav-item">
                <NavLink href="/blog" className="nav-link" activeClassName="active">
                  Entrar
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <Collapse
          collapsed={collapsed}
          className="navbar-collapse-dropdown bg-white"
          containerClassName="nav container px-0 flex-column ts-medium py-2"
        >
          <a href="" className="nav-link tc-base">
            Inicio
          </a>
          <div className="px-3 py-2">
            <hr className="my-0 w-100" />
          </div>
          <a href="" className="nav-link tc-base">
            Perfil
          </a>
          <a href="" className="nav-link tc-base">
            Viagens
          </a>
          <a href="" className="nav-link tc-base">
            Mensagens
          </a>
          <a href="" className="nav-link tc-base">
            Wish lists
          </a>
          <a href="" className="nav-link tc-base">
            Convidar amigos
          </a>
          <div className="px-3 py-2">
            <hr className="my-0 w-100" />
          </div>
          <a href="" className="nav-link tc-base">
            Sair
          </a>
          <div className="p-3">
            <button className="btn btn-primary btn--size-medium btn--block">Login</button>
          </div>
        </Collapse>
      </div>
    )
  }
}

export default Toolbar

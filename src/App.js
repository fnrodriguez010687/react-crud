import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Link, Route} from 'react-router-dom';
import TutorialsList from './components/tutorials-list.component';
import AddTutorial from './components/add-tutorial.component';
import Tutorial from './components/tutorial.component';


class App extends Component {
  render(){
    return (
      <div>
        <nav className='bg-white navbar p-2 navbar-default py-2 navbar navbar-expand-lg navbar-light'>
          <div className='px-0 ps-2 container-fluid'>
            <a className='navbar-brand' href='/'>
              DIMARQ
              <img src='/static/media/logo.e22c846d87ff5a1252df471397badc6d.svg' alt='' className=''/>
            </a>
            <div className='navbar-nav navbar-right-wrap ms-auto d-lg-none nav-top-wrap d-flex'>
              <div className='mt-2 me-2 dropdown nav-item'>
                <a id='dropdownNotification' aria-expanded='false' role='button' 
                  className='text-dark icon-notifications me-lg-1  btn btn-light btn-icon rounded-circle 
            indicator indicator-primary text-muted dt nav-link' tabIndex='0' href='/'>
                  <i className='fe fe-bell'></i></a>
              
              </div>
              <div className='dropdown nav-item'>
                <a id='dropdownUser' aria-expanded='false' role='button' className='rounded-circle border-bottom-0 dt nav-link' 
                  tabIndex='0' href='/'>
                  <div className='avatar avatar-md avatar-indicators avatar-online'>
                    <img alt='avatar' src='/static/media/avatar-1.d2fd9642fd3628734b27.jpg' className='rounded-circle'/>
                  </div>
                </a>
              </div>          
            </div>
            <button aria-controls='basic-navbar-nav' type='button' aria-label='Toggle navigation' className='navbar-toggler collapsed'>
              <span className='icon-bar top-bar mt-0'></span>
              <span className='icon-bar middle-bar'></span>
              <span className='icon-bar bottom-bar'></span>
            </button>
            <div className='navbar-collapse collapse' id='basic-navbar-nav' >
              <div className='navbar-nav'><div className='nav-item dropdown'>
                <a aria-expanded='false' role='button' className='dropdown-toggle nav-link'  href='/'>
                Browse
                </a>
              </div>
              <div className='nav-item dropdown'>
                <a aria-expanded='false' role='button' className='dropdown-toggle nav-link'  href='/'>
                Landings
                </a>
              </div>
              <div className='nav-item dropdown'>
                <a aria-expanded='false' role='button' className='dropdown-toggle nav-link'  href='/'>
                Pages
                </a>
              </div>
              <div className='nav-item dropdown'>
                <a aria-expanded='false' role='button' className='dropdown-toggle nav-link'  href='/'>
                Accounts
                </a>
              </div>
              <div className='nav-item dropdown'>
                <a id='basic-nav-dropdown' aria-expanded='false' role='button' 
                  className='dropdown-toggle no-dropdown-arrow d-block nav-link fs-3 lh-1 pt-0'  href='/'>
                ...
                </a>
                <div aria-labelledby='basic-nav-dropdown' data-bs-popper='static' className='dropdown-menu'>
                  <a data-rr-ui-dropdown-item='' className='py-2 px-3 dropdown-item' href='/dashboard/documentation'>
                    <div className='d-flex align-items-center'>
                      <i className='fe fe-file-text fs-3 text-primary'></i>
                      <div className='ms-3 lh-3'>
                        <h5 className='mb-0'>Documentations</h5>
                        <p className='mb-0 fs-6'>Browse the all documentation</p>
                      </div>                
                    </div>
                  </a>
                  <a data-rr-ui-dropdown-item='' className='py-2 px-3 dropdown-item' href='/dashboard/changelog'>
                    <div className='d-flex align-items-center'>
                      <i className='fe fe-layers fs-3 text-primary'></i>
                      <div className='ms-3 lh-3'>
                        <h5 className='mb-0'>
                        Changelog 
                          <span className='text-primary ms-1'>v1.1.0</span>
                        </h5>
                        <p className='mb-0 fs-6'>See what`s new</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              </div>
              <form className='mt-3 mt-lg-0 ms-lg-3 d-flex align-items-center'>
                <span className='position-absolute ps-3 search-icon'>
                  <i className='fe fe-search'></i>
                </span>
                <input placeholder='Search Courses' type='Search' id='formSearch' className='ps-6 form-control'/>
              </form>
              <div className='navbar-nav navbar-right-wrap ms-auto d-flex nav-top-wrap navbar-nav'>
                <span className='ms-auto mt-3 mt-lg-0  d-none'>
                  <a className='btn btn-white shadow-sm me-2 btn' href='/marketing/pages/career-single/'>Sign In</a>
                  <a className='btn btn-primary shadow-sm btn' href='/marketing/pages/career-single/'>Sign Up</a></span>
                <span className='d-none'>
                  <div className='mt-2 me-2 dropdown nav-item'>
                    <a id='dropdownNotification' aria-expanded='false' role='button' 
                      className='text-dark icon-notifications me-lg-1  btn btn-light btn-icon rounded-circle indicator indicator-primary text-muted dt nav-link' 
                      tabIndex='0' href='/'>
                      <i className='fe fe-bell'></i></a>
                  </div>
                  <div className='dropdown nav-item'>
                    <a id='dropdownUser' aria-expanded='false' role='button' 
                      className='rounded-circle border-bottom-0 dt nav-link' tabIndex='0' href='/'>
                      <div className='avatar avatar-md avatar-indicators avatar-online'>
                        <img alt='avatar' src='/static/media/avatar-1.d2fd9642fd3628734b27.jpg' className='rounded-circle'/>
                      </div>
                    </a>
                  </div>
                </span>
              </div>
            </div>

            <div className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <Link to={'/tutorials'} className='nav-link'>
                Tutorials
                </Link>
              </li>
              <li className='nav-item'>
                <Link to={'/add'} className='nav-link'>
                Add
                </Link>
              </li> 
            </div>
          </div>
        </nav>
        <div className='container mt-3'>
          <Routes>
            <Route path='/*' element={<TutorialsList/>} />
            <Route path='add' element={<AddTutorial/>} />
            <Route path='tutorials/:id' element={<Tutorial/>} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;

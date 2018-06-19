import React from 'react'
import {configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import NavItems from './NavItems'
import Link from './Link'

// this connects enzyme
configure({adapter: new Adapter()})

describe('<NavItems />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavItems />)
  })

  it('should render two navigation items elements if not authenticated', () => {
    expect(wrapper.find(Link)).toHaveLength(2)
  })

  it('should render three navigation items elements if authenticated', () => {
    // wrapper = shallow(<Link isAuthenticated />)
    wrapper.setProps({isAuthenticated: true})
    expect(wrapper.find(Link)).toHaveLength(3)
  })

  it('should contains the logout navigation item', () => {
    wrapper.setProps({isAuthenticated: true})
    expect(wrapper.contains(<Link link="/logout">Logout</Link>)).toEqual(true)
  })

  //afterEach()
})

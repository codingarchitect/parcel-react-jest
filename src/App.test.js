import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { loadPage1Plugins } from './plugin-loader';
describe('App', () => {
  const app = shallow(<App />);

  it('renders the app', () => {
    expect(app.find('h1').exists()).toBe(true);
  });

});

describe('Parcel', () => {
  it('can load component metadata', () => {
    loadPage1Plugins();
  });

});
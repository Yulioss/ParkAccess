import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './custom.css';
import EditSetting from './components/Settings/EditSetting';
import { MainLayout } from './components/Layout/MainLayout';
import { CreateSetting } from './components/Settings/CreateSetting';
import { ViewSettings } from './components/Settings/ViewSettings';
import { Home } from './components/Home';

export default class AppRoutes extends Component {
  static displayName = AppRoutes.name;

  render() {
    return (
      <Routes>
        <Route path='/' element={<MainLayout><Home/></MainLayout>}/>
        <Route path='/create-setting' element={<MainLayout><CreateSetting/></MainLayout>}/>
        <Route path='/edit-setting/:id' element={<MainLayout><EditSetting/></MainLayout>}/>
        <Route path='/view-settings' element={<MainLayout><ViewSettings/></MainLayout>}/>
        </Routes>
    );
  }
}

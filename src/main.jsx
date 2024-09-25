import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import {CounterApp, CounterWithCustomHook, FormWithCustomHook, 
  MultipleCustomHooks, FocusScreen, Layout, Memorize, MemoHook,
  CallbackHook, Padre, TodoApp, MainApp } from './index';

import './index.css';

{/* <CounterApp />
    <CounterWithCustomHook />
    <FormWithCustomHook />
    <MultipleCustomHooks/>
    <FocusScreen />
    <Layout />
    <Memorize />
    <MemoHook />
    <CallbackHook />
    <Padre /> */}

createRoot( document.getElementById( 'root' ) ).render(
    <BrowserRouter>
      
      <MainApp />
    
    </BrowserRouter>
    
)

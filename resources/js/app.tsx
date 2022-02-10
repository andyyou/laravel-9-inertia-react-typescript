import './bootstrap';
import React from 'react';
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';

InertiaProgress.init();

createInertiaApp({
  resolve: (name) => import(`./Page/${name}`),
  setup({ el, App, props }) {
    render(<App {...props} />, el)
  }
});




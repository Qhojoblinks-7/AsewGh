import { createRouter } from '@tanstack/react-router';

// Define your routes
const indexRoute = {
  path: '/',
  component: () => require('./routes/index').default,
};

// Create the router
const router = createRouter({
  routeTree: [indexRoute],
  defaultPreload: 'intent',
});

export { router };

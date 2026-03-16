import { createRouter } from '@tanstack/react-router';

// Define your routes
const indexRoute = {
  path: '/',
  component: () => require('./routes/index').default,
};

const searchRoute = {
  path: '/search',
  component: () => require('./screens/SearchScreen').default,
};

// Create the router
const router = createRouter({
  routeTree: [indexRoute, searchRoute],
  defaultPreload: 'intent',
});

export { router };

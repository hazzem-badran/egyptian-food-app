
// Route types
export type RouteKey = 
  | 'SALADS'
  | 'DESSERTS'
  | 'APPETIZERS'
  | 'MAIN_DISHES'
  | 'DIGNITY'
  | 'MUNA'
  | 'BAKED'
  | 'DRINKS'
  | 'FAVORITES'
  | 'SEARCH'
  | 'SETTINGS';

export type RoutePath = 
  | '/salads'
  | '/desserts'
  | '/appetizers'
  | '/main-dishes'
  | '/dignity'
  | '/muna'
  | '/baked'
  | '/drinks'
  | '/favorites'
  | '/search'
  | '/settings';

export type RoutesMap = Record<RouteKey, RoutePath>;
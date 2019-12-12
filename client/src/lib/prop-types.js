import {
  string,
  bool,
  number,
  array,
  arrayOf,
  arrayOfType,
  oneOf,
  object,
  oneOfType,
  shape,
  node,
  func
} from 'prop-types';

export const stringType = string;
export const typeFunc = func;
export const typeArrayOf = arrayOf;
export const typeArrayOfType = arrayOfType;
export const typeShape = shape;
/** ***** Application specific. ********* */

export const stylesType = shape();

/** ***** React and package specific. ********* */

export const childrenType = oneOfType([arrayOf(node), node, func]);

export const routerLocation = shape({
  hash: string.isRequired,
  key: string,
  pathname: string.isRequired,
  search: string.isRequired,
  state: oneOfType([array, bool, number, object, string])
});

export const routerHistory = shape({
  action: oneOf(['PUSH', 'REPLACE', 'POP']).isRequired,
  block: func.isRequired,
  canGo: func,
  createHref: func.isRequired,
  entries: arrayOf(routerLocation),
  go: func.isRequired,
  goBack: func.isRequired,
  goForward: func.isRequired,
  index: number,
  length: number,
  listen: func.isRequired,
  location: routerLocation.isRequired,
  push: func.isRequired,
  replace: func.isRequired
});

export const routerMatch = shape({
  isExact: bool,
  params: object,
  path: string.isRequired,
  url: string.isRequired
});

export const routeShape = {
  path: string,
  exact: bool,
  strict: bool,
  sensitive: bool,
  component: func
};
routeShape.routes = arrayOf(shape(routeShape));

export const routerRoute = shape(routeShape);

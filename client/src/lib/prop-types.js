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
  any,
  node,
  func
} from 'prop-types';

export const stringType = string;
export const typeFunc = func;
export const typeArrayOf = arrayOf;
export const typeArrayOfType = arrayOfType;
export const typeShape = shape;
/** ***** Application specific. ********* */

export const termShape = shape({
  id: string,
  creditAvailableCents: number,
  creditBalanceUsedCents: number,
  creditRating: string,
  creditUsed: string,
  creditUsedCents: number,
  creditUsedCurrency: number,
  insuredAmount: string,
  insuredAmountCents: number,
  limit: string,
  limitCurrency: string,
  limitCents: number,
  paybackInteger: number,
  paybackPeriod: string,
  termsOffered: bool,
  termsOfferedReason: number,
  termsStatus: number
});

export const termsShape = arrayOf(termShape);

export const orderShape = shape({
  id: string,
  clientOrderNumber: string,
  status: string,
  shippingCostCents: number,
  taxesCents: number,
  subtotalCents: number,
  clientInvoice: shape({
    id: string,
    invoiceNumber: string,
    invoiceLink: string,
    totalCents: number,
    createdAt: string
  }),
  clientOrderItems: arrayOf(
    shape({
      id: string,
      price: number,
      quantity: number,
      lineTotal: string,
      lineTotalCents: number,
      productPackagingKind: shape({
        id: string,
        name: string,
        packageDescription: string
      })
    })
  )
});

export const ordersHistoryShape = arrayOf(orderShape);

export const clientShape = shape({
  id: string,
  authorizedSubstanceLevel: string,
  clientOrders: arrayOf(orderShape),
  companyFaxNumber: string,
  companyName: string,
  companyPhoneNumber: string,
  deaExpiration: string,
  facilityStateLicenses: arrayOf(
    shape({
      id: string,
      authorizedState: string,
      expiration: string,
      facilityLicense: string,
      createdAt: string,
      updatedAt: string
    })
  ),
  groupCode: shape({
    id: string,
    name: string
  }),
  notes: arrayOf(
    shape({
      id: string,
      note: string,
      updatedAt: string
    })
  ),
  payments: arrayOf(
    shape({
      id: string,
      paymentAmount: string,
      paymentType: string,
      usingTerms: bool
    })
  ),
  personInCharge: shape({
    id: string,
    firstName: string,
    lastName: string
  }),
  preferredShippingMethod: string,
  preferredShippingProvider: string,
  quickbooksId: string,
  shippingAccountNumber: string,
  shippingAddress: shape({
    id: string,
    addressLineOne: string,
    addressLineTwo: string,
    city: string,
    state: string,
    zipCode: string
  }),
  stateLicenseNumber: string,
  syncToken: string,
  termsOffered: bool,
  term: termShape, // Is this correct by any chance?
  type: string,
  createdAt: string,
  updatedAt: string
});

export const userShape = shape({
  id: string,
  name: string,
  firstName: string,
  lastName: string,
  nameWithEmail: string,
  email: string,
  encryptedPassword: string,
  isClientUser: bool,
  isEmployeeUser: bool,
  isSalesAdmin: bool,
  isSalesman: bool,
  isSuperAdmin: bool,
  isWarehouse: bool,
  isWarehouseAdmin: bool,
  primaryClient: oneOfType([shape(clientShape), any]),
  roles: string,
  type: string,
  createdAt: string,
  updatedAt: string
});

export const productShape = shape({
  id: string,
  name: string,
  price: string,
  priceCents: string,
  priceCurrency: string,
  packageDescription: string,
  ndcPackageCode: string,
  deaSchedule: string
});

/** ***** Cart ********* */

export const cartItemShape = shape({
  product: productShape,
  quantity: number
});
export const cartShape = arrayOf(cartItemShape);

export const cartStoreShape = shape({
  state: shape({
    cart: cartShape
  }),
  setToCart: func,
  removeFromCart: func,
  clearCart: func
});

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

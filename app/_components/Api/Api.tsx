export const Apis: { [key: string]: string } = {
  // public Apis for users
  register: "/register",
  login: "/login",
  logout: "/logout",
  addorder: "/order/add",
  show_delete_order: "/order/{id}",

  // protected Apis for Admin
  users: "/users",
  show_delete_user: "/user/{id}",
  categories: "/categories",
  addcategory: "/category/add",
  show_delete_edit_category: "/category",
  products: "/products",
  addproduct: "/product/add",
  show_delete_edit_product: "/product/{id}",
  productsforvendor: "/products/{vendor_id}",
  vendors: "/vendors",
  addvendor: "/vendor/add",
  show_delete_edit_vendor: "/vendor/{id}",
  orders: "/orders",
  order: "/order/{id}",
};

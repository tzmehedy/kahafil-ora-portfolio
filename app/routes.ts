import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/MainLayouts.jsx", [
    index("./pages/Home.jsx"),
  ]),
] satisfies RouteConfig;



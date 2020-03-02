import TrangChu from "./page/home/TrangChu/TrangChu";
import TrangDichvu from "./page/home/TrangDichVu/TrangDichVu";
import TrangBlog from "./page/home/TrangBlog/TrangBlog";
import TrangLienHe from "./page/home/TrangLienHe/TrangLienHe";
import TrangMauThietKe from "./page/home/TrangMauThietke/TrangMauThietKe";
import Dashboard from "./page/admin/Dashboard/Dashboard";
import TrangChiTietMauThietKe from "./page/home/TrangChiTietMauThietKe/TrangChiTietMauThietKe";
import TrangThietKeWeb from "./page/home/TrangThietKeWeb/TrangThietKeWeb";

const routesHome = [
  {
    path: "/",
    exact: true,
    component: TrangChu
  },
  {
    path: "/Trang-chu",
    exact: false,
    component: TrangChu
  },
  {
    path: "/Dich-vu",
    exact: false,
    component: TrangDichvu
  },
  {
    path: "/Blog",
    exact: false,
    component: TrangBlog
  },
  {
    path: "/Lien-he",
    exact: false,
    component: TrangLienHe
  },
  {
    path: "/Mau-thiet-ke",
    exact: false,
    component: TrangMauThietKe
  },
  {
    path: "/Chi-tiet-mau-thiet-ke",
    exact: false,
    component: TrangChiTietMauThietKe
  },
  { path: "/Thiet-ke-web", exact: false, component: TrangThietKeWeb }
];

export { routesHome };

const routesAdmin = [
  {
    path: "/admin-Dashboard",
    exact: false,
    component: Dashboard
  }
];

export { routesAdmin }
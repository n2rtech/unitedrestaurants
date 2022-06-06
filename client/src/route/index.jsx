// dashbaord

import Default from '../components/dashboard/admin/default'
import AdminDefault from '../components/dashboard/admin/default'
import Ecommerce from '../components/dashboard/vendor/ecommerce'
import VendorEcommerce from '../components/dashboard/vendor/ecommerce'
import User from '../components/dashboard/user/ecommerce'

import ChartsWidget from '../components/widgets/charts'

// Roles & Permission
 import Roles from '../components/roles/'


// Users
import UserProfile from "../components/users/userProfile"
import UserEdit from "../components/users/userEdit"
import UserCards from "../components/users/userCards"

// E-commerce-app 
import YoutubeCallback from "../components/application/bookmark/youtube-callback"

import AddVendor from "../components/application/bookmark/add-vendor"
import Blogs from "../components/application/bookmark/blogs"
import EditBlog from "../components/application/bookmark/edit-blog"
import AddBlog from "../components/application/bookmark/add-blog"
import EditAccountsPayable from "../components/application/bookmark/edit-payable"
import AddAccountsPayable from "../components/application/bookmark/add-payable"
import EditAdminMembership from "../components/application/bookmark/edit-admin-membership"
import PromotionsDiscount from "../components/application/bookmark/promotions-discount"
import EditPromotionsDiscount from "../components/application/bookmark/edit-promotions-discount"
import AdminMembershipPackage from "../components/application/bookmark/admin-membership-package"
import RolesList from "../components/application/bookmark/roleslist"
import ManagePages from "../components/application/bookmark/manage-pages"
import EditPage from "../components/application/bookmark/edit-page"
import Categories from "../components/application/bookmark/categories"
import EditCategory from "../components/application/bookmark/edit-category"
import AllVendors from "../components/application/bookmark/all-vendors"
import EditVendor from "../components/application/bookmark/edit-vendor"
import AllSaleItems from "../components/application/bookmark/all-sale-items"
import AllMembership from "../components/application/bookmark/all-membership"
import NoMembership from "../components/application/bookmark/no-membership"
import SuspendedVendors from "../components/application/bookmark/suspended-vendors"
import FeaturedVendors from "../components/application/bookmark/featured-vendors"
import HotDealsVendors from "../components/application/bookmark/hot-deals-vendors"
import AddSpaceVendors from "../components/application/bookmark/add-space-vendors"
import VideoMembershipVendors from "../components/application/bookmark/video-membership-vendors"
import VendorProfile from "../components/application/bookmark/vendor-profile"
import MyWallet from "../components/application/bookmark/my-wallet"
import VendorMembershipPackage from "../components/application/bookmark/vendor-membership-package"
import VendorCoupon from "../components/application/bookmark/vendor-coupon"
import AddVendorCoupon from "../components/application/bookmark/add-vendor-coupon"
import EditVendorCoupon from "../components/application/bookmark/edit-vendor-coupon"
import VendorPhotogallery from "../components/application/bookmark/vendor-photogallery"
import VendorVideoGallery from "../components/application/bookmark/vendor-videogallery"
import AddVendorVideoGallery from "../components/application/bookmark/add-video-gallery"
import EditVideoGallery from "../components/application/bookmark/edit-video-gallery"

import VendorYoutube from "../components/application/bookmark/vendor-youtube"
import AddYoutube from "../components/application/bookmark/add-youtube-video"


import JobOpenings from "../components/application/bookmark/job-openings"
import AddJobOpenings from "../components/application/bookmark/add-job-openings"
import EditJobOpenings from "../components/application/bookmark/edit-job-openings"
import PaymentMethod from "../components/application/bookmark/payment-method"
import AddsMembership from "../components/application/bookmark/adds-membership"
import AddSpaces from "../components/application/bookmark/ad-spaces"
import MenuItems from "../components/application/bookmark/menu-items"
import AddCategory from "../components/application/bookmark/add-category"
import SaleItems from "../components/application/bookmark/sale-items"
import EditSaleItems from "../components/application/bookmark/edit-sales-items"
import AccountsPayable from "../components/application/bookmark/accounts-payable"
import AddCountries from "../components/application/bookmark/add-countries"
import EditCountries from "../components/application/bookmark/edit-countries"
import ViewContactInquiry from "../components/application/bookmark/view-contact-inquiry"
import Countries from "../components/application/bookmark/countries"
import ContactEnquiries from "../components/application/bookmark/contact-enquiries"
import Trash from "../components/application/bookmark/trash"
import Backup from "../components/application/bookmark/backup"
import AddUser from "../components/application/bookmark/add-user"
import Userslist from "../components/application/bookmark/users-list"
import Edituser from "../components/application/bookmark/edit-user"
import Adsense from "../components/application/bookmark/adsense"
import ManagePackage from "../components/application/bookmark/manage-membership-package"
import AddPackage from "../components/application/bookmark/add-package"
import AddPromotion from "../components/application/bookmark/add-promotion-coupon"


// Bookmark
import Bookmark from "../components/application/bookmark"

import PaypalDetails from "../components/application/bookmark/paypaldetails"

import Error404 from '../pages/errors/error404'
   


export const routes = [


        { path:"/oauth2callback", Component:YoutubeCallback },


        { path:"/dashboard/admin/", Component:AdminDefault} ,
        { path:"/dashboard/vendor/", Component:VendorEcommerce} ,
       
        
        { path:"/dashboard/default/", Component:Default},
        { path:"/dashboard/user/", Component:User},
        { path:"/dashboard/", Component:Ecommerce},

        { path:"/pages/roles", Component:Roles},

    

        { path:"/app/users/userProfile", Component:UserProfile},
        { path:"/app/users/userEdit", Component:UserEdit},
        { path:"/app/users/userCards", Component:UserCards},

     
        { path:"/dashboard/admin/roleslist/:id/", Component:RolesList} ,
        { path:"/dashboard/admin/trash/:id/", Component:Trash} ,
        { path:"/dashboard/admin/backup/:id/", Component:Backup} ,
        { path:"/dashboard/admin/add-user/", Component:AddUser} ,
        { path:"/dashboard/admin/users-list", Component:Userslist} ,
        { path:"/dashboard/admin/edit-user/:id/", Component:Edituser} ,
        { path:"/dashboard/admin/Adsense/", Component:Adsense}, 
        { path:"/dashboard/admin/manage-pages/", Component:ManagePages} ,
        { path:"/dashboard/admin/add-category/", Component:AddCategory} ,
        { path:"/dashboard/admin/edit-page/:id", Component:EditPage},
        { path:"/dashboard/admin/categories", Component:Categories},
        { path:"/dashboard/admin/edit-category/:id", Component:EditCategory},
        { path:"/dashboard/admin/all-vendors", Component:AllVendors},
        { path:"/dashboard/admin/edit-vendor/:id", Component:EditVendor},
        { path:"/dashboard/admin/all-membership", Component:AllMembership},
        { path:"/dashboard/admin/no-membership", Component:NoMembership},
        { path:"/dashboard/admin/suspended-vendors", Component:SuspendedVendors},
        { path:"/dashboard/admin/featured-vendors", Component:FeaturedVendors},
        { path:"/dashboard/admin/hot-deals-vendors", Component:HotDealsVendors},
        { path:"/dashboard/admin/add-space-vendors", Component:AddSpaceVendors},
        { path:"/dashboard/admin/video-membership-vendors", Component:VideoMembershipVendors},
        { path:"/dashboard/admin/add-vendor", Component:AddVendor},
        { path:"/dashboard/admin/admin-membership-package", Component:AdminMembershipPackage},
        { path:"/dashboard/admin/edit-admin-membership/:id", Component:EditAdminMembership},
        { path:"/dashboard/admin/promotions-discount", Component:PromotionsDiscount},
        { path:"/dashboard/admin/edit-promotions-discount/:id", Component:EditPromotionsDiscount},
        { path:"/app/bookmark", Component:Bookmark},
        { path:"/dashboard/admin/paypaldetails", Component:PaypalDetails},
       
        { path:"/dashboard/vendor/vendor-profile", Component:VendorProfile},
        { path:"/dashboard/vendor/my-wallet", Component:MyWallet},
        { path:"/dashboard/vendor/vendor-membership-package", Component:VendorMembershipPackage},
        { path:"/dashboard/vendor/vendor-coupon", Component:VendorCoupon},
        { path:"/dashboard/vendor/add-vendor-coupon", Component:AddVendorCoupon},
        { path:"/dashboard/vendor/edit-vendor-coupon/:id", Component:EditVendorCoupon},
        { path:"/dashboard/vendor/vendor-photogallery", Component:VendorPhotogallery},
        { path:"/dashboard/vendor/vendor-videogallery", Component:VendorVideoGallery},
        { path:"/dashboard/vendor/add-video-gallery/", Component:AddVendorVideoGallery},
        { path:"/dashboard/vendor/edit-video-gallery/:id", Component:EditVideoGallery},
        { path:"/dashboard/vendor/all-sale-items", Component:AllSaleItems},
        { path:"/dashboard/vendor/edit-sales-items/:id", Component:EditSaleItems},
        { path:"/dashboard/vendor/vendor-youtube", Component:VendorYoutube},
        { path:"/dashboard/vendor/add-youtube-video", Component:AddYoutube},

        { path:"/dashboard/vendor/job-openings", Component:JobOpenings},
        { path:"/dashboard/vendor/add-job-openings", Component:AddJobOpenings},
        { path:"/dashboard/vendor/edit-job-openings/:id", Component:EditJobOpenings},
        { path:"/dashboard/vendor/payment-method/:id", Component:PaymentMethod},
        { path:"/dashboard/vendor/adds-membership", Component:AddsMembership},
        { path:"/dashboard/vendor/ad-spaces", Component:AddSpaces},
        { path:"/dashboard/vendor/menu-items/:id", Component:MenuItems},
        { path:"/dashboard/vendor/sale-items/", Component:SaleItems},
        { path:"/dashboard/admin/accounts-payable", Component:AccountsPayable},
        { path:"/dashboard/admin/edit-payable/:id", Component:EditAccountsPayable},
        { path:"/dashboard/admin/add-payable", Component:AddAccountsPayable},
        { path:"/dashboard/admin/countries", Component:Countries},
        { path:"/dashboard/admin/contact-enquiries", Component:ContactEnquiries},
        { path:"/dashboard/admin/add-countries", Component:AddCountries},
        { path:"/dashboard/admin/edit-countries/:id", Component:EditCountries},
        { path:"/dashboard/admin/view-contact-inquiry/:id", Component:ViewContactInquiry},
        { path:"/dashboard/admin/blogs", Component:Blogs},
        { path:"/dashboard/admin/add-blog", Component:AddBlog},
        { path:"/dashboard/admin/edit-blog/:id", Component:EditBlog},
        { path:"/dashboard/admin/manage-packages", Component:ManagePackage},
        { path:"/dashboard/admin/add-package", Component:AddPackage},
        { path:"/dashboard/admin/add-promotion-coupon", Component:AddPromotion},
        
        { path:"/dashboard/admin/manage-adds", Component:ManageAdds},
        { path:"/dashboard/admin/add-addvertisement-package", Component:AddvertisementPackage},
        

        // User Url's

        { path:"/dashboard/user/roleslist/:id", Component:RolesList},
        { path:"/dashboard/user/trash/:id", Component:Trash},
        { path:"/dashboard/user/backup/:id", Component:Backup},
        { path:"/dashboard/user/add-user/", Component:AddUser},
        { path:"/dashboard/user/users-list", Component:Userslist},
        { path:"/dashboard/user/edit-user/:id", Component:Edituser},
        { path:"/dashboard/user/adsense", Component:Adsense},
        { path:"/dashboard/user/manage-pages", Component:ManagePages},
        { path:"/dashboard/user/add-category", Component:AddCategory},
        { path:"/dashboard/user/edit-page/:id", Component:EditPage},
        { path:"/dashboard/user/categories", Component:Categories},
        { path:"/dashboard/user/edit-category/:id", Component:EditCategory},
        { path:"/dashboard/user/all-vendors", Component:AllVendors},
        { path:"/dashboard/user/edit-vendor/:id", Component:EditVendor},
        { path:"/dashboard/user/all-membership", Component:AllMembership},
        { path:"/dashboard/user/no-membership", Component:NoMembership},
        { path:"/dashboard/user/suspended-vendors", Component:SuspendedVendors},
        { path:"/dashboard/user/featured-vendors", Component:FeaturedVendors},
        { path:"/dashboard/user/hot-deals-vendors", Component:HotDealsVendors},
        { path:"/dashboard/user/add-space-vendors", Component:AddSpaceVendors},
        { path:"/dashboard/user/video-membership-vendors", Component:VideoMembershipVendors},
        { path:"/dashboard/user/add-vendor", Component:AddVendor},
        { path:"/dashboard/user/admin-membership-package", Component:AdminMembershipPackage},
        { path:"/dashboard/user/edit-admin-membership", Component:EditAdminMembership},
        { path:"/dashboard/user/promotions-discount", Component:PromotionsDiscount},
        { path:"/dashboard/user/edit-promotions-discount/:id", Component:EditPromotionsDiscount},
        { path:"/dashboard/user/vendor-profile", Component:VendorProfile},
        { path:"/dashboard/user/my-wallet", Component:MyWallet},
        { path:"/dashboard/user/vendor-membership-package", Component:VendorMembershipPackage},
        { path:"/dashboard/user/vendor-coupon", Component:VendorCoupon},
        { path:"/dashboard/user/add-vendor-coupon", Component:AddVendorCoupon},
        { path:"/dashboard/user/edit-vendor-coupon/:id", Component:EditVendorCoupon},
        { path:"/dashboard/user/vendor-photogallery", Component:VendorPhotogallery},
        { path:"/dashboard/user/vendor-videogallery", Component:VendorVideoGallery},
        { path:"/dashboard/user/add-video-gallery/", Component:AddVendorVideoGallery},
        { path:"/dashboard/user/edit-video-gallery/:id", Component:EditVideoGallery},
        { path:"/dashboard/user/job-openings", Component:JobOpenings},
        { path:"/dashboard/user/add-job-openings", Component:AddJobOpenings},
        { path:"/dashboard/user/edit-job-openings/:id", Component:EditJobOpenings},
        { path:"/dashboard/user/payment-method/:id", Component:PaymentMethod},
        { path:"/dashboard/user/adds-membership", Component:AddsMembership},
        { path:"/dashboard/user/ad-spaces", Component:AddSpaces},
        { path:"/dashboard/user/menu-items/:id", Component:MenuItems},
        { path:"/dashboard/user/sale-items/:id", Component:SaleItems},
        { path:"/dashboard/user/accounts-payable", Component:AccountsPayable},
        { path:"/dashboard/user/edit-payable/:id", Component:EditAccountsPayable},
        { path:"/dashboard/user/add-payable", Component:AddAccountsPayable},
        { path:"/dashboard/user/countries", Component:Countries},
        { path:"/dashboard/user/add-countries", Component:AddCountries},
        { path:"/dashboard/user/edit-countries/:id", Component:EditCountries},
        { path:"/dashboard/user/blogs", Component:Blogs},
        { path:"/dashboard/user/add-blog", Component:AddBlog},
        { path:"/dashboard/user/edit-blog/:id", Component:EditBlog},
        
]

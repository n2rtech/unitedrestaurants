import { Home, Airplay, Box, Gift, Send, HardDrive, Flag, DollarSign, Settings, UserCheck, FolderPlus, Command, Cloud, Grid, FileText, Server, BarChart, Users, Layers, ShoppingBag, List, Mail, MessageCircle, MessageSquare, GitPullRequest, Monitor, Heart, Clock, Zap, CheckSquare, Calendar, Image, Film, HelpCircle, Radio, Map, Edit, Sunrise, Package } from 'react-feather'


export const MENUITEMS = [

    {
        menutitle:"Dashboard",
        menucontent:"Dashboard",
        Items:[
            {
                title: 'Dashboard', path: `${process.env.PUBLIC_URL}/dashboard`, icon: Layers, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"Business Profile",
        menucontent:"Business Profile",
        Items:[
            {
                title: 'Business Profile', path: `${process.env.PUBLIC_URL}/dashboard/user/vendor-profile`, icon: Box, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"Menu items",
        menucontent:"Menu items",
        Items:[
            {
                title: 'Menu items', path: `${process.env.PUBLIC_URL}/dashboard/user/menu-items/${localStorage.getItem("id")}`, icon: Box, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"Items for sale",
        menucontent:"Items for sale",
        Items:[
            {
                title: 'Items for sale', path: `${process.env.PUBLIC_URL}/dashboard/user/sale-items/${localStorage.getItem("id")}`, icon: BarChart, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"My Wallet",
        menucontent:"My Wallet",
        Items:[
            {
                title: 'My Wallet', path: `${process.env.PUBLIC_URL}/dashboard/user/my-wallet`, icon: DollarSign, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"Membership Package",
        menucontent:"Membership Package",
        Items:[
            {
                title: 'Membership Package', path: `${process.env.PUBLIC_URL}/dashboard/user/vendor-membership-package`, icon: ShoppingBag, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"Deals (Coupons)",
        menucontent:"Deals (Coupons)",
        Items:[
            {
                title: 'Deals (Coupons)', path: `${process.env.PUBLIC_URL}/dashboard/user/vendor-coupon`, icon: Gift, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"Photo Gallery",
        menucontent:"Photo Gallery",
        Items:[
            {
                title: 'Photo Gallery', path: `${process.env.PUBLIC_URL}/dashboard/user/vendor-photogallery`, icon: Image, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"Videos",
        menucontent:"Videos",
        Items:[
            {
                title: 'Videos', path: `${process.env.PUBLIC_URL}/dashboard/user/vendor-videogallery`, icon: Film, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"Job Openings",
        menucontent:"Job Openings",
        Items:[
            {
                title: 'Job Openings', path: `${process.env.PUBLIC_URL}/dashboard/user/job-openings`, icon: Calendar, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"Advertisement",
        menucontent:"Advertisement",
        Items:[
            {
                title: 'Advertisement', icon: Layers, type: 'sub', badge2: true, active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/dashboard/user/adds-membership`, title: 'Membership', type: 'link' },  
                    { path: `${process.env.PUBLIC_URL}/dashboard/user/ad-spaces`, title: 'Ad Spaces', type: 'link' },
        
            ]
            }
        ]
    },
    {
        menutitle:"Manage Users",
        menucontent:"Manage Users",
        Items:[
            {
                title: 'Manage Users', path: `${process.env.PUBLIC_URL}/dashboard/user/users-list`, icon: UserCheck, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"Roles & Permission",
        menucontent:"Roles & Permission",
        Items:[
            {
                title: 'Roles & Permission', path: `${process.env.PUBLIC_URL}/pages/roles`, icon: Users, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"Manage Pages",
        menucontent:"Manage Pages",
        Items:[
            {
                title: 'Manage Pages', path: `${process.env.PUBLIC_URL}/dashboard/user/manage-pages`, icon: FileText, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"Blogs",
        menucontent:"Blogs",
        Items:[
            {
                title: 'Manage Blogs', path: `${process.env.PUBLIC_URL}/dashboard/user/blogs`, icon: FileText, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"Categories",
        menucontent:"Categories",
        Items:[
            {
                title: 'Categories', path: `${process.env.PUBLIC_URL}/dashboard/user/categories`, icon: Airplay, type: 'link', active: false, 
            },

        ]
    },

    {
        menutitle:"Vendors",
        menucontent:"Vendors",
        Items:[
            {
                title: 'Vendors', icon: FolderPlus, path: `${process.env.PUBLIC_URL}/dashboard/default`, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/dashboard/user/all-vendors`, title: 'All vendors', type: 'link' }, 
                    { path: `${process.env.PUBLIC_URL}/dashboard/user/all-membership`, title: 'Membership vendors', type: 'link' },   
                    { path: `${process.env.PUBLIC_URL}/dashboard/user/suspended-vendors`, title: 'Suspended vendors', type: 'link' },  
                    { path: `${process.env.PUBLIC_URL}/dashboard/user/featured-vendors`, title: 'Featured Vendors', type: 'link' },  
                    { path: `${process.env.PUBLIC_URL}/dashboard/user/hot-deals-vendors`, title: 'Hot deals vendors', type: 'link' },  
                    { path: `${process.env.PUBLIC_URL}/dashboard/user/add-space-vendors`, title: 'Ad space vendors', type: 'link' },
                   
        
            ]
            }
        ]
    },
    {
        menutitle:"Membership packages",
        menucontent:"Membership packages",
        Items:[
            {
                title: 'Membership packages', path: `${process.env.PUBLIC_URL}/dashboard/user/admin-membership-package`, icon: Grid, type: 'link', active: false, 
            },

        ]
    },

    {
        menutitle:"Promotions/discounts",
        menucontent:"Promotions/discounts",
        Items:[
            {
                title: 'Promotions/discounts', path: `${process.env.PUBLIC_URL}/dashboard/user/promotions-discount`, icon: Gift, type: 'link', active: false, 
            },

        ]
    },
    {
        menutitle:"Accounts Payable",
        menucontent:"Accounts Payable",
        Items:[
            {
                title: 'Accounts Payable', path: `${process.env.PUBLIC_URL}/dashboard/user/accounts-payable`, icon: Package, type: 'link', active: false, 
            },

        ]
    },
    {
        menutitle:"Countries",
        menucontent:"Countries",
        Items:[
            {
                title: 'Countries', path: `${process.env.PUBLIC_URL}/dashboard/user/countries`, icon: Flag, type: 'link', active: false, 
            },

        ]
    },
    {
        menutitle:"Google Adsense",
        menucontent:"Google Adsense",
        Items:[
            {
                title: 'Google Adsense', path: `${process.env.PUBLIC_URL}/dashboard/user/adsense`, icon: DollarSign, type: 'link', active: false, 
            },

        ]
    },
    {
        menutitle:"Site settings",
        menucontent:"Site settings",
        Items:[
            {
                title: 'Site settings', path: `${process.env.PUBLIC_URL}/app/bookmark`, icon: Settings, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/app/bookmark`, title: 'Site settings', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/dashboard/user/trash/`+localStorage.getItem("id"), title: 'Trash', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/dashboard/user/backup/`+localStorage.getItem("id"), title: 'Backup', type: 'link' },
            ]
            },

        ]
    },

]

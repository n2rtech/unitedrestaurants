import { Home, Users, Layers } from 'react-feather'


export const MENUITEMS = [
    {
        menutitle:"General",
        menucontent:"Dashboards,Widgets",
        Items:[
            {
                title: 'Dashboard', icon: Home, path: `${process.env.PUBLIC_URL}/dashboard/default`, type: 'link', active: false,
            }
        ]
    },

    {
        menutitle:"Roles & Permission",
        menucontent:"Roles & Permission",
        Items:[
            {
                title: 'Roles & Permission', path: `${process.env.PUBLIC_URL}/dashboard/admin/Dubai/roleslist`, icon: Users, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"Manage Pages",
        menucontent:"Manage Pages",
        Items:[
            {
                title: 'Manage Pages', path: `${process.env.PUBLIC_URL}/dashboard/admin/Dubai/manage-pages`, icon: Users, type: 'link', active: false,
            }
        ]
    },
    // {
    //     menutitle:"Permission",
    //     menucontent:"Permission",
    //     Items:[
    //         {
    //             title: 'Permission', path: `${process.env.PUBLIC_URL}/widgets/general`, icon: Users, type: 'sub', active: false,children: [
    //                 { path: `${process.env.PUBLIC_URL}/widgets/general`, title: 'Add permission', type: 'link' },          
    //                 { path: `${process.env.PUBLIC_URL}/app/ecommerce/product-list`, title: 'All permission list', type: 'link' },          
            
    //             ]
    //         }
    //     ]
    // },
    
    {
        menutitle:"Categories",
        menucontent:"Categories",
        Items:[
            {
                title: 'Categories', path: `${process.env.PUBLIC_URL}/dashboard/admin/Dubai/categories`, icon: Users, type: 'link', active: false, 
            },

        ]
    },

    {
        menutitle:"Vendors",
        menucontent:"Vendors",
        Items:[
            {
                title: 'Vendors', icon: Layers, path: `${process.env.PUBLIC_URL}/dashboard/default`, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/dashboard/admin/Dubai/all-vendors`, title: 'All vendors', type: 'link' }, 
                    { path: `${process.env.PUBLIC_URL}/dashboard/admin/Dubai/all-membership`, title: 'Membership vendors', type: 'link' },  
                    { path: `${process.env.PUBLIC_URL}/dashboard/admin/Dubai/no-membership`, title: 'No membership vendors', type: 'link' },  
                    { path: `${process.env.PUBLIC_URL}/dashboard/admin/Dubai/suspended-vendors`, title: 'Suspended vendors', type: 'link' },  
                    { path: `${process.env.PUBLIC_URL}/dashboard/admin/Dubai/featured-vendors`, title: 'Featured Vendors', type: 'link' },  
                    { path: `${process.env.PUBLIC_URL}/dashboard/admin/Dubai/hot-deals-vendors`, title: 'Hot deals vendors', type: 'link' },  
                    { path: `${process.env.PUBLIC_URL}/add-space-vendors`, title: 'Add spaces vendors', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/video-membership-vendors`, title: 'Video Membership vendors', type: 'link' },
        
            ]
            }
        ]
    },
    {
        menutitle:"Membership packages",
        menucontent:"Membership packages",
        Items:[
            {
                title: 'Membership packages', path: `${process.env.PUBLIC_URL}/ui-kits/avatar`, icon: Users, type: 'link', active: false, 
            },

        ]
    },
    {
        menutitle:"Notifications & messaging",
        menucontent:"Notifications & messaging",
        Items:[
            {
                title: 'Notifications & messaging', path: `${process.env.PUBLIC_URL}/ui-kits/helperclass`, icon: Users, type: 'link', active: false, 
            },

        ]
    },
    {
        menutitle:"Promotions/discounts",
        menucontent:"Promotions/discounts",
        Items:[
            {
                title: 'Promotions/discounts', path: `${process.env.PUBLIC_URL}/ui-kits/grid`, icon: Users, type: 'link', active: false, 
            },

        ]
    },
    {
        menutitle:"Accounts Payable",
        menucontent:"Accounts Payable",
        Items:[
            {
                title: 'Accounts Payable', path: `${process.env.PUBLIC_URL}/ui-kits/modal`, icon: Users, type: 'link', active: false, 
            },

        ]
    },
    {
        menutitle:"Countries",
        menucontent:"Countries",
        Items:[
            {
                title: 'Countries', path: `${process.env.PUBLIC_URL}/ui-kits/spinner`, icon: Users, type: 'link', active: false, 
            },

        ]
    },
    {
        menutitle:"Google Adsense",
        menucontent:"Google Adsense",
        Items:[
            {
                title: 'Google Adsense', path: `${process.env.PUBLIC_URL}/bonus-ui/scrollable`, icon: Users, type: 'link', active: false, 
            },

        ]
    },
    {
        menutitle:"Site settings",
        menucontent:"Site settings",
        Items:[
            {
                title: 'Site settings', path: `${process.env.PUBLIC_URL}/app/bookmark`, icon: Users, type: 'link', active: false, 
            },

        ]
    },
]

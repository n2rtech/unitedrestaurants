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
        menutitle:"Roles",
        menucontent:"Roles",
        Items:[
            {
                title: 'Roles', path: `${process.env.PUBLIC_URL}/pages/searchpage`, icon: Users, type: 'link', active: false,
            }
        ]
    },

    {
        menutitle:"Permission",
        menucontent:"Permission",
        Items:[
            {
                title: 'Permission', path: `${process.env.PUBLIC_URL}/widgets/general`, icon: Users, type: 'sub', active: false,children: [
                    { path: `${process.env.PUBLIC_URL}/widgets/general`, title: 'Add permission', type: 'link' },          
                    { path: `${process.env.PUBLIC_URL}/app/ecommerce/product-list`, title: 'All permission list', type: 'link' },          
            
                ]
            }
        ]
    },
    
    {
        menutitle:"Categories",
        menucontent:"Categories",
        Items:[
            {
                title: 'Categories', path: `${process.env.PUBLIC_URL}/app/ecommerce/product/Dubai`, icon: Users, type: 'link', active: false, 
            },

        ]
    },

    {
        menutitle:"Vendors",
        menucontent:"Vendors",
        Items:[
            {
                title: 'Vendors', icon: Layers, path: `${process.env.PUBLIC_URL}/dashboard/default`, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/pages/samplepage`, title: 'All membership vendors', type: 'link' },  
                    { path: `${process.env.PUBLIC_URL}/app/ecommerce/payment-details`, title: 'No membership vendors', type: 'link' },  
                    { path: `${process.env.PUBLIC_URL}/bonus-ui/pagination`, title: 'Suspended vendors', type: 'link' },  
                    { path: `${process.env.PUBLIC_URL}/app/ecommerce/pricing`, title: 'Featured Vendors', type: 'link' },  
                    { path: `${process.env.PUBLIC_URL}/app/users/userProfile`, title: 'Hot deals vendors', type: 'link' },  
                    { path: `${process.env.PUBLIC_URL}/pages/searchpage`, title: 'Add spaces vendors', type: 'link' },
        
            ]
            }
        ]
    },
    {
        menutitle:"Merchants",
        menucontent:"Merchants",
        Items:[
            {
                title: 'Merchants', icon: Layers, path: `${process.env.PUBLIC_URL}/dashboard/default`, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/app/users/userCards`, title: 'Add a merchant', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/app/task`, title: 'All merchants', type: 'link' },  
                    { path: `${process.env.PUBLIC_URL}/app/contact`, title: 'Subscribed merchants', type: 'link' },  
                    { path: `${process.env.PUBLIC_URL}/app/social-app`, title: 'Video membership merchants', type: 'link' },  
                    { path: `${process.env.PUBLIC_URL}/app/todo-app/todo`, title: 'Suspended merchants', type: 'link' },              
        
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
                title: 'Site settings', path: `${process.env.PUBLIC_URL}/ui-kits/tab-bootstrap`, icon: Users, type: 'link', active: false, 
            },

        ]
    },
]

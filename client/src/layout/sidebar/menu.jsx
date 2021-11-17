import { Home, Airplay, Box, FolderPlus, Command, Cloud, FileText, Server, BarChart, Users, Layers, ShoppingBag, List, Mail, MessageCircle, GitPullRequest, Monitor, Heart, Clock, Zap, CheckSquare, Calendar, Image, Film, HelpCircle, Radio, Map, Edit, Sunrise, Package } from 'react-feather'

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
                title: 'Roles', path: `${process.env.PUBLIC_URL}/dashboard/default`, icon: Users, type: 'link', active: false,
            }
        ]
    },

    {
        menutitle:"Permission",
        menucontent:"Permission",
        Items:[
            {
                title: 'Permission', path: `${process.env.PUBLIC_URL}/dashboard/default`, icon: Users, type: 'link', active: false,
            }
        ]
    },
    
    {
        menutitle:"Categories",
        menucontent:"Categories",
        Items:[
            {
                title: 'Categories', path: `${process.env.PUBLIC_URL}/dashboard/default`, icon: Users, type: 'link', active: false, 
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
                    { path: `${process.env.PUBLIC_URL}/pages/samplepage`, title: 'No membership vendors', type: 'link' },  
                    { path: `${process.env.PUBLIC_URL}/pages/samplepage`, title: 'Suspended vendors', type: 'link' },  
                    { path: `${process.env.PUBLIC_URL}/pages/samplepage`, title: 'Featured Vendors', type: 'link' },  
                    { path: `${process.env.PUBLIC_URL}/pages/samplepage`, title: 'Hot deals vendors', type: 'link' },  
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
                    { path: `${process.env.PUBLIC_URL}/pages/samplepage`, title: 'Add a merchant', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/pages/samplepage`, title: 'All merchants', type: 'link' },  
                    { path: `${process.env.PUBLIC_URL}/pages/samplepage`, title: 'Subscribed merchants', type: 'link' },  
                    { path: `${process.env.PUBLIC_URL}/pages/samplepage`, title: 'Video membership merchants', type: 'link' },  
                    { path: `${process.env.PUBLIC_URL}/pages/samplepage`, title: 'Suspended merchants', type: 'link' },              
        
            ]
            }
        ]
    },
    {
        menutitle:"Membership packages",
        menucontent:"Membership packages",
        Items:[
            {
                title: 'Membership packages', path: `${process.env.PUBLIC_URL}/dashboard/default`, icon: Users, type: 'link', active: false, 
            },

        ]
    },
    {
        menutitle:"Notifications & messaging",
        menucontent:"Notifications & messaging",
        Items:[
            {
                title: 'Notifications & messaging', path: `${process.env.PUBLIC_URL}/dashboard/default`, icon: Users, type: 'link', active: false, 
            },

        ]
    },
    {
        menutitle:"Promotions/discounts",
        menucontent:"Promotions/discounts",
        Items:[
            {
                title: 'Promotions/discounts', path: `${process.env.PUBLIC_URL}/dashboard/default`, icon: Users, type: 'link', active: false, 
            },

        ]
    },
    {
        menutitle:"Accounts Payable",
        menucontent:"Accounts Payable",
        Items:[
            {
                title: 'Accounts Payable', path: `${process.env.PUBLIC_URL}/dashboard/default`, icon: Users, type: 'link', active: false, 
            },

        ]
    },
    {
        menutitle:"Countries",
        menucontent:"Countries",
        Items:[
            {
                title: 'Countries', path: `${process.env.PUBLIC_URL}/dashboard/default`, icon: Users, type: 'link', active: false, 
            },

        ]
    },
    {
        menutitle:"Google Adsense",
        menucontent:"Google Adsense",
        Items:[
            {
                title: 'Google Adsense', path: `${process.env.PUBLIC_URL}/dashboard/default`, icon: Users, type: 'link', active: false, 
            },

        ]
    },
    {
        menutitle:"Site settings",
        menucontent:"Site settings",
        Items:[
            {
                title: 'Site settings', path: `${process.env.PUBLIC_URL}/dashboard/default`, icon: Users, type: 'link', active: false, 
            },

        ]
    },
]
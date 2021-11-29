import { Home, Airplay, Box, Gift, Send, HardDrive, Flag, DollarSign, Settings, FolderPlus, Command, Cloud, Grid, FileText, Server, BarChart, Users, Layers, ShoppingBag, List, Mail, MessageCircle, MessageSquare, GitPullRequest, Monitor, Heart, Clock, Zap, CheckSquare, Calendar, Image, Film, HelpCircle, Radio, Map, Edit, Sunrise, Package } from 'react-feather'


export const MENUITEMS = [
    {
        menutitle:"General",
        menucontent:"Dashboards,Widgets",
        Items:[
            {
                title: 'Dashboard', icon: Home, path: `${process.env.PUBLIC_URL}/dashboard/admin`, type: 'link', active: false,
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
                title: 'Manage Pages', path: `${process.env.PUBLIC_URL}/dashboard/admin/manage-pages`, icon: FileText, type: 'link', active: false,
            }
        ]
    },
    
    {
        menutitle:"Categories",
        menucontent:"Categories",
        Items:[
            {
                title: 'Categories', path: `${process.env.PUBLIC_URL}/dashboard/admin/categories`, icon: Airplay, type: 'link', active: false, 
            },

        ]
    },

    {
        menutitle:"Vendors",
        menucontent:"Vendors",
        Items:[
            {
                title: 'Vendors', icon: FolderPlus, path: `${process.env.PUBLIC_URL}/dashboard/default`, type: 'sub', active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/dashboard/admin/all-vendors`, title: 'All vendors', type: 'link' }, 
                    { path: `${process.env.PUBLIC_URL}/dashboard/admin/all-membership`, title: 'Membership vendors', type: 'link' },  
                    { path: `${process.env.PUBLIC_URL}/dashboard/admin/no-membership`, title: 'No membership vendors', type: 'link' },  
                    { path: `${process.env.PUBLIC_URL}/dashboard/admin/suspended-vendors`, title: 'Suspended vendors', type: 'link' },  
                    { path: `${process.env.PUBLIC_URL}/dashboard/admin/featured-vendors`, title: 'Featured Vendors', type: 'link' },  
                    { path: `${process.env.PUBLIC_URL}/dashboard/admin/hot-deals-vendors`, title: 'Hot deals vendors', type: 'link' },  
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
                title: 'Membership packages', path: `${process.env.PUBLIC_URL}/dashboard/admin/admin-membership-package`, icon: Grid, type: 'link', active: false, 
            },

        ]
    },
    {
        menutitle:"Notifications & messaging",
        menucontent:"Notifications & messaging",
        Items:[
            {
                title: 'Notifications & messaging', path: `${process.env.PUBLIC_URL}/ui-kits/helperclass`, icon: MessageSquare, type: 'link', active: false, 
            },

        ]
    },
    {
        menutitle:"Promotions/discounts",
        menucontent:"Promotions/discounts",
        Items:[
            {
                title: 'Promotions/discounts', path: `${process.env.PUBLIC_URL}/dashboard/admin/promotions-discount`, icon: Gift, type: 'link', active: false, 
            },

        ]
    },
    {
        menutitle:"Accounts Payable",
        menucontent:"Accounts Payable",
        Items:[
            {
                title: 'Accounts Payable', path: `${process.env.PUBLIC_URL}/dashboard/admin/accounts-payable`, icon: Package, type: 'link', active: false, 
            },

        ]
    },
    {
        menutitle:"Countries",
        menucontent:"Countries",
        Items:[
            {
                title: 'Countries', path: `${process.env.PUBLIC_URL}/dashboard/admin/countries`, icon: Flag, type: 'link', active: false, 
            },

        ]
    },
    {
        menutitle:"Google Adsense",
        menucontent:"Google Adsense",
        Items:[
            {
                title: 'Google Adsense', path: `${process.env.PUBLIC_URL}/bonus-ui/scrollable`, icon: DollarSign, type: 'link', active: false, 
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
                    { path: `${process.env.PUBLIC_URL}/dashboard/admin/trash`, title: 'Trash', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/dashboard/admin/backup`, title: 'Backup', type: 'link' },
            ]
            },

        ]
    },
]

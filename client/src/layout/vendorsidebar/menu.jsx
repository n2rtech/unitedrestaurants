import { Home, Airplay, Box, Gift, Send, HardDrive, DollarSign, FolderPlus, Command, Cloud, FileText, Server, BarChart, Users, Layers, ShoppingBag, List, Mail, MessageCircle, GitPullRequest, Monitor, Heart, Clock, Zap, CheckSquare, Calendar, Image, Film, HelpCircle, Radio, Map, Edit, Sunrise, Package } from 'react-feather'

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
                title: 'Business Profile', path: `${process.env.PUBLIC_URL}/dashboard/vendor/vendor-profile`, icon: Box, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"Menu items",
        menucontent:"Menu items",
        Items:[
            {
                title: 'Menu items', path: `${process.env.PUBLIC_URL}/dashboard/vendor/menu-items/${localStorage.getItem("id")}`, icon: Box, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"Items for sale",
        menucontent:"Items for sale",
        Items:[
            {
                title: 'Items for sale', path: `${process.env.PUBLIC_URL}/dashboard/vendor/sale-items/${localStorage.getItem("id")}`, icon: BarChart, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"My Wallet",
        menucontent:"My Wallet",
        Items:[
            {
                title: 'My Wallet', path: `${process.env.PUBLIC_URL}/dashboard/vendor/my-wallet`, icon: DollarSign, type: 'link', active: false,
            }
        ]
    },
    // {
    //     menutitle:"Payment Method",
    //     menucontent:"Payment Method",
    //     Items:[
    //         {
    //             title: 'Payment Method', path: `${process.env.PUBLIC_URL}/dashboard/vendor/payment-method/${localStorage.getItem("id")}`, icon: Send, type: 'link', active: false,
    //         }
    //     ]
    // },
    {
        menutitle:"Membership Package",
        menucontent:"Membership Package",
        Items:[
            {
                title: 'Membership Package', path: `${process.env.PUBLIC_URL}/dashboard/vendor/vendor-membership-package`, icon: ShoppingBag, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"Deals (Coupons)",
        menucontent:"Deals (Coupons)",
        Items:[
            {
                title: 'Deals (Coupons)', path: `${process.env.PUBLIC_URL}/dashboard/vendor/vendor-coupon`, icon: Gift, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"Photo Gallery",
        menucontent:"Photo Gallery",
        Items:[
            {
                title: 'Photo Gallery', path: `${process.env.PUBLIC_URL}/dashboard/vendor/vendor-photogallery`, icon: Image, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"Videos",
        menucontent:"Videos",
        Items:[
            {
                title: 'Videos', path: `${process.env.PUBLIC_URL}/dashboard/vendor/vendor-videogallery`, icon: Film, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"Job Openings",
        menucontent:"Job Openings",
        Items:[
            {
                title: 'Job Openings', path: `${process.env.PUBLIC_URL}/dashboard/vendor/job-openings`, icon: Calendar, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"Advertisement",
        menucontent:"Advertisement",
        Items:[
            {
                title: 'Advertisement', icon: Layers, type: 'sub', badge2: true, active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/dashboard/vendor/adds-membership`, title: 'Membership', type: 'link' },  
                    { path: `${process.env.PUBLIC_URL}/dashboard/vendor/ad-spaces`, title: 'Ad Spaces', type: 'link' },
        
            ]
            }
        ]
    },
]

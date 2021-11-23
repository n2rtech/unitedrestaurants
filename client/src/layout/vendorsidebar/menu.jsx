import { Home, Airplay, Box, Gift, Send, HardDrive, DollarSign, FolderPlus, Command, Cloud, FileText, Server, BarChart, Users, Layers, ShoppingBag, List, Mail, MessageCircle, GitPullRequest, Monitor, Heart, Clock, Zap, CheckSquare, Calendar, Image, Film, HelpCircle, Radio, Map, Edit, Sunrise, Package } from 'react-feather'
export const MENUITEMS = [

    {
        menutitle:"Dashboard",
        menucontent:"Dashboard",
        Items:[
            {
                title: 'Dashboard', path: `${process.env.PUBLIC_URL}/dashboard/ecommerce`, icon: Layers, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"Business Profile",
        menucontent:"Business Profile",
        Items:[
            {
                title: 'Business Profile', path: `${process.env.PUBLIC_URL}/dashboard/vendor/London/vendor-profile`, icon: Box, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"My Wallet",
        menucontent:"My Wallet",
        Items:[
            {
                title: 'My Wallet', path: `${process.env.PUBLIC_URL}/dashboard/vendor/London/my-wallet`, icon: DollarSign, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"Payment Method",
        menucontent:"Payment Method",
        Items:[
            {
                title: 'Payment Method', path: `${process.env.PUBLIC_URL}/dashboard/vendor/London/vendor-membership-package`, icon: Send, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"Membership Package",
        menucontent:"Membership Package",
        Items:[
            {
                title: 'Membership Package', path: `${process.env.PUBLIC_URL}/dashboard/vendor/London/vendor-membership-package`, icon: ShoppingBag, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"Deals (Coupons)",
        menucontent:"Deals (Coupons)",
        Items:[
            {
                title: 'Deals (Coupons)', path: `${process.env.PUBLIC_URL}/dashboard/vendor/London/vendor-coupon`, icon: Gift, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"Photo Gallery",
        menucontent:"Photo Gallery",
        Items:[
            {
                title: 'Photo Gallery', path: `${process.env.PUBLIC_URL}/dashboard/vendor/London/vendor-photogallery`, icon: Image, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"Videos",
        menucontent:"Videos",
        Items:[
            {
                title: 'Videos', path: `${process.env.PUBLIC_URL}/dashboard/vendor/London/vendor-videogallery`, icon: Film, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"Job Openings",
        menucontent:"Job Openings",
        Items:[
            {
                title: 'Job Openings', path: `${process.env.PUBLIC_URL}/dashboard/vendor/London/job-openings`, icon: Calendar, type: 'link', active: false,
            }
        ]
    },
    {
        menutitle:"Add Spaces",
        menucontent:"Add Spaces",
        Items:[
            {
                title: 'Add Spaces', path: `${process.env.PUBLIC_URL}/dashboard/vendor/London/job-openings`, icon: Package, type: 'link', active: false,
            }
        ]
    },
]
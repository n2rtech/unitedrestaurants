import { Home, Airplay, Box, FolderPlus, Command, Cloud, FileText, Server, BarChart, Users, Layers, ShoppingBag, List, Mail, MessageCircle, GitPullRequest, Monitor, Heart, Clock, Zap, CheckSquare, Calendar, Image, Film, HelpCircle, Radio, Map, Edit, Sunrise, Package } from 'react-feather'

export const MENUITEMS = [
    {
        menutitle:"General",
        menucontent:"Dashboards,Widgets",
        Items:[
            {
                title: 'Dashboard', icon: Home, path: `${process.env.PUBLIC_URL}/dashboard/default`, type: 'link', active: true,
            }
        ]
    },

    {
        menutitle:"Manage Roles",
        menucontent:"Manage Roles",
        Items:[
            {
                title: 'Manage Roles', path: `${process.env.PUBLIC_URL}/dashboard/default`, icon: Users, type: 'link', active: false,
            }
        ]
    },

    {
        menutitle:"Manage Permission",
        menucontent:"Manage Permission",
        Items:[
            {
                title: 'Manage Permission', path: `${process.env.PUBLIC_URL}/dashboard/default`, icon: Users, type: 'link', active: false,
            }
        ]
    },
    
    {
        menutitle:"Manage Categories",
        menucontent:"Manage Categories",
        Items:[
            {
                title: 'Manage Categories', path: `${process.env.PUBLIC_URL}/dashboard/default`, icon: Users, type: 'link', active: false, 
            },

        ]
    },

    {
        menutitle:"Vendors",
        menucontent:"Manage Vendors",
        Items:[
            {
                title: 'Manage Membership packages', icon: Layers, type: 'sub', badge2: true, active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/pages/samplepage`, title: 'Sample Page', type: 'link' },  
                    { path: `${process.env.PUBLIC_URL}/pages/searchpage`, title: 'Search Pages', type: 'link' },
        
            ]
            },
            {
                
            }
        ]
    }
]
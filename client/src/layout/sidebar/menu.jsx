import { Home, Airplay, Box, FolderPlus, Command, Cloud, FileText, Server, BarChart, Users, Layers, ShoppingBag, List, Mail, MessageCircle, GitPullRequest, Monitor, Heart, Clock, Zap, CheckSquare, Calendar, Image, Film, HelpCircle, Radio, Map, Edit, Sunrise, Package } from 'react-feather'
export const MENUITEMS = [
    {
        menutitle:"General",
        menucontent:"Dashboards,Widgets",
        Items:[
            {
                title: 'Dashboard', icon: Home, type: 'sub',badge: "badge badge-success",badgetxt:"2", active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/dashboard/default`, title: 'Default', type: 'link' },
                    { path: `${process.env.PUBLIC_URL}/dashboard/ecommerce`, title: 'Ecommerce', type: 'link' },
                ]
            },
            // {
            //     title: 'Widgets', icon: Airplay, type: 'sub', active: false, children: [
            //         { path: `${process.env.PUBLIC_URL}/widgets/general`, title: 'General', type: 'link' },
            //         { path: `${process.env.PUBLIC_URL}/widgets/chart`, title: 'Chart', type: 'link' },
            //     ]
            // },
        ]
    },

    {
        menutitle:"Roles",
        menucontent:"Manage Roles",
        Items:[
            {
                title: 'Add / Edit Roles',icon:Box, type: 'sub',badge: "badge badge-danger",badgetxt:"New",active:false, children: [
                    
                ]
            }
        ]
    },

    {
        menutitle:"Permissions",
        menucontent:"Manage Permissions",
        Items:[
            {
                title: 'Add / Edit Permisisons', icon: Box, type: 'sub',  active: false, children: [
                    { path: `${process.env.PUBLIC_URL}/ui-kits/statecolor`, title: 'suspended permission list', type: 'link' },
            ]
            }
        ]
    },
    
    
    {
        menutitle:"Categories",
        menucontent:"Manage Categories",
        Items:[
            {
                title: 'Departments', icon: FileText, type: 'sub', menutitle:"Forms & Table",menucontent:"Ready to use froms & tables", active: false, children: [
         
            ],
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
import { FaUsers } from "react-icons/fa6";
import { MdReport, MdToday, MdAdminPanelSettings } from "react-icons/md";


const admindata = [
    {
        id: 1,
        name: 'Users',
        icon: FaUsers,
        value: 500,
    },
    {
        id: 2,
        name: 'Reported Users',
        icon: MdReport,
        value: 500,
    },
    {
        id: 3,
        name: 'Today Joined',
        icon: MdToday,
        value: 500,
    },
    {
        id: 4,
        name: 'Total Admins',
        icon: MdAdminPanelSettings,
        value: 500,
    },
]

export {admindata}
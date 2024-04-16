import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { MdOutlineDashboard } from 'react-icons/md';
import { BiWallet } from 'react-icons/bi';
import { GiExpense } from 'react-icons/gi';
import { IoMdNotifications } from 'react-icons/io';

const Menu = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const items = [
    { title: 'Dashboard', Icon: MdOutlineDashboard, href: '/dashboard/Dashboard ' },
    { title: 'Budget', Icon: BiWallet, href: '/dashboard/budget' },
    { title: 'Expenses', Icon: GiExpense, href: '/dashboard/expenses' },
    { title: 'Notification', Icon: IoMdNotifications, href: '/dashboard/notification' },
    { title: 'Settings', Icon: FiSettings, href: '/dashboard/settings' },
  ];

  const handleItemClick = (title) => {
    setActiveItem(title);
  };

  return (
    <ul className='pt-10'>
      {items.map((item) => {
        const { title, href, Icon } = item;
        const isActive = activeItem === title;

        return (
          <li  key={title} className={`h-14 ${isActive ? 'Active' : ''}`}>
            <Link
              to={href}
              className={`flex items-center gap-4 p-5 transition-all text-sm font-medium text-white hover:bg-zinc-900 border-zinc-800 ${isActive ? 'text-yellow-500' : ''}`}
              onClick={() => handleItemClick(title)}
            >
              <span className='text-sm'><Icon size={20} /></span>
              <span className='hidden lg:flex'>{title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;

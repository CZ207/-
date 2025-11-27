import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Menu, X, Globe, Star } from 'lucide-react';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: '首页', path: '/' },
    { name: '平台介绍', path: '/about' },
    { name: '任务看板', path: '/projects' },
    { name: '成长与培训', path: '/growth' },
    { name: '标准与术语', path: '/standards' },
    { name: '合作案例', path: '/cases' },
    { name: '加入我们', path: '/join' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-2">
                <div className="w-8 h-8 bg-primary-700 rounded flex items-center justify-center text-white">
                    <Star size={20} fill="white" />
                </div>
                <span className="font-bold text-xl tracking-tight text-primary-900">译界星链</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-primary-700 bg-primary-50'
                        : 'text-stone-600 hover:text-primary-700 hover:bg-stone-50'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-stone-400 hover:text-primary-700 hover:bg-stone-100 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? 'text-primary-700 bg-primary-50'
                        : 'text-stone-600 hover:text-primary-700 hover:bg-stone-50'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                 <div className="w-6 h-6 bg-primary-700 rounded flex items-center justify-center text-white">
                    <Star size={14} fill="white" />
                </div>
                <span className="font-bold text-lg text-white">译界星链</span>
              </div>
              <p className="text-sm text-stone-400">
                红色文化 + 多语种 + 高校译者实践平台。<br/>
                连接高校与世界，讲好中国故事。
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">快速链接</h3>
              <ul className="space-y-2 text-sm">
                <li><NavLink to="/projects" className="hover:text-white">任务看板</NavLink></li>
                <li><NavLink to="/standards" className="hover:text-white">术语库</NavLink></li>
                <li><NavLink to="/join" className="hover:text-white">加入联盟</NavLink></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">联系我们</h3>
              <p className="text-sm text-stone-400 mb-2">Email: nvgudp8642@163.com(项目负责人邮箱)</p>
              <p className="text-sm text-stone-400">西安外国语大学高级翻译学院</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-stone-800 text-center text-xs text-stone-500">
            &copy; 2025 YiJieXingLian Translator Alliance. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

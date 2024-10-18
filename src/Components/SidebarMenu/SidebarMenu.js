import React from 'react';
import styles from './SidebarMenu.module.css';
import MenuItem from './MenuItem';

const menuItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/64eb59423b81e707460c67f91fc441b46c2d6592887dfb4af82d716c187ea0d5?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1", text: "Dashboard", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8c075aad20d69bc53fe1f26e305686dabff38e8f7bae17a83c00452ded8ff5c9?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1", text: "Camera", isActive: true },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/868a78a87df4b181a38d087369dff1557eae14ea8b73f8ba58f208d28f75c468?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1", text: "Events", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bc46ae059471d0aaf42648948f23d7365767cf03adb8abcd401fe8eb45026834?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1", text: "Multiscreen", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a9a484bcf888b87928aeae8d666929603d77371524838b6fae7101eb605b0f00?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1", text: "Settings", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/83b842154ba2ce7d6f0e536e8736f0b45cd2f8c853b7d1f98c82707d9894c5a0?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1", text: "Organization setup", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4c00765f477695e188360925decec26bda6ec3f4f6a310f6251d0480dc8a323?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1", text: "Help and feedback", isActive: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0511ece32a97f598870056a1d83b4c4e273f1a2f6ce2643ddae2c47e71b4fbd?placeholderIfAbsent=true&apiKey=21c2172730ed406bb6f91788633e80d1", text: "About ArcisAI", isActive: false },
];

const SidebarMenu = () => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <h2 className={styles['visually-hidden']}>Sidebar Navigation</h2>
        <ul className={styles.menuList}>
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              text={item.text}
              isActive={item.isActive}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default SidebarMenu;
import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import Button from "@mui/material/Button";
import { useTranslation } from 'react-i18next';
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import "react-pro-sidebar/dist/css/styles.css";

const Sidebar = () => {
  const { t, i18n } = useTranslation(['translate']);
  const [menuCollapse, setMenuCollapse] = useState(false)
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  }

  return (
    <>
      <div className="sidebar">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">              
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? (
                <FiArrowRightCircle style={{cursor: 'pointer'}}/>
              ) : (
                <FiArrowLeftCircle style={{cursor: 'pointer'}}/>
              )}
            </div>
            <p style={{padding: '0px 0px 3% 4%'}}>{ !menuCollapse && (
              <>
                Poke API
              </>
            )}</p>
          </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem onClick={(e) => window.location.href = '/'} icon={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png" width={25} height={25}/>}>Pokemones</MenuItem>
              <MenuItem onClick={(e) => window.location.href = '/190811'} icon={<img src="https://www.svgrepo.com/show/276267/pokemon-trainer-pokemon.svg" width={25} height={25}/>}>Mi perfil</MenuItem>
              <div style={{marginTop: '40px'}}>
                <Button onClick={(e) => i18n.changeLanguage('en')}>Español</Button>
                <Button onClick={(e) => i18n.changeLanguage('es')}>Ingles</Button>
              </div>
            </Menu>
          </SidebarContent>
          <SidebarFooter className="center-a" style={{padding: '4% 15% 10% 15%'}}>
            {
              !menuCollapse && (
                <>
                  Idioma actual: {t("idioma")}
                </>
              )
            }
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import { NavLink } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import image from "../../styles/image/logo1.png";

import '../../App.css'
import { ROLE } from '../../constant';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0

        }
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            backgroundColor: "#fff",
            color: "#141532"
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },

    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#141532",
        boxShadow: '0 10px 30px - 12px rgb(0 0 0 / 42 %), 0 4px 25px 0px rgb(0 0 0 / 12 %), 0 8px 10px - 5px rgb(0 0 0 / 20 %)'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7)
    },
    line: {
        backgroundColor: "#4e4e4e",

    }
}));
const themeLight = createMuiTheme({
    palette: {
        background: {
            default: "#E2DFDF"
        }
    }, typography: {
        body1: {
            fontWeight: 400,
            fontSize: 14,
        }
    }
});
function ResponsiveDrawer(props) {
    const { windowsm } = props;
    const role = localStorage.getItem('role');


    const classes = useStyles();
    const theme = useTheme();

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        const handleStorageChange = (event) => {
          if (event.key === 'role') {
            // Xử lý khi dữ liệu trong localStorage thay đổi
            console.log('LocalStorage data changed:', event.newValue);
          }
        };
    
        // Thêm event listener để theo dõi thay đổi trong localStorage
        window.addEventListener('storage', handleStorageChange);
    
        // Cleanup function để loại bỏ event listener khi component unmounts
        return () => {
          window.removeEventListener('storage', handleStorageChange);
        };
      }, []);

    const category = [
        { 'text': 'Trang chủ', 'url': 'home', 'icon': (<DashboardRoundedIcon className="link-icon" />), role: [ROLE.ADMIN] },
        { 'text': 'Quản lý Sản phẩm', 'url': 'product', role: [ROLE.EMPLOYEE, ROLE.ADMIN, ROLE.USER] },
        { 'text': 'Quản lý Hóa đơn', 'url': 'order', role: [ROLE.EMPLOYEE, ROLE.ADMIN] },
        { 'text': 'Quản lý Danh mục', 'url': 'category', role: [ROLE.EMPLOYEE, ROLE.ADMIN] },
        { 'text': 'Quản lý Thương hiệu', 'url': 'brand', role: [ROLE.EMPLOYEE, ROLE.ADMIN] },
        { 'text': 'Quản lý Màu sắc', 'url': 'color', role: [ROLE.EMPLOYEE, ROLE.ADMIN] },
        { 'text': 'Quản lý Nhân viên', 'url': 'employee', role: [ROLE.ADMIN] },
        { 'text': 'Quản lý Tài khoản', 'url': 'account', role: [ROLE.ADMIN] }
    ]

    const date = new Date().getFullYear()
    const drawer = (
        <div>
            <div className="toolbar"  >
                {/* <Avatar variant="rounded" alt="avatar" src={logo} className={classes.large} />
                <div className="toolbar-right">
                    <h4 style={{ marginBottom: 0, marginTop: 0 }}>Nguyễn Văn A</h4>
                    <Button color="inherit" style={{ paddingLeft: 0 }} className="logout-btn">
                        <ExitToAppRoundedIcon /> <span style={{ paddingLeft: "5px" }}>Logout</span>
                    </Button>
                </div> */}
                <img src={image} style={{ width: "100%" }} />
            </div>
            <Divider className={classes.line} />
            <List className="links">
                {category.map((item, index) => {
                    let getSubPath = window.location.pathname.slice(1);
                    if (true) {
                        return (
                            <NavLink to={item.url} activeClassName={getSubPath === item.url || getSubPath.length === 0 ? "active-dashboard" : null}
                                key={index} className="link">
                                <ListItem button>
                                    {item.icon}
                                    <ListItemText primary={item.text} />
                                </ListItem>
                            </NavLink>
                        )
                    }
                })}
            </List>
            <span className="copy-right">Copyright &copy; {date} FangShop</span>

        </div >
    );

    const container = windowsm !== undefined ? () => window().document.body : undefined;

    return (
        <MuiThemeProvider className={classes.root} theme={themeLight}>
            <CssBaseline />
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
            >
                <MenuIcon />
            </IconButton>
            <nav className={classes.drawer} aria-label="mailbox folders" >
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css" >
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </MuiThemeProvider>
    );
}

ResponsiveDrawer.propTypes = {
    windowsm: PropTypes.func,
};

export default ResponsiveDrawer;
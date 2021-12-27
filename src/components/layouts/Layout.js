import classes from './Layout.module.css';
import MainNavigationLayout from './MainNavigationLayout';

function Layout(props) {
    return <div>
        <MainNavigationLayout/>
        <main className={classes.main}>{props.children}</main>
        
    </div>
}

export default Layout;
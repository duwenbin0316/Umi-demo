import { Menu } from "antd";
import Link from 'umi/link';
import styles from './global.css';

export default (props) =>  {
    return (
        <div>
            <Menu theme='dark' mode="horizontal">
                <Menu.Item><Link to='/'>index</Link></Menu.Item>
                <Menu.Item><Link to='/list'>list</Link></Menu.Item>
                <Menu.Item><Link to='/404'>404</Link></Menu.Item>
            </Menu>
            <div className={ styles.content }>
                { props.children }
            </div>
            <footer>Footer</footer>
        </div>
    )
};

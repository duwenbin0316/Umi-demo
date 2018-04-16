import Link from 'umi/link';
import { Button } from "antd";

export default () =>  {
    return (
        <div >
            <div>Index Page</div>
            <Link to="/list"><Button type='primary'>Go To list</Button></Link>
        </div>
    )
};

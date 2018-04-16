import router from "umi/router";
import { Button } from "antd";

export default () =>  {
    return (
        <div>
            <div>List Page</div>
            <Button type='primary' onClick={ () => {router.goBack()} }>Go Back</Button>
        </div>
    )
};

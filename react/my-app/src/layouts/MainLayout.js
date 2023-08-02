import {Component} from 'react';
import {Outlet} from "react-router-dom";

export class MainLayout extends Component{
    render() {

        return (
            <div>
                <Outlet/>
            </div>
        );
    }

}


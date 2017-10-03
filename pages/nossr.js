import React from 'react';
import ReactDOM from 'react-dom';
import PageHead from '../app/components/PageHead';
import PageScripts from '../app/components/PageScripts';
import Menu from '../app/components/Menu';
import NOSSR from 'react-no-ssr';

import { BrowserRouter } from 'react-router-dom';
import RouterApp from '../app/routerExample/RouterApp';

export default (props) => {
    return (
        <div>
            <NOSSR>
                <div>
                    <PageHead />
                    <Menu activeLink="/bootstrap"/>
                    <div className="container">
                        <h1 className="text-uppercase">No SSR</h1>
                        <p>This is client side rendered</p>
                        <div id="client-app">
                            <BrowserRouter>
                                <RouterApp/>
                            </BrowserRouter>
                        </div>
                    </div>
                    <PageScripts />
                </div>
            </NOSSR>
            <p><strong>This is server side rendered</strong></p>
        </div>
    )
}


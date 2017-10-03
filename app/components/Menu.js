import React from 'react';
import Link from 'next/link';

class Menu extends React.Component {
    render(){
        return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link href="/">
            <a className="navbar-brand">Nextjs</a>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link href="/">
                        <a className={this.props.activeLink == ''? 'nav-link active': 'nav-link'}>Home <span className="sr-only">(current)</span></a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/other">
                        <a className="nav-link">Other</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/bootstrap">
                        <a className="nav-link">Bootstrap</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/dynamic">
                        <a className={this.props.activeLink == '/dynamic'? 'nav-link active': 'nav-link'}>Dynamic Components</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/animationExamples" as="animations">
                        <a className={this.props.activeLink == '/animations'? 'nav-link active': 'nav-link'}>Animations</a>
                    </Link>
                </li>                
            </ul>
        </div>
      </nav>
    }
}

export default Menu;

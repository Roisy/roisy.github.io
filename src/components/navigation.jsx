import React, {useRef, useLayoutEffect, useState, Component} from 'react';
import {FiInstagram} from 'react-icons/fi';
import {FiYoutube} from 'react-icons/fi';
import {FiGithub} from 'react-icons/fi';

export class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {width: 0, height: 0};
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
		this.setState({width: window.innerWidth, height: window.innerHeight});
	}
	render() {
		return (
			<nav id="menu" className="navbar navbar-default navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<button
							type="button"
							className="navbar-toggle collapsed"
							data-toggle="collapse"
							data-target="#bs-example-navbar-collapse-1"
						>
							{' '}
							<span className="sr-only">Toggle navigation</span>{' '}
							<span className="icon-bar"></span> <span className="icon-bar"></span>{' '}
							<span className="icon-bar"></span>{' '}
						</button>
						<a className="navbar-brand page-scroll" href="#page-top">
							ROISY
						</a>{' '}
					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						{this.state.width > this.state.height ? (
							<ul className="nav navbar-nav navbar-right" style={{marginLeft: '7%'}}>
								<li>
									<a className="git" href={'https://github.com/roisy/'}>
										<FiGithub className="fa" size={24} />
									</a>
								</li>

								<li>
									<a
										class="youtube"
										href={
											'https://www.youtube.com/channel/UCnob9ZsHJMc_JS1JkveE5bA/'
										}
									>
										<FiYoutube className="fa" size={24} />
									</a>
								</li>

								<li>
									<a
										className="insta"
										href={'https://www.instagram.com/roisy.sa/'}
									>
										<FiInstagram size={24} />
									</a>
								</li>
							</ul>
						) : (
							<div></div>
						)}
						<ul className="nav navbar-nav navbar-right">
							<li>
								<a href="#about" className="page-scroll">
									Nosotros
								</a>
							</li>
							<li>
								<a href="#services" className="page-scroll">
									Proyectos
								</a>
							</li>
							<li>
								<a href="#portfolio" className="page-scroll">
									Galería
								</a>
							</li>

							<li>
								<a href="#team" className="page-scroll">
									Equipo
								</a>
							</li>
							<li>
								<a href="#contact" className="page-scroll">
									Contacto
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navigation;

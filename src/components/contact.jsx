import React, {Component} from 'react';
import {FiInstagram} from 'react-icons/fi';
import {FiYoutube} from 'react-icons/fi';
import {FiGithub} from 'react-icons/fi';

export class Contact extends Component {
	render() {
		return (
			<div>
				<div id="contact">
					<div className="container">
						<div className="col-md-8">
							<div className="row">
								<div className="section-title">
									<h2>Contacta con nosotros</h2>
									<p>
										Por favor rellena el siguiente formulario para mandarnos un email y le responeremos los antes posible.
									</p>
								</div>
								<form
									action="https://docs.google.com/forms/d/e/1FAIpQLSdMvl0i4vwy0LZVQkv5Aw17eeaxzrIYCU-m_Z0y9RqrXM5PVA/formResponse"
									target="_self"
									name="sentMessage"
									id="contactForm"
									method="POST"
								>
									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<input
													id="2005620554"
													type="text"
													name="entry.2005620554"
													className="form-control"
													placeholder="Name"
													required
												/>
												<p className="help-block text-danger"></p>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<input
													id="emailAddress"
													type="email"
													name="emailAddress"
													className="form-control"
													placeholder="Email"
													required
												/>
												<p className="help-block text-danger"></p>
											</div>
										</div>
									</div>
									<div className="form-group">
										<textarea
											id="1288428869"
											name="entry.1288428869"
											className="form-control"
											rows="4"
											placeholder="Message"
											required
										></textarea>
										<p className="help-block text-danger"></p>
									</div>
									<div id="success"></div>
									<button type="submit" className="btn btn-custom btn-lg">
										Send Message
									</button>
								</form>
							</div>
						</div>
						<div className="col-md-3 col-md-offset-1 contact-info">
							<div className="contact-item">
								<h3>Información de contacto</h3>
								<p>
									<span>
										<i className="fa fa-map-marker"></i> Dirección
									</span>
									{this.props.data ? this.props.data.address : 'loading'}
								</p>
							</div>
							{/*<div className="contact-item">
								<p>
									<span>
										<i className="fa fa-phone"></i> Phone
									</span>{' '}
									{this.props.data ? this.props.data.phone : 'loading'}
								</p>
							</div>*/}
							<div className="contact-item">
								<p>
									<span>
										<i className="fa fa-envelope-o"></i> Email
									</span>{' '}
									{this.props.data ? this.props.data.email : 'loading'}
								</p>
							</div>
						</div>
						<div className="col-md-12">
							<div className="row">
								<div className="social">
									<ul>
										<li>
											<a className="git" href={'https://github.com/roisy/'}>
												<FiGithub className="fa" size={30} />
											</a>
										</li>

										<li>
											<a
												class="youtube"
												href={
													'https://www.youtube.com/channel/UCnob9ZsHJMc_JS1JkveE5bA/'
												}
											>
												<FiYoutube className="fa" size={30} />
											</a>
										</li>

										<li>
											<a
												className="insta"
												href={'https://www.instagram.com/roisy.sa/'}
											>
												<FiInstagram size={30} />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="footer">
					<div className="container text-center">
						<p>
							&copy; 2020 ROISY. Design by{' '}
							<a href="http://www.templatewire.com" rel="nofollow">
								TemplateWire
							</a>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;

import React from 'react';
import '@/styles/components/footer/style.scss';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { links } from './config';

const Text = ({ title, text }: { title: boolean; text: string }) => (
	<p className={`${title ? 'title' : 'link'}`}>{text}</p>
);

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='wrapper'>
				<div className='services'>
					{links.services.map((link) => (
						<Text key={link.text} {...link} />
					))}
				</div>

				<div className='help-and-about'>
					<div className='help'>
						{links.help.map((link) => (
							<Text key={link.text} {...link} />
						))}
					</div>
					<div className='about'>
						{links.about.map((link) => (
							<Text key={link.text} {...link} />
						))}
					</div>
				</div>
				<div className='social-icons'>
					<FaFacebookF className='icon' />
					<FaTwitter className='icon' />
					<FaYoutube className='icon' />

					<FaInstagram className='icon' />
				</div>
			</div>
			<div className='copyright-links'>
				<Text
					text={`©${new Date().getFullYear()} Nike, Inc. All Rights Reserved`}
					title={false}
				/>
				<div className='links'>
					{links.copyrights.map((link) => (
						<Text key={link.text} {...link} />
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;

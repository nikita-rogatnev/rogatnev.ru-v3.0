// ------------------------------------------ //
// CERTIFICATES PAGE
// ------------------------------------------ //
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
	children: PropTypes.element
};

var Certificates = React.createClass({
	render: function ( ) {
		var CertificatesItemsComponents = this
			.props
			.CertificatesItems
			.map( function ( certificates__item ) {
				return (
					<article className="certificates__item" key={certificates__item.key} data-key={certificates__item.key}>
						<img src={certificates__item.certificates__image} className="certificates__image" alt={certificates__item.certificates__title}/>
						<div className="certificates__modal">
							<img src={certificates__item.certificates__image} className="certificates__image" alt={certificates__item.certificates__title}/>
						</div>
					</article>
				);
			});
		return <div className="certificates__items">{CertificatesItemsComponents}</div>;
	}
});

var CertificatesItems = [
	{
		key: '18',
		certificates__image: 'build/img/certificates/googlep-2.png'
	}, {
		key: '17',
		certificates__image: 'build/img/certificates/googlep-1.png'
	}, {
		key: '16',
		certificates__image: 'build/img/certificates/ccna-4.png'
	}, {
		key: '15',
		certificates__image: 'build/img/certificates/ccna-3.png'
	}, {
		key: '14',
		certificates__image: 'build/img/certificates/ccna-2.png'
	}, {
		key: '13',
		certificates__image: 'build/img/certificates/ccna-1.png'
	}, {
		key: '12',
		certificates__image: 'build/img/certificates/w3c.png'
	}, {
		key: '11',
		certificates__image: 'build/img/certificates/alison.jpg'
	}, {
		key: '10',
		certificates__image: 'build/img/certificates/mta-html5.png'
	}, {
		key: '9',
		certificates__image: 'build/img/certificates/mta-wosf.png'
	}, {
		key: '8',
		certificates__image: 'build/img/certificates/schneideruniversities-8.png'
	}, {
		key: '7',
		certificates__image: 'build/img/certificates/schneideruniversities-7.png'
	}, {
		key: '6',
		certificates__image: 'build/img/certificates/schneideruniversities-6.png'
	}, {
		key: '5',
		certificates__image: 'build/img/certificates/schneideruniversities-5.png'
	}, {
		key: '4',
		certificates__image: 'build/img/certificates/schneideruniversities-4.png'
	}, {
		key: '3',
		certificates__image: 'build/img/certificates/schneideruniversities-3.png'
	}, {
		key: '2',
		certificates__image: 'build/img/certificates/schneideruniversities-2.png'
	}, {
		key: '1',
		certificates__image: 'build/img/certificates/schneideruniversities-1.png'
	}

];

function certificates({ children }) {
	return (
		<div className="main__container">
			<section className="certificates" id="certificates">
				<div className="certificates__container">
					<div className="certificates__heading">
						<svg>
							<use xlinkHref="#albums"></use>
						</svg>
						<h1>
							<span className="language__english language__active">Certificates</span>
							<span className="language__russian">Сертификаты</span>
						</h1>
					</div>
					<div className="certificates__other">
						<img src="build/img/certificates/other/bitrix24.png" alt="bitrix24"/>
						<img src="build/img/certificates/other/googlep.png" alt="google certified partner"/>
						<img src="build/img/certificates/other/mcp.png" alt="microsoft certified professional"/>
						<img src="build/img/certificates/other/w3c.png" alt="w3c"/>
						<img src="build/img/certificates/other/ccna.png" alt="ccna"/>
						<img src="build/img/certificates/other/iwa.png" alt="iwa"/>
					</div>
					<Certificates CertificatesItems={CertificatesItems}/>
				</div>
			</section>
		</div>
	);
}

export default certificates;

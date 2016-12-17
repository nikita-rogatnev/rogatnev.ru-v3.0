// ------------------------------------------ //
// BLOG PAGE
// ------------------------------------------ //
import React, { PropTypes } from 'react';
import { blog__link } from 'react-router';

const propTypes = {
	children: PropTypes.element
};

var Blog = React.createClass({
	render: function ( ) {
		var BlogItemsComponents = this
			.props
			.BlogItems
			.map( function ( blog__item ) {
				return (
					<article className="blog__item" key={blog__item.key}>
						<header className="blog__item-media">
							<a href={blog__item.blog__link} target="_blank">
								<span className={"blog__item-label " + "blog__item-label--" + blog__item.blog__label}>{blog__item.blog__label}</span>
								<img src={blog__item.blog__image} alt={blog__item.blog__title}/>
							</a>
						</header>
						<footer className=" blog__item-content">
							<span className="blog__item-date">
								<span className="blog__item-day">{blog__item.blog__day}</span>
								{blog__item.blog__month}
							</span>
							<h1>{blog__item.blog__title}</h1>
							<p>{blog__item.blog__description}</p>
							<a href={blog__item.blog__link} target="_blank">
								<span className="language__english language__active">Continue reading at&nbsp;</span>
								<span className="language__russian">Читать дальше на&nbsp;</span>
								[{blog__item.blog__domain}]
							</a>
						</footer>
					</article>
				);
			});
		return <div className="blog__items">{BlogItemsComponents}</div>;
	}
});

var BlogItems = [
	{
		key: 16,
		blog__label: 'other',
		blog__title: 'Блог путешественника по Азии',
		blog__link: 'http://nomad.rogatnev.ru',
		blog__domain: 'nomad.rogatnev.ru',
		blog__day: '17',
		blog__month: 'dec 16',
		blog__description: 'Привет, меня зовут Рогатнев Никита. Я фронтенд разработчик, работаю удаленно. Это небольшой блог о моем путешествии по Азии.',
		blog__image: 'https://i1.wp.com/nomad.rogatnev.ru/wp-content/uploads/2016/11/14515886_157085634744845_6232110031689482240_n.jpg?zoom=2&resize=409%2C255'
	}, {
		key: 15,
		blog__label: 'thesis',
		blog__title: 'Responsive Web Design',
		blog__link: 'https://www.theseus.fi/handle/10024/94414',
		blog__domain: 'theseus.fi',
		blog__day: '28',
		blog__month: 'may 15',
		blog__description: 'In this thesis I described everything regarding to the responsive web design. I summed up and compared all the possible website layout approaches. The disadvantages of fixed, fluid, adaptive and hybrid layouts are so significant that it is undoubtedly clear that responsive approach is the best one.',
		blog__image: 'https://i.ytimg.com/vi/e8Syghjr8YM/maxresdefault.jpg'
	}, {
		key: 14,
		blog__label: 'digest',
		blog__title: 'Ежемесячный дайджест интересных IT-проектов на Kickstarter №6',
		blog__link: 'https://geektimes.ru/company/madrobots/blog/240182/',
		blog__domain: 'geektimes.ru',
		blog__day: '14',
		blog__month: 'oct 14',
		blog__description: 'Изобретатели продолжают пополнять Kickstarter интереснейшими IT проектами. Предлагаем вашему вниманию второй ежемесячный дайджест за сентябрь 2014 года.',
		blog__image: 'https://habrastorage.org/getpro/habr/post_images/12e/e06/53d/12ee0653d7347e963f09adfbcb52b9f2.jpg'
	}, {
		key: 13,
		blog__label: 'digest',
		blog__title: 'Ежемесячный дайджест интересных IT-проектов на Kickstarter №5',
		blog__link: 'https://habrahabr.ru/company/madrobots/blog/231689/',
		blog__domain: 'habrahabr.ru',
		blog__day: '28',
		blog__month: 'aug 14',
		blog__description: 'Изобретатели продолжают пополнять Kickstarter интереснейшими IT проектами. Предлагаем вашему вниманию второй ежемесячный дайджест за июль 2014 года.',
		blog__image: 'https://habrastorage.org/getpro/habr/post_images/12e/e06/53d/12ee0653d7347e963f09adfbcb52b9f2.jpg'
	}, {
		key: 12,
		blog__label: 'digest',
		blog__title: 'Ежемесячный дайджест интересных IT-проектов на Kickstarter №4',
		blog__link: 'https://habrahabr.ru/company/madrobots/blog/226385/',
		blog__domain: 'habrahabr.ru',
		blog__day: '17',
		blog__month: 'jul 14',
		blog__description: 'Изобретатели продолжают пополнять Kickstarter интереснейшими IT проектами. Предлагаем вашему вниманию второй ежемесячный дайджест за июнь 2014 года.',
		blog__image: 'https://habrastorage.org/getpro/habr/post_images/12e/e06/53d/12ee0653d7347e963f09adfbcb52b9f2.jpg'
	}, {
		key: 11,
		blog__label: 'digest',
		blog__title: 'Ежемесячный дайджест интересных IT-проектов на Kickstarter №3',
		blog__link: 'https://habrahabr.ru/company/madrobots/blog/220803/',
		blog__domain: 'habrahabr.ru',
		blog__day: '7',
		blog__month: 'may 14',
		blog__description: 'Изобретатели продолжают пополнять Kickstarter интереснейшими IT проектами. Предлагаем вашему вниманию второй ежемесячный дайджест за апрель 2014 года.',
		blog__image: 'https://habrastorage.org/getpro/habr/post_images/12e/e06/53d/12ee0653d7347e963f09adfbcb52b9f2.jpg'
	}, {
		key: 10,
		blog__label: 'digest',
		blog__title: 'Ежемесячный дайджест интересных IT-проектов на Kickstarter №2',
		blog__link: 'https://habrahabr.ru/company/madrobots/blog/217431/',
		blog__domain: 'habrahabr.ru',
		blog__day: '30',
		blog__month: 'mar 14',
		blog__description: 'Изобретатели продолжают пополнять Kickstarter интереснейшими IT проектами. Предлагаем вашему вниманию второй ежемесячный дайджест за март 2014 года.',
		blog__image: 'https://habrastorage.org/getpro/habr/post_images/12e/e06/53d/12ee0653d7347e963f09adfbcb52b9f2.jpg'
	}, {
		key: 9,
		blog__label: 'translation',
		blog__title: 'Клавиатура из LEGO',
		blog__link: 'https://geektimes.ru/post/258434/',
		blog__domain: 'geektimes.ru',
		blog__day: '11',
		blog__month: 'mar 14',
		blog__description: 'Меня всегда поражало, что только не строят люди из конструктора LEGO: от громадных фигур роботов и звездолетов до 3D принтеров и полномасштабных работающих картов. LEGO выдержало испытание временем. Даже спустя 65 лет после его изобретения конструкции из LEGO все еще очаровывают нас. Сегодня я представляю вам очередное произведение искусства — клавиатура из LEGO.',
		blog__image: 'https://habrastorage.org/getpro/habr/post_images/560/6e6/625/5606e662599455b418b01003b9958298.jpg'
	}, {
		key: 8,
		blog__label: 'translation',
		blog__title: 'DVD с запахом пиццы!',
		blog__link: 'https://geektimes.ru/post/214821/',
		blog__domain: 'geektimes.ru',
		blog__day: '9',
		blog__month: 'mar 14',
		blog__description: 'Разве вы не любите посмотреть с друзьями интересный фильмец с куском пиццы в руке? Пиццерия Domino’s Pizza в Бразилии решили смешать эти два удовольствия в одной коробке и выпустили термочувствительный DVD диск, который выглядит и пахнет как пицца.',
		blog__image: 'https://habrastorage.org/getpro/habr/post_images/e35/b88/38e/e35b8838e4ec19acc3d87a3e0c446030.jpg'
	}, {
		key: 7,
		blog__label: 'translation',
		blog__title: 'Федеральный суд США разрешил использование дронов в коммерческих целяx',
		blog__link: 'https://geektimes.ru/post/215073/',
		blog__domain: 'geektimes.ru',
		blog__day: '8',
		blog__month: 'mar 14',
		blog__description: 'Уже совсем скоро можно будет услышать жужжание маленьких лопастей коптеров, предвещающих доставку всего: от электроники, до пиццы и пива по всей территории Соединенных Штатов Америки. Это станет реальностью благодаря новому постановлению федерального судьи Патрика Джерати (Patrick Geraghty).',
		blog__image: 'https://habrastorage.org/getpro/habr/post_images/379/c3d/50d/379c3d50d179ff27d905c03273429782.jpg'
	}, {
		key: 6,
		blog__label: 'translation',
		blog__title: 'SurroundWeb — 3D-браузер от Microsoft',
		blog__link: 'https://geektimes.ru/post/214811/',
		blog__domain: 'geektimes.ru',
		blog__day: '7',
		blog__month: 'mar 14',
		blog__description: 'Microsoft Research усердно трудятся над разработкой системы «SurroundWeb», предназначенной для отображения содержимого веб страниц по всему пространству комнаты. SurroundWeb представляет из себя, своего рода, «3D браузер», создающей эффект полного погружения пользователя в интернет.',
		blog__image: 'https://habrastorage.org/getpro/habr/post_images/629/171/bb3/629171bb332065ddfb570a2e7fcc73f4.jpg'
	}, {
		key: 5,
		blog__label: 'translation',
		blog__title: 'Evernote для Android теперь поддерживает рукописный текст',
		blog__link: 'https://geektimes.ru/post/214817/',
		blog__domain: 'geektimes.ru',
		blog__day: '6',
		blog__month: 'mar 14',
		blog__description: 'Отличная новость для любителей Evernote на Android. Теперь, когда появится необходимость быстро сделать заметку, вы сможете сделать набросок от руки прямо в Evernote. Если вы таскаете с собой записную книжку, только потому что не любите печатать заметки на телефоне, начиная с сегодняшнего дня, обновление приложения Evernote станет для вас спасением.',
		blog__image: 'https://habrastorage.org/getpro/habr/post_images/9ea/750/f0c/9ea750f0ccc29cbd6c6aad27f378821e.jpg'
	}, {
		key: 4,
		blog__label: 'translation',
		blog__title: 'Необычный протез для барабанщика',
		blog__link: 'https://geektimes.ru/post/214555/',
		blog__domain: 'geektimes.ru',
		blog__day: '6',
		blog__month: 'mar 14',
		blog__description: 'Для многих барабанщиков потеря руки означает одно — окончание карьеры. Но не для Джейсона Барнса (Jason Barnes). Гил Вейнберг (Gil Weinberg), профессор технологического института Джорджии, сконструировал протез кисти, который не только восстановил базовые функции руки Джейсона, тем самым позволив ему играть как прежде, но и усовершенствовал ее.',
		blog__image: 'https://habrastorage.org/getpro/habr/post_images/c78/9d9/d70/c789d9d708354b93a2eea61c2f21c536.jpg'
	}, {
		key: 3,
		blog__label: 'digest',
		blog__title: 'Ежемесячный дайджест интересных IT-проектов на Kickstarter №1',
		blog__link: 'https://geektimes.ru/post/212843/',
		blog__domain: 'geektimes.ru',
		blog__day: '5',
		blog__month: 'mar 14',
		blog__description: 'Изобретатели продолжают пополнять Kickstarter интереснейшими IT проектами. Предлагаем вашему вниманию второй ежемесячный дайджест за февраль 2014 года.',
		blog__image: 'https://habrastorage.org/getpro/habr/post_images/12e/e06/53d/12ee0653d7347e963f09adfbcb52b9f2.jpg'
	}, {
		key: 2,
		blog__label: 'translation',
		blog__title: 'Кейлогер iOS 7',
		blog__link: 'https://habrahabr.ru/post/214327/',
		blog__domain: 'habrahabr.ru',
		blog__day: '3',
		blog__month: 'mar 14',
		blog__description: 'Проблема кейлогеров для мобильных приложений становится все заметнее в мире мобильных устройств. Уже достаточно давно стало известно, что джейлбрейкнутые IOS 7 девайсы могут быть уязвимы для кейлогеров, которые записывают и передают все ваши жесты и нажатия злоумышленникам. Теперь это касается и не взломанных IOS устройств.',
		blog__image: 'https://habrastorage.org/getpro/habr/post_images/9e4/4b2/852/9e44b28527e622fde10b4743e771ae73.png'
	}, {
		key: 1,
		blog__label: 'translation',
		blog__title: 'Как удалить 1500000 записей из базы данных Yahoo',
		blog__link: 'https://habrahabr.ru/post/213187/',
		blog__domain: 'habrahabr.ru',
		blog__day: '2',
		blog__month: 'mar 14',
		blog__description: 'На четвертом по посещаемости сайте — Yahoo.com, была обнаружена очередная уязвимость, на этот раз на поддомене suggestions.yahoo.com. Эта уязвимость позволяет злоумышленнику удалить всю ленту доски предложений (Yahoo Suggestion Board), а так же все комментарии к ней.',
		blog__image: 'http://searchengineland.com/figz/wp-content/seloads/2014/07/yahoo-logo-fade-ss-1920-800x450.jpg'
	}
];

function blog({ children }) {
	return (
		<div className="main__container">
			<section className="blog" id="blog">
				<div className="blog__container">
					<div className="blog__heading">
						<svg>
							<use xlinkHref="#notebook"></use>
						</svg>
						<h1>
							<span className="language__english language__active">Blog</span>
							<span className="language__russian">Блог</span>
						</h1>
					</div>
					<Blog BlogItems={BlogItems}/>
				</div>
			</section>
		</div>

	);
}

export default blog;

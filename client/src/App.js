import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from './logo.svg';
import logoWit from './logo-wit.svg';
import './App.css';

class Nav extends Component {
	render() {
		return (
			<nav>
			<img src={logoWit} alt="AT van Wijngaarden logo" id="nav-logo" />
				<div className="menu-toggle">
					<input type="checkbox" />
					<span></span>
					<span></span>
					<span></span>

					<div className="menu">
						<AnchorLink href="#hero">Home</AnchorLink>
						<AnchorLink href="#auteur">Auteur</AnchorLink>
						<AnchorLink href="#bestellen">Bestellen</AnchorLink>
						<AnchorLink href="#verder">Verder</AnchorLink>
						<AnchorLink href="#contact">Contact</AnchorLink>
					</div>
				</div>
			</nav>
		)
	}
}

class Sub extends Component {
	render() {
		return (
			<div id={this.props.id} className="sub">
				<div id={"pic-ruimte-" + this.props.id} class="picture"></div>
	            <div class="content center">
	                <h3>{this.props.title}</h3>
				    <p dangerouslySetInnerHTML={{__html: this.props.text}}></p>
	            </div>
			</div>
		)
	}
}


class Section extends Component {
	render() {
		let subs = [];
		let head = (this.props.title ? <h2>{this.props.title}</h2> : '')
		if (this.props.subs && this.props.subs.length > 0) {
			console.log(this.props.subs)
			this.props.subs.forEach (function(el, i) {
				subs.push(<Sub
					id 		= {i}
					title 	= {el[0]}
					text 	= {el[1]}
					/>
				)
			});
		}
		return (
			<div id={this.props.id} className="section">
				<div className="content center">
					{head}
					<p dangerouslySetInnerHTML={{__html: this.props.text}}></p>
				</div>
				<div id={'pic-' + this.props.id} className="picture"></div>
				{subs}
			</div>
		)
	}
}


class App extends Component {
	render() {
		return (
			<div className="App">
				<Nav />


				<div className="container">
					<div id="hero">
						<img src={logo} alt="AT van Wijngaarden logo" id="logo" />
						<h5>Op 29 juni 2019 verschijnt het boek:</h5>
						<h4>De architect A.T. van Wijngaarden (1819-1900)</h4>
						<h5>Een eclectische signatuur in het West-Friese landschap</h5>
					</div>

					<Section
						id    = "introductie"
						title = "Over het boek"
						text  = "Veel beeldbepalende en vaak monumentale panden in Medemblik, Oostwoud, Midwoud, Nieuwe Niedorp, Winkel, Abbekerk en tientallen andere West-Friese plaatsen zijn van de hand van één architect: Arnoldus Teunis van Wijngaarden (1819-1900). Zijn oeuvre omvat zeker 57 gebouwen – kerken, raadhuizen, pastorieën, scholen, wees- en armenhuizen en postkantoren – waarvan er 41 nog tot op de dag van vandaag te bewonderen zijn. Maar liefst zeven ervan hebben de status van rijksmonument.<br><br>
							Toch is A.T. van Wijngaarden, die ook nog eens meer dan 50 jaar stadsarchitect van Medemblik was, tot nu toe vrijwel onbekend gebleven. Onterecht, want met zijn eclectische stijl, vergelijkbaar met die van zijn beroemde tijdgenoot Pierre Cuypers, drukte hij een heel eigen stempel op het West-Friesland van zijn tijd.<br><br>
							Dit boek voert u langs leven en werk van A.T. van Wijngaarden, met beschrijvingen van de totstandkoming en de architectuurkenmerken van alle 57 panden, inclusief uniek beeldmateriaal."
					/>

					<Section
						id    = "auteur"
						title = "Over de auteur"
						text  = "A.T. van Wijngaarden is de betovergrootvader van Florence van Wijngaarden, de echtgenote van auteur Gerard de Vries. Geïntrigeerd door het ontbreken van informatie over deze voorouder begint De Vries, in het dagelijks leven arts-epidemioloog en een leek in de architectuur(geschiedenis), een eigen zoektocht die al snel prachtige vondsten oplevert. In dit boek ontsluit hij het indrukwekkende bouwoeuvre van de Medemblikse ‘StadsArchitect’ voor alle liefhebbers van architectuur, van geschiedenis of gewoon van het West-Friese landschap."
					/>

					<Section
						id    = "bestellen"
						title = "Hoe te bestellen?"
						text  = "Het boek kost 25 euro (exclusief verzendkosten) en is te bestellen via <a href='mailto:info@atvanwijngaarden.nl'>info@atvanwijngaarden.nl</a> . Het boek is vanaf 1 juli 2019 ook verkrijgbaar in de boekwinkels van Stumpel in de West-Friese regio (o.a. in Medemblik, Wieringerwerf en Hoorn).<br><br>

							Het boek werd financieel ondersteund door de gemeente Medemblik, Stichting Stadsherstel Medemblik, de gemeente Hollands Kroon en door verschillende anderen via crowdfunding.
"
					/>

					<Section
						id    = "verder"
						title = "En Verder"
						text  = "<ul>
							<li>Van juni-september 2019 is de expositie ‘De gebouwen van A.T. van Wijngaarden door de ogen van de kunstenaars’ in de ontvangsthal van het gemeentehuis te Wognum (middengebouw). De expositie laat werken zien van zes kunstenaars (schilderijen, etsen, een pentekening en foto’s).</li>
							<li>Op <a href='https://nl.wikipedia.org/wiki/Arnoldus_Teunis_van_Wijngaarden' target='_blank'>Wikipedia</a> is een pagina over A.T. van Wijngaarden aangemaakt met zijn bouwoeuvre</li>
							<li>In 2018 verscheen een <a href='/Artikel.jpg' target='_blank'>artikel</a> over het project en de architect in het Noord-Hollands Dagblad.</li>
							<li>In juli 2019 verscheen een <a href='/NHD 17 juli 2019.pdf' target='_blank'>artikel</a> over het boek in de Schager Courant. </li>
						</ul>
						"
					/>

					<Section
						id    = "contact"
						title = "contact"
						text  = "Heeft u verdere vragen of opmerkingen?<br> mail dan met:<br> <br>

							<a class='button' href='mailto: info@atvanwijngaarden.nl'> info@atvanwijngaarden.nl</a>"
					/>

				</div>
			</div>
		);
	}
}

export default App;

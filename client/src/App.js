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
						<AnchorLink href="#wie">Over</AnchorLink>
						<AnchorLink href="#onderzoek">Onderzoek</AnchorLink>
						<AnchorLink href="#sponsoren">Sponsoren</AnchorLink>
						<AnchorLink href="#steun">Steun</AnchorLink>
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
						<h4>De architect A.T. van Wijngaarden (1819-1900)</h4>
<h5>Een eclectische signatuur in het Noord-Hollandse landschap</h5>
					</div>

					<Section 
						id    = "introductie"
						title = ""
						text  = "Veel beeldbepalende en vaak monumentale panden in Medemblik en tientallen West-Friese dorpen zijn van de hand van één architect: Arnoldus Teunis van Wijngaarden. De architect van deze monumentale panden heeft tot nu toe te weinig aandacht gekregen. Daarin brengen we verandering met de uitgave van een boek over zijn leven en zijn indrukwekkende bouwoeuvre. Het boek over zijn leven en werk verschijnt ter gelegenheid van zijn 200ste geboortedag, op 29 juni 2019."
					/>

					<Section 
						id    = "wie"
						title = "Wie is A.T. van Wijngaarden?"
						text  = "Op 29 juni 1819 werd Arnoldus Teunis in Papendrecht geboren. Al op 26-jarige leeftijd wordt hij benoemd tot ‘Stads Architect’ van Medemblik. Niet lang daarna komen de eerste verzoeken binnen uit omliggende dorpen en steden om kerken en pastorieën, gemeentehuizen, scholen en onderwijzerswoningen, postkantoren en wees- en armenhuizen te ontwerpen. In de loop van een halve eeuw resulteert dat in tientallen karakteristieke panden, vaak in eclectische stijl, die in deze dorpen en steden nog steeds een bijzondere plaats innemen. De cultuur-historische waarde ervan wordt onderstreept door de status van rijks- of provinciaal monument van een aantal gebouwen. <br> <a href='https://nl.wikipedia.org/wiki/Arnoldus_Teunis_van_Wijngaarden'>wikipedia</a>"
					/>

					<Section 
						id    = "onderzoek"
						title = "Succesvol onderzoek"
						text  = "Meer dan anderhalf jaar onderzoek heeft een rijkdom aan gegevens aan het licht gebracht. In regionale archieven duikt de naam A.T. van Wijngaarden vele honderden keren op: in notulen van gemeenteraads- of kerkraadsvergaderingen als hij bouwplannen komt toelichten, in handgeschreven briefjes aan burgemeesters over de voortgang van de bouw, in nota’s en uiteraard in bestekken, begrotingen en tekeningen van de gebouwen. De archiefbronnen geven een goed beeld van zijn bouwactiviteiten en zijn persoonlijkheid. <br> <br>
Andere belangrijke bronnen zijn de huidige bezitters/bewoners van de panden, de historische verenigingen en andere familieleden van A.T. van Wijngaarden."
					/>

					<Section 
						id    = "sponsoren"
						title = "Voorintekenen en sponsoren"
						text  = "Een boek over architect A.T. van Wijngaarden vraagt om professionele vormgeving en drukwerk. De totale productiekosten van deze gebonden uitgave, van 120 pagina’s met veel beeldmateriaal en met een harde omslag, hebben we beperkt weten te houden tot circa € 12.500,-. We willen het boek betaalbaar houden en voor € 25,- verkopen. Bij een geschatte verkoop van 300 exemplaren, levert dit een restbedrag op van € 5.000,-. Dit bedrag willen we via sponsoring door organisaties en crowdfunding aanvullen."
					/>

					<Section 
						id    = "steun"
						title = "Steun dit project"
						text  = "<ol><li>Door in te tekenen voor één of meerdere exemplaren van het boek. Als vroeg-inschrijver betaalt u € 20,-.</li>
<li>Sponsoren van het project en het boek is ook mogelijk. Elk bedrag is welkom. Als u dat wilt komt uw naam in het boek te staan. Voor organisaties is naamsvermelding met logo mogelijk vanaf € 500,-.</li>
</ol>

U kunt zich inschrijven als vroeg-inschrijver of sponsor door een mail te sturen naar: <a class='button' href='mailto: info@atvanwijngaard.com'> info@atvanwijngaard.com</a> <br> <br> "
					/>

					<Section 
						id    = "contact"
						title = "contact"
						text  = "Heeft u verdere vragen of opmerkingen?<br> mail dan met:<br> <br>

							<a class='button' href='mailto: info@atvanwijngaard.com'> info@atvanwijngaard.com</a>"
					/>

				</div>
			</div>
		);
	}
}

export default App;

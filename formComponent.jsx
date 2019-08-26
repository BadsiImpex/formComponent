class TextField extends React.Component {
	constructor(props){
		super(props);
		this.handleTextChange = this.handleTextChange.bind(this);
	}
	handleTextChange(e){
			this.props.onTextChange(e.target.value);
	}
	render(){
		return(
			<React.Fragment>
				<label for={this.props.ID}>{this.props.label}</label>
				<input id={this.props.ID}
					   type="text"
					   name={this.props.name}
					   value={this.props.text}
					   onChange={this.handleTextChange}></input>
				<br/>
				<span>{this.props.textError}</span>
			</React.Fragment>
		);
	}
}
class Email extends React.Component {
	constructor(props){
		super(props);
		this.handleEmailChange = this.handleEmailChange.bind(this);
	}
	handleEmailChange(e){
		this.props.onEmailChange(e.target.value);
	}
	render(){
		return(
			<React.Fragment>
				<label for={this.props.ID}>{this.props.label}</label>
				<input id={this.props.ID}
					   type="email"
					   name={this.props.name}
					   value={this.props.emailVal}
					   onChange={this.handleEmailChange}></input>
				<br/>
				<span>{this.props.emailError}</span>
			</React.Fragment>
		);
	}
}
class TextArea extends React.Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e){
		this.props.onTextareaChange(e.target.value);
	}
	render(){
		return(
			<React.Fragment>
				<label for={this.props.ID}>{this.props.label}</label>
				<textarea id={this.props.ID}
						  name={this.props.name}
						  rows="4" cols="50"
						  onChange={this.handleChange}
						  value={this.props.obsText}></textarea>
			</React.Fragment>
		);
	}
}
class DateInput extends React.Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e){
		this.props.dateChange(e.target.value);
	}
	convertToTwoDigit(x){
		return String("0"+x).slice(-2);
	}
	render(){
		const date = new Date();
		const currDate = 
`${date.getFullYear()}-${this.convertToTwoDigit(date.getMonth()+1)}-${this.convertToTwoDigit(date.getDate())}`;
		return (
			<React.Fragment>
				<label for={this.props.ID}>{this.props.label}</label>
				<input id={this.props.ID} type="date" value={this.props.dateVal} 
min={currDate} onChange={this.handleChange}></input>
                <span>{this.props.dateError}</span>
			</React.Fragment>
		);
	}
}
class ServiceType extends React.Component {
	constructor(props){
		super(props);
		this.handleServTypeChange = this.handleServTypeChange.bind(this);
	}
	handleServTypeChange(e){
		this.props.handleClick(e.target.value);
	}
	render(){
		const onclickFunc = this.handleServTypeChange;
		const icon = this.props.serviceIcons;
		return (
			<React.Fragment>
				{this.props.serviceNames.map(function(service, index) {
					return (
						<React.Fragment>
							<button key={index}
									value={service}
									onClick={onclickFunc}
									name = {service}
									style={ 
										{
											backgroundImage: "url("+[icon[index]]+")",
											backgroundRepeat: "no-repeat",
											width: "250px",
											height: "250px",
											paddingTop: "180px"
										}
									}>
								{service}</button>
						</React.Fragment>
					);
                })}
                <span>{this.props.serviceTypeError}</span>
		    </React.Fragment>
		);
	}
}
class Gdpr extends React.Component {
	constructor(props){
		super(props);
		this.gdprChange = this.gdprChange.bind(this);
	}
	gdprChange(e){
		if(e.target.checked === true) this.props.gdprChange("Yes");
		else {
			this.props.gdprChange("No");
		} 
	}
	render(){
		return (
			<div>
				<input type="checkbox" id={this.props.ID} onChange={this.gdprChange}></input>
				<label for={this.props.ID}>
					<a href={this.props.link} target="_blank" rel="noreferrer">
						{this.props.description}
					</a>
				</label>
                <span>{this.props.gdprError}</span>
			</div>
		);
	}
}
class SubmitBtn extends React.Component {
	constructor(props){
		super(props);
		this.clickSubmit = this.clickSubmit.bind(this);
	}
	clickSubmit(){
		this.props.formSubmit(true);
	}
	render(){
		return (
			<React.Fragment>
				<button className={this.props.className} type="button" onClick={this.clickSubmit}>{this.props.msgCTA}</button>
			</React.Fragment>
		);
	}
}
class ServiceDetail extends React.Component {
	constructor(props) {
		super(props);
		this.handleObsChange = this.handleObsChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);
	}
	handleObsChange(obs){
		this.props.handleObsChange(obs);
	}
	handleClick(val){
		this.props.handleServTypeClick(val);
	}
	handleDateChange(val){
		this.props.handleDateChange(val);
	}
	render() {
		return(
			<React.Fragment>
				<ServiceType serviceNames={this.props.serviceNames}
							 serviceIcons={this.props.serviceIcons}
							 servSelected = {this.props.serviceType}
							 handleClick = {this.handleClick}
                             serviceTypeError= {this.props.serviceTypeError}/>
				<DateInput ID="date"
					  label="Data Programmari"
					  dateVal={this.props.dateVal}
					  dateChange={this.handleDateChange}
                      dateError = {this.props.dateError}/>
				<TextArea ID="observation"
						  label="Observaţii"
						  name="observation"
						  onTextareaChange={this.handleObsChange}
						  obsText={this.props.obs}/>
			</React.Fragment>
		);
	}
}
class CarDetail extends React.Component {
	constructor(props) {
		super(props);
		this.handleInmatChange = this.handleInmatChange.bind(this);
		this.handleMarcaChange = this.handleMarcaChange.bind(this);
	}
	handleInmatChange(val){
		this.props.handleInmatChange(val);
	}
	handleMarcaChange(val){
		this.props.handleMarcaChange(val);
	}
	render() {
		return(
			<React.Fragment>
				<TextField ID="inmatriculare"
						   label="Nr. de înmatriculare"
						   name="inmatriculare"
						   onTextChange={this.handleInmatChange}
						   text={this.props.inmat}
						   textError = {this.props.inmatError}></TextField>
				<TextField ID="marca"
						   label="Marcă"
						   name="marca"
						   onTextChange={this.handleMarcaChange}
						   text={this.props.marca}></TextField>
			</React.Fragment>
		);
	}
}
class ContactDetail extends React.Component {
	constructor(props) {
		super(props);
		this.lastNameChange = this.lastNameChange.bind(this);
		this.firstNameChange = this.firstNameChange.bind(this);
		this.emailChange = this.emailChange.bind(this);
		this.telChange = this.telChange.bind(this);
	}
	lastNameChange(val){
		this.props.lastNameChange(val);
	}
	firstNameChange(val){
		this.props.firstNameChange(val);
	}
	emailChange(val){
		this.props.emailChange(val);
	}
	telChange(val){
		this.props.telChange(val);
	}
	render() {
		return(
			<React.Fragment>
				<TextField ID="nume"
						   label="Nume"
						   name="nume"
						   text={this.props.lastNameVal}
						   onTextChange={this.lastNameChange}
                           textError = {this.props.numeError}></TextField>
				<TextField ID="prenume"
						   label="Prenume"
						   name="prenume"
						   text={this.props.firstNameVal}
						   onTextChange={this.firstNameChange}
                           textError = {this.props.preNumeError}></TextField>
				<Email ID="email"
					   label="Email"
					   name="email"
					   emailVal={this.props.emailVal}
					   onEmailChange={this.emailChange}
					   emailError={this.props.emailError}></Email>
				<TextField ID="tel"
						   label="Telefon Mobil"
						   name="tel"
						   text={this.props.telVal}
						   onTextChange={this.telChange}
						   textError={this.props.telError}></TextField>
			</React.Fragment>
		);
	}
}
class SubmitDetail extends React.Component {
	constructor(props) {
		super(props);
		this.gdprChange = this.gdprChange.bind(this);
	}
	gdprChange(val){
		this.props.gdprChange(val);
	}
	render() {
		return(
			<React.Fragment>
				<Gdpr ID="gdpr"
					  link="/gdpr/"
					  description="Sunt de acord cu Termenii & Conditiile"
                      gdprChange={this.gdprChange}
                      gdprError = {this.props.gdprError} />
				<SubmitBtn className={this.props.className} formSubmit = {this.props.formSubmit} msgCTA="Rezerva-ti Serviciul" />
			</React.Fragment>
		);
	}
}
class Validate {
	constructor(){
		//this.data = obj;
	}
	isEmpty(val) {
		return val === '';
	}
	isValidEmail(val){
		let regexp = /[a-z0-9.\-_]+@{1}[a-z]+.{1}[a-z]+/gi;
		let array = [...val.matchAll(regexp)];
		if(array[0] === undefined) return false;
		if(array.length>1) return false;
		if(array[0][0].length !== val.length) return false;
		regexp = /@/gi;
		array = [...val.matchAll(regexp)];
		if(array.length>1) return false;
		return true;
	}
	isValidTel(val){
		let regexp = /\s/g;
		val = val.replace(regexp, "");
		regexp = /\+?\d+/g
		let array = [...val.matchAll(regexp)];
		if(array[0] === undefined) return false;
		if(array.length>1) return false;
		if(array[0][0].length !== val.length) return false;
		regexp = /\+/gi;
		array = [...val.matchAll(regexp)];
		if(array.length>1) return false;
		return true;
	}
	validateEmail(email){
		if(this.isEmpty(email)) {
			return "Enter Email Please";
		}
		else if(!this.isValidEmail(email)){
			return "Not a valid email";
		} else {
			return "Valid Email";
		}
	}
	validateTelfon(telfon){
		if(this.isEmpty(telfon)) {
			return "Enter Telefon Please";
		}
		else if(!this.isValidTel(telfon)){
			return "Not a valid number";
		} else {
			return "Valid Number";
		}
	}
}

export {TextField, Email, TextArea, DateInput, ServiceType, Gdpr, SubmitBtn, ServiceDetail, CarDetail, ContactDetail, SubmitDetail, Validate}; 

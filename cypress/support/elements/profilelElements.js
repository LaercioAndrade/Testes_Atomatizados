class profileElements {

//login   
botãominhaconta = () => {return '.dropdown-login'}
botãologin = () => {return '.dropdown-menu > div > .active'}
email = () => {return ':nth-child(1) > .pure-material-textfield-outlined > span'}
senha = () => {return ':nth-child(2) > .pure-material-textfield-outlined > span'}
clicarlogin = () => {return '#loginfrm > .btn-primary'}
validarlogin = () => {return '.text-align-left'}

//profile
myprofile = () =>{return ':nth-child(2) > .nav-link'}
}

export default profileElements;
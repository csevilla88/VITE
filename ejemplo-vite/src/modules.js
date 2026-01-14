export const person = {
	name: "Stephen",
	surname: "Strange"
};

export const sayHello = (person) => {
	return `Hello, ${person.name} ${person.surname}!`;
}

//Metodo default para exportar
const DEV_LAN = "JavaScript";
export default DEV_LAN;
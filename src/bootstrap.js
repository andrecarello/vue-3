export const controller = (name) => {

  const controllerName = `${name}Controller`;

  if (typeof name === 'string') {
    if (_.controllers.indexOf(controllerName)) {
      const loadedController = require(`@/controllers/${controllerName}`).default;

      if (typeof loadedController === 'function') {
				return new loadedController();
			} else {
				throw `Verifique se o controlador ${name} está sendo exportado como default`;
			}
    }
  }
  else {
    throw `Registro passado no App ${name}, não foi encontrado na Controller`
  }
}

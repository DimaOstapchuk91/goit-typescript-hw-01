type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, 'errors'>;

//* Консоль логи порибив що б не било помилку при деплої, прочитав що можна відключити налаштування "noUnusedLocals": false, ну наче як не рекомендовано

const test: Params = {
  email: 'string | null;',
  firstName: 'string',
  lastName: 'string | null;',
  phone: 'string | null;',
};

console.log(test);

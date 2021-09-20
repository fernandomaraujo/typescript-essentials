// Preocupação não com a tipagem, mas sim com o conteúdo

/**
 * Comparando as informações de login enviadas (sentValue)
 * com as informações que estão no banco de dados (user)
 */

// Retorna um boolean, true ou false
type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const VerifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

// Representando informações do usuário no banco de dados
const bdUser = { username: 'Marshall', password: 'gouda123' };

// Representando informações do usuário enviados pelo servidor
const sentUser = {
  username: 'Marshall',
  password: 'gouda123',
  permissions: '',
};

// Passando parâmetros e guardando resultado boolean
const loggedIn = VerifyUser(bdUser, sentUser);
console.log(loggedIn);

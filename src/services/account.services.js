
/**
 * Saves a token in local storage.
 *
 * @param {string} token - The token to be saved
 * @return {void}
 */
const saveToken = (token) => {
  localStorage.setItem('argent_bank_token', token);
};

/**
 * Retrieves the token stored in local storage.
 *
 * @return {string|null} The token value, or null if it does not exist.
 */
const getToken = () => {
  return localStorage.getItem('argent_bank_token');
};

/**
 * Saves an id in local storage.
 *
 * @param {string} id - The id to be saved
 * @return {void}
 */
const saveId = (id) => {
  localStorage.setItem('argent_bank_id', id);
};

/**
 * Retrieves the id stored in local storage.
 *
 * @return {string|null} The id value, or null if it does not exist.
 */
const getId = () => {
  return localStorage.getItem('argent_bank_id');
};

/**
 * Saves an email in local storage.
 *
 * @param {string} email - The email to be saved
 * @return {void}
 */
const saveEmail = (email) => {
  localStorage.setItem('argent_bank_email', email);
};

/**
 * Retrieves the email stored in local storage.
 *
 * @return {string|null} The email value, or null if it does not exist.
 */
const getEmail = () => {
  return localStorage.getItem('argent_bank_email');
};

/**
 * Saves the first name in local storage.
 *
 * @param {string} firstName - The first name to be saved
 * @return {void}
 */
const saveFirstName = (firstName) => {
  localStorage.setItem('argent_bank_firstName', firstName);
};

/**
 * Retrieves the first name stored in local storage.
 *
 * @return {string|null} The first name value, or null if it does not exist.
 */
const getFirstName = () => {
  return localStorage.getItem('argent_bank_firstName');
};

/**
 * Saves the last name in local storage.
 *
 * @param {string} lastName - The last name to be saved
 * @return {void}
 */
const saveLastName = (lastName) => {
  localStorage.setItem('argent_bank_lastName', lastName);
};

/**
 * Retrieves the last name stored in local storage.
 *
 * @return {string|null} The last name value, or null if it does not exist.
 */
const getLastName = () => {
  return localStorage.getItem('argent_bank_lastName');
};

/**
 * Clears all data stored in local storage.
 *
 * @return {void}
 */
const clearStorage = () => {
  localStorage.clear();
};

const accountServices = {
  saveToken,
  getToken,
  saveId,
  getId,
  saveEmail,
  getEmail,
  saveFirstName,
  getFirstName,
  saveLastName,
  getLastName,
  clearStorage,
};

export default accountServices;
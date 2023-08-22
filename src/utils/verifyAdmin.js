export const verifyAdmin = () => {
  const isAdmin = localStorage.getItem('isAdmin')
  if (!isAdmin) {
    alert('Debes verificar tu email para ingresar.')
    return false;
  }
  return true
}